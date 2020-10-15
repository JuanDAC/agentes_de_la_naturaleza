<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import { goto } from '@sapper/app';
	const dispatch = createEventDispatcher();
	let domNode: HTMLButtonElement;
	export let href: string | boolean = false;
	export let enabled: boolean = true;

	onMount(() => {
		if (domNode.textContent) domNode.textContent = domNode.textContent.toUpperCase();
	});
	
	
	let active: boolean = true;
	
</script>

<style>
	.button {
		height: calc(var(--vh) * 15);
		transition: all 150ms ease-in-out;
		position: relative;
		display: grid;
		place-items: center;
		font-family: 'Chicle', cursive;
		font-size: calc(var(--vh) * 5);
		cursor: pointer;
		color: var(--color-text);
		background-color: var(--color-primary);
		text-shadow: 0px calc(var(--vh) * 0.3) 0px var(--color-secondary),
		0px calc(var(--vh) * 0.6) 0px var(--color-secondary),
		0px calc(var(--vh) * 0.9) 0px var(--color-secondary);
		text-rendering: optimizeLegibility;
		text-size-adjust: 245%;
		box-sizing: border-box;
		border: var(--vh) solid var(--color-secondary);
		padding: 0px calc(var(--vh) * 3);
		margin: 0px calc(var(--vh) * 5.5);
		letter-spacing: calc(var(--vh) * 0.5);
		font-weight: 800;
		border-radius: calc(var(--vh) * 2);
		overflow: hidden;
		--leaves: calc(var(--vh) * 2.6);
		transform: scale(1.3, 0.8);
		user-select: none;
	}
	.button:after,
	.button::before {
		content: "";
		top: var(--vh);
		left: 0;
		position: absolute;
		display: inline-block;
		color: rgba(255, 255, 255, var(--opacity-1));
		width: var(--leaves);
		height: calc(var(--leaves) * 0.7);
		background: currentColor;
		border-radius: 5% 40% 70% / 30%;
		box-shadow: 
			calc((var(--leaves) + (var(--vh) * 5)) * 2) var(--vh) 0px currentColor,
			calc((var(--leaves) + (var(--vh) * 5)) * 4) 0px 0px currentColor,
			calc((var(--leaves) + (var(--vh) * 5)) * 6) 0px 0px currentColor,
			calc((var(--leaves) + (var(--vh) * 5)) * 8) 0px 0px currentColor,
			calc((var(--leaves) + (var(--vh) * 5)) * 10) var(--vh) 0px currentColor,


			0px calc(var(--leaves) * 2) 0px currentColor,
			calc((var(--leaves) + (var(--vh) * 5)) * 2) calc(var(--leaves) * 1.5) 0px currentColor,
			calc((var(--leaves) + (var(--vh) * 5)) * 4) calc(var(--leaves) * 2) 0px currentColor,
			calc((var(--leaves) + (var(--vh) * 5)) * 6) calc(var(--leaves) * 1.5) 0px currentColor,
			calc((var(--leaves) + (var(--vh) * 5)) * 8) calc(var(--leaves) * 2) 0px currentColor,
			calc((var(--leaves) + (var(--vh) * 5)) * 10) calc(var(--leaves) * 1.5) 0px currentColor,

			
			0px calc(var(--leaves) * 3.2) 0px currentColor,
			calc((var(--leaves) + (var(--vh) * 5)) * 2) calc(var(--leaves) * 3.5) 0px currentColor,
			calc((var(--leaves) + (var(--vh) * 5)) * 4) calc(var(--leaves) * 3.2) 0px currentColor,
			calc((var(--leaves) + (var(--vh) * 5)) * 6) calc(var(--leaves) * 3.6) 0px currentColor,
			calc((var(--leaves) + (var(--vh) * 5)) * 8) calc(var(--leaves) * 3.2) 0px currentColor,
			calc((var(--leaves) + (var(--vh) * 5)) * 10) calc(var(--leaves) * 3.5) 0px currentColor
			;
		transform: skew(20deg);
		--duration: 7s;
		animation: motionButton var(--duration) linear 0S infinite paused;
		

	}
	.button::before {
		left: calc(var(--leaves)  + (var(--vh) * 5));
		border-radius: 5% 40% 70%;
		animation: motionButtonBefore var(--duration) linear 0S infinite paused;

	}
	
	@keyframes motionButtonBefore {
		form{
			left: calc(var(--leaves)  + (var(--vh) * 5));
			transform: skew(19deg) translate3d(0);
		}
		to {
			transform: skew(21deg) translate3d(0);
			left: calc((var(--leaves) + (var(--vh) * 5)) * -2); 
		}
	}
	@keyframes motionButton {
		form{
			
			left: 0;
		}
		to {
			left: calc((var(--leaves) + (var(--vh) * 5)) * -3); 
		}
	}

	.button:not(.disabled):hover {
		transform: scale(1.4, 0.9)  rotateZ(-2deg) ;
	}
	.button:not(.disabled):hover::before,
	.button:not(.disabled):hover::after {
		animation-play-state: running ;
	}

	.button:not(.disabled):hover:nth-of-type(1n) {
		transform: scale(1.4, 0.9)  rotateZ(-2deg) ;
	}

	.button:not(.disabled):hover:nth-of-type(2n) {
		transform: scale(1.4, 0.9)  rotateZ(2deg) ;
	}

	.button:not(.disabled):focus {
		animation: active 200ms linear 0s;
		outline: none;
	}
	
	@keyframes active {
		30% {
			filter: brightness(1.2) contrast(0.8);
			box-shadow: 0px 0px 10px #c3ffcf;
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
	on:click={(event) => {
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
					if (domNode) domNode.blur();
				}, 400)
			}
		}
	}}
	on:mouseenter={(event) => dispatch('mouseenter', {domNode, event})}
	on:mouseleave={(event) => dispatch('mouseleave', {domNode, event})}
	class="button"
>
	<slot />
</button>