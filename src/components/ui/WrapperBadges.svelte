<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import {badges} from "../../store";
	const dispatch = createEventDispatcher();
	let domNode: HTMLDivElement;
	export let type: string = "";

	onMount(() => {
		if (domNode.textContent) domNode.textContent = domNode.textContent.toUpperCase();
	});
	
	
</script>

<style>
	.wrapper {
		transition: all 150ms ease-in-out;
		position: relative;
		display: grid;
		place-items: center;
		font-family: 'Chicle', cursive;
		font-size: calc(var(--vh-main) * 5);
		cursor: pointer;
		width: calc(var(--vh-main) * 28);
		height: calc(var(--vh-main) * 26);
		color: var(--color-text);
		background-color: #c7e3d5;
		text-shadow: 0px calc(var(--vh-main) * 0.3) 0px var(--color-secondary),
		0px calc(var(--vh-main) * 0.6) 0px var(--color-secondary),
		0px calc(var(--vh-main) * 0.9) 0px var(--color-secondary);
		text-rendering: optimizeLegibility;
		text-size-adjust: 245%;
		box-sizing: border-box;
		border: var(--vh-main) solid var(--color-secondary);
		padding: 0px calc(var(--vh-main) * 3);
		margin: 0px calc(var(--vh-main) * 5.5);
		letter-spacing: calc(var(--vh-main) * 0.5);
		font-weight: 800;
		border-radius: calc(var(--vh-main) * 2);
		overflow: hidden;
		--leaves: calc(var(--vh-main) * 2.6);
		transform: scale(1.3, 0.8);
		user-select: none;
	}
	.wrapper:after,
	.wrapper::before {
		content: "";
		top: var(--vh-main);
		left: 0;
		position: absolute;
		display: inline-block;
		color: hsla(160, 36%, 60%, var(--opacity-1));
		width: var(--leaves);
		height: calc(var(--leaves) * 0.7);
		background: currentColor;
		border-radius: 5% 40% 70% / 30%;
		box-shadow: 
			calc((var(--leaves) + (var(--vh-main) * 5)) * 2) 0.3057px 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 4) 0.7592px 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 6) 0.0501px 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 8) 0.506px 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 10) 0.7151px 0px currentColor,

			0px calc(var(--leaves) * 2) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 2) calc(var(--leaves) * 2.4092) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 4) calc(var(--leaves) * 2.995) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 6) calc(var(--leaves) * 2.574) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 8) calc(var(--leaves) * 2) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 10) calc(var(--leaves) * 2.7882) 0px currentColor,

			calc(var(--leaves) * -1) calc(var(--leaves) * 4) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 2) calc(var(--leaves) * 4.944) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 4) calc(var(--leaves) * 4.4481) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 6) calc(var(--leaves) * 4) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 8) calc(var(--leaves) * 4.19) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 10) calc(var(--leaves) * 4.3618) 0px currentColor,
			
			calc(var(--leaves) * -1) calc(var(--leaves) * 6) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 1) calc(var(--leaves) * 6.4685) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 4) calc(var(--leaves) * 6.707) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 6) calc(var(--leaves) * 6) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 8) calc(var(--leaves) * 6.5991) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 10) calc(var(--leaves) * 6.864) 0px currentColor,
			
			calc(var(--leaves) * -2) calc(var(--leaves) * 8) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 1) calc(var(--leaves) * 8.4693) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 2) calc(var(--leaves) * 8.352) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 4) calc(var(--leaves) * 8.521) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 6) calc(var(--leaves) * 8.9748) 0px currentColor,
			calc((var(--leaves) + (var(--vh-main) * 5)) * 8) calc(var(--leaves) * 8.7274) 0px currentColor
			;
		transform: skew(20deg);
		--duration: 7s;
		animation: motionButton var(--duration) linear 0S infinite paused;
		

	}
	.wrapper::before {
		left: calc(var(--leaves)  + (var(--vh-main) * 5));
		border-radius: 5% 40% 70%;
		animation: motionButtonBefore var(--duration) linear 0S infinite paused;

	}
	
	@keyframes motionButtonBefore {
		form{
			left: calc(var(--leaves)  + (var(--vh-main) * 5));
			transform: skew(19deg) translate3d(0);
		}
		to {
			transform: skew(21deg) translate3d(0);
			left: calc((var(--leaves) + (var(--vh-main) * 5)) * -2); 
		}
	}
	@keyframes motionButton {
		form{
			
			left: 0;
		}
		to {
			left: calc((var(--leaves) + (var(--vh-main) * 5)) * -3); 
		}
	}

	.wrapper:not(.disabled):hover {
		transform: scale(1.4, 0.9)  rotateZ(-2deg) ;
	}
	.wrapper:not(.disabled):hover::before,
	.wrapper:not(.disabled):hover::after {
		animation-play-state: running ;
	}

	.wrapper:not(.disabled):hover:nth-of-type(1n) {
		transform: scale(1.4, 0.9)  rotateZ(-2deg) ;
	}

	.wrapper:not(.disabled):hover:nth-of-type(2n) {
		transform: scale(1.4, 0.9)  rotateZ(2deg) ;
	}

	.wrapper:not(.disabled):focus {
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
	.wrapper > * {
		position: relative;
		z-index: 20;
	}
</style>


<div
	bind:this={domNode}
	class:disabled={!($badges).includes(type)}
	on:click={(event) => dispatch('click', {domNode, event})}
	on:mouseenter={(event) => dispatch('mouseenter', {domNode, event})}
	on:mouseleave={(event) => dispatch('mouseleave', {domNode, event})}
	class="wrapper"
>
<slot></slot>
</div>