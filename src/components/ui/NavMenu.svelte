<script context="module">
	export const preload = () => {};
</script>

<script>
	import ButtonInsignia from "./buttons/ButtonInsignia.svelte";
	import ButtonMenu from "./buttons/ButtonMenu.svelte";
	import ButtonMute from "./buttons/ButtonMute.svelte";
	import ButtonSound from "./buttons/ButtonSound.svelte";
	import {mute, menu, menuBadges} from "../../store";
	import { goto } from "@sapper/app";
	import type { Writable } from "svelte/store";	
	import { writable } from "svelte/store";	
	import ButtonHome from "./buttons/ButtonHome.svelte";
	import ButtonReload from "./buttons/ButtonReload.svelte";
	// String.prototype. 
	
	// import { onMount, tick } from "svelte/internal";
	let title: string = '';
	let show: boolean = false;
	export let path: string | any = 'title'; 
	const currentPath: Writable<string> = writable('');
	$: if (path) {
		currentPath.set(path);
		switch (path) {
			case 'map': 
				title = 'Mapa del barrio san cristobal';
				break;
			case 'park': 
				title = 'Parque san cristobal';
				break;
			case 'street': 
				title = 'Calles de san cristobal';
				break;
			case 'school': 
				title = 'Salon de clase';
				break;
			case 'river': 
				title = 'Rio Fucha';
				break;
			default: 
				title = '';
		}
		show = Boolean(title);
	} else if (show) {
		currentPath.set("");
		show = false;
	}
	

</script>

<style>
	.nav-ber-menu {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: calc(var(--vh-main) * 11);
		background-color: var(--color-primary);
		box-shadow: 0px -5px 0px 0px inset #125e36;
		border-radius: 0px  0px calc(var(--vh-main) *  2) calc(var(--vh-main) *  2);
		position: relative;
		z-index: 10;
		transform: translateY(-100%);
		filter: opacity(0);
		transition: all 300ms linear;
	}
	.title {
		text-shadow: 0px 0px 1px black,
					 0px 0px 2px black,
					 0px 0px 1px black;
		font-size: 1.6em;
	}
	.icon  {
		position: relative;
		top: calc(var(--vh-main) * 3);
	}
	.icon img {
		width: calc(var(--vh-main) * 35);
	}
	.menu {
		width: calc(var(--vh-main) * 40);
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.menu button {
		transition: all 100ms;
	}
	.menu button:hover {
		transform-origin: center center;
		transform: scale(1.1);
	}
	.show {
		transform: translateY(0%);
		filter: opacity(1) contrast(1.3);
	}
	.button-menu .prefetch {
		width: 0px;
		height: 0px;
		position: absolute;
	}
	.button-menu:hover .prefetch:nth-of-type(1) {
		background-image: url('../img/buttons/btn-continuar.png');
	}
	.button-menu:hover .prefetch:nth-of-type(2) {
		background-image: url('../img/buttons/btn-insignias.png');
	}
	.button-menu:hover .prefetch:nth-of-type(3) {
		background-image: url('../img/buttons/btn-inicio.png');
	}
	.button-menu:hover .prefetch:nth-of-type(4) {
		background-image: url('../img/buttons/opciones.png');
	}
</style>

<div class="nav-ber-menu" class:show={show} >
	<figure class="icon" >
		<img src="img/global/logo.png" alt="splash art - logo"/>
	</figure>
	<h1 class="title">{title}</h1>
	<nav class="menu">
		{#if ((/(park)|(street)|(school)|(river)/).test($currentPath))}
			<button
				on:click={goto.bind(null, "/map")}
			>
				<ButtonHome/>
			</button>
		{/if}
		{#if ((/(map)/).test($currentPath))}
			<button
				on:click={() => goto("/")}
			>
				<ButtonReload/>
			</button>
		{/if}
		<button
			id="menuBadges"
			on:click={menuBadges.set.bind(null, true)}
		>
			<ButtonInsignia/>
		</button>
		{#if ($mute)}
			 <button
			 	on:click={mute.set.bind(null, false)}
			 >
				 <ButtonMute/>
			 </button>
		{:else}
			 <button
			 	on:click={mute.set.bind(null, true)}
			 >
				 <ButtonSound/>
			 </button>
		{/if}
		<button
			on:click={menu.set.bind(null, true)}
			class="button-menu"
		>
			<ButtonMenu/>
			<div class="prefetch"></div>
			<div class="prefetch"></div>
			<div class="prefetch"></div>
			<div class="prefetch"></div>
		</button>
	</nav>
</div>