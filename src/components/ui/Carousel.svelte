<script>
	import { goto } from '@sapper/app';
	import Button from './buttons/Button.svelte';
	export let href: string | boolean = false;
	export let iterable: Array<any>;
	export let template: { new(...args: any[]): any; };
	export let title: string = '';
	let position: number = 1;
	
</script>

<style>
	.wrapper-carousel {
		width: var(--width_main);
		height: var(--height_main);
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
	}
 	.carousel {
		height: var(--carousel--size, calc(var(--vh) * 60));
		width: var(--carousel--size, calc(var(--vh) * 60));
		transform-style: preserve-3d;
		--angle: calc(360deg / var(--length, 5));
		transition: all 500ms ease-in-out;
		transform: perspective(calc(var(--carousel--size) * 5)) rotateY(calc(var(--angle) * (-1 * var(--selecting, 1))));
	}
	.carousel_title {
		position: absolute;
		top: calc(var(--vh) * 1);
		width: var(--width_main);
		display: grid;
		font-size: calc(var(--vh) * 6);
    	font-family: 'Chicle', cursive;
		letter-spacing: calc(var(--vh) * 0.3) ;
		color: var(--color-text);
		place-items: center;
		text-shadow: 0px 0px 2px var(--color-primary),
			0px 0px 2px var(--color-primary),
			0px 0px 1px var(--color-primary),
			0px 0px 1px var(--color-primary),
			0px 0px 1px var(--color-primary)
		;
	}
</style>

<!-- markup (zero or more items) goes here -->
<div class="wrapper-carousel">
	<Button on:click={() => {
		if (href && typeof href !== 'boolean' && position <= 1) return ;
		position -= 1
	}} enabled={!(href && typeof href !== 'boolean' && position <= 1)} >{'<'}</Button>
	<!-- carousel -->
	<section class="carousel" style="--selecting: {position};--length: {iterable.length};">
		{#each iterable as item, index}
			<svelte:component this={template} index={index} data={item}/>
		{/each}
	</section>
	<!-- carousel -->
	<Button on:click={() => {
		position += 1;
		console.log(iterable.length, position, href)
		if (position > iterable.length && href && typeof href !== 'boolean') {
			console.log('goto')
			setTimeout(async () => {
				try {
					await goto(href);
				} catch(err) {
					console.log(new Error(err));
				}
			}, 200)
		}
	}} >{'>'}</Button>
	<h2 class="carousel_title" >{title}</h2>
</div>