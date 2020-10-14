<script>
	import {menu, menuBadges} from "../../store";
	import ButtonClose from "./buttons/ButtonClose.svelte";
	import ButtonWood from "./buttons/ButtonWood.svelte";
	import {goto} from "@sapper/app"
</script>
<style>
	.shadow {
		display: grid;
		place-items: center;
		top: 0px;
		background-color: rgba(0, 26, 2, 0.7);
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 10;
	}
	nav {
		--padding: calc(var(--vh-main) * 4); 

		display: flex;
		flex-direction: column;
		gap: calc(var(--vh-main) * 2);
		background-color: #003804;
		padding: var(--padding);
		border-radius:  calc(var(--vh-main) * 2);
		box-shadow: 0px 0px 0px calc(var(--vh-main) * 1) rgb(246, 250, 240);
		position: relative;
	}
	button {
		position: absolute;
		transition: all 100ms;
		left: calc(var(--vh-main) * -4);
		bottom: calc(var(--vh-main) * -4);
		transform: scale(1.5);
	}
	button:hover {
		transform-origin: center center;
		transform: scale(1.7);
	}
</style>
{#if $menu}
	<div 
		class="shadow"
		on:click|stopPropagation={menu.set.bind(null, false)}
	>
		<nav
			on:click|stopPropagation={()=>{}}
		
		>
			<ButtonWood on:click={() => {
				menu.set(false);
				}} 
				img="img/buttons/btn-continuar.png"
			>
			</ButtonWood>
			<ButtonWood on:click={() => {
					menu.set(false);
					menuBadges.set(true);
				}} 
				img="img/buttons/btn-insignias.png"
			>
			</ButtonWood>
			<ButtonWood on:click={() => {
					menu.set(false);
					goto('/');
				}} 
				img="img/buttons/btn-inicio.png"
			>
			</ButtonWood>
			<ButtonWood on:click={() => {
				
				}} 
				img="img/buttons/opciones.png"
			>
			</ButtonWood>
			
			<button
				on:click={menu.set.bind(null, false)}
			>
				<ButtonClose/>
			</button>
		</nav>
	</div>
{/if}