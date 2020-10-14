<script context="module">
	export const preload = () => {};
	
</script>

<script>
	import { stores } from "@sapper/app";
	import { onMount } from "svelte/internal";
	import NavMenu from '../components/ui/NavMenu.svelte'
	import Menu from "../components/ui/Menu.svelte";
	import MenuBadges from "../components/ui/MenuBadges.svelte";
	import DialogAmimate from "../components/ui/DialogAmimate.svelte";
	import {creditsAndDetails} from "../store";
	
	export let segment: string = "";
	if (segment) {};
	const { page } = stores();
	let path: string;
	$: path = $page.path.slice(1);

	let header: HTMLElement;
	let main: HTMLElement;
	let footer: HTMLElement;
	type AspectRatio = {height: number, width: number}
	const aspectRatio: AspectRatio = {
		height: 0.5625,
		width: 1.7777,
	}
	onMount(() => {
		// Define the height of the main with a 16 / 9 of aspect ratio
		const definesMainHeight = () => {
			if (header && main && footer) {
				const heightOfMain = window.innerHeight - (header.clientHeight + footer.clientHeight);
				const heightOfMainAspectRadio = Math.round(window.innerWidth  * aspectRatio.height);
				if (heightOfMain > heightOfMainAspectRadio) {
					main.style.setProperty('--height-main_main', `${heightOfMainAspectRadio}px`);
				} else {
					main.style.setProperty('--height-main_main', `${heightOfMain}px`);
					main.style.setProperty('--width-main_main', `${Math.round(heightOfMain * aspectRatio.width)}px`);
				}
			}
		}
		definesMainHeight();
		window.addEventListener('resize', definesMainHeight);
	})

</script>

<style>
	.header {
		display: grid;
		place-items: center;
		font-size: var(--font-size-3);
		position: relative;
		top: 0px;
		width: 100%;
		height: calc(var(--font-size-3) * 2);
		color: var(--color-headder);
	}
	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		bottom: 0px;
		width: 100%;
		padding: 0.6em 0px;
	}
	.footer_details {
		font-size: var(--font-size-1);
		display: flex;
		flex-direction: row;
		width: 80vw;
	}
	.footer--center-children .footer_details * {
		display: grid;
		place-items: center;
		padding: 4px 0px;
	}
	.footer_content {
		margin-left: 0.6em;
	}
	.footer_title {
		color: var(--color-title);
	}
	.main {
		overflow: hidden;
		--width_main: 100vw;
		--vw-main: calc(var(--width-main_main) / 100);
		--vh-main: calc(var(--height-main_main) / 100);
		position: relative;
		height: var(--height-main_main);
		width: var(--width-main_main);
		margin: auto;
	}
	.game{
		--width_main: calc(var(--vw-main) * 100);
		--height_main: calc(var(--vh-main) * 89);
		--vw: calc(var(--width_main) / 100);
		--vh: calc(var(--height_main) / 100);
	}
</style>

<svelte:head>
	<title>
		{path ? path.charAt(0).toUpperCase() + path.slice(1) : "Index"}
	</title>
</svelte:head>
<header bind:this={header} class="header ">
	Agentes de la naturaleza
</header>
<main bind:this={main} class="main">
	<NavMenu path={path}/>
	<div class="game"  data-background-one >
		<slot />
	</div>
	<Menu></Menu>
	<MenuBadges></MenuBadges>
	<DialogAmimate path={path}></DialogAmimate>
</main>
<footer bind:this={footer} class="footer footer--center-children" >
	{#each creditsAndDetails as {title, content}}
	<section class="footer_details">
		<p class="footer_title">{title}: </p>
		{#each content as text}
		<p class="footer_content">{text}</p>
		{/each}
	</section>
	{/each}
</footer>

