<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import { goto } from '@sapper/app';
	const dispatch = createEventDispatcher();
	let domNode: HTMLButtonElement;
	export let href: string | boolean = false;
	export let enabled: boolean = true;
	export let img: string = '';

	onMount(() => {
		if (domNode.textContent) domNode.textContent = domNode.textContent.toUpperCase();
	});
	
	let active: boolean = true;
	
</script>

<style>
	.button {
		height: calc(var(--vh-main) * 11);
		transition: all 150ms ease-in-out;
		background-position: 100% 100%;
		width: calc(var(--vh-main) * 36);
		background-size: 100% 100%;
		filter: brightness(1.1);

	}
	.button:hover {
		filter: brightness(1.3);
	}
	.button:not(.disabled):hover {
		transform: scale(1.1, 1.1)  rotateZ(-2deg) ;
	}
	.button:not(.disabled):hover::before,
	.button:not(.disabled):hover::after {
		animation-play-state: running ;
	}

	.button:not(.disabled):hover:nth-of-type(1n) {
		transform: scale(1.1, 1.1)  rotateZ(-2deg) ;
	}

	.button:not(.disabled):hover:nth-of-type(2n) {
		transform: scale(1.1, 1.1)  rotateZ(2deg) ;
	}

	.button:not(.disabled):focus {
		animation: active 200ms linear 0s;
		outline: none;
	}
	
	@keyframes active {
		30% {
			filter: brightness(1.2) contrast(0.8);
		}
	}

	.disabled {
		filter: grayscale(0.3) opacity(0.5) invert(0.3);
		cursor: unset;
	}

</style>


<button
	bind:this={domNode}
	class:disabled={!enabled}
	style={`background-image:url("${img}");`}
	on:click|stopPropagation={(event) => {
		if (enabled) {
			if (href && typeof href === 'string') {
				setTimeout(async () => {
					try {
						await goto(href);
					} catch(err) {
						console.log(new Error(err));
					}
				}, 200)
			}
			if (active) {
				dispatch('click', {domNode, event})
				active = false;
				setTimeout(() => {
					active = true;
					domNode.blur()
				}, 400)
			}
		}
	}}
	on:mouseenter|stopPropagation={(event) => {dispatch('mouseenter', {domNode, event})}}
	on:mouseleave|stopPropagation={(event) => {dispatch('mouseleave', {domNode, event})}}
	class="button"
></button>