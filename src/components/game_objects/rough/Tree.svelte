<script>
	import { onMount } from 'svelte';
	import {randomize} from '../../../actions/helpers';
	let chromeShadow = false;
	onMount(() => {
		setTimeout(() => chromeShadow = true,500)
	})
</script>

<style>
	.tree {	
		position: relative;
		animation: breathOfWind linear infinite alternate-reverse ;
		animation-duration: calc((var(--duration) * 3) + (var(--duration) * var(--random)));
		--breath-of-wind-adjustment: calc(var(--size) * 0.7);
	}
	
	.tree_leaves--shadow,
	.tree_leaves--brightness,
	.tree_leaves {
		position: absolute;
		background-color: var(--color-green-1);
		width: calc(var(--size) * 11);
		height: calc(var(--size) * 11);
		transform: translate(-50%, -50%);
		border-radius: 50%;
		overflow: hidden;
		transition: all 300ms;
	}
	.tree_leaves--brightness {
		width: calc(var(--size) * 12);
		height: calc(var(--size) * 12);
		background-color: var(--color-green-2);
		animation: shadow 100s linear infinite;
		animation-duration: calc(var(--duration) * 10);
	}
	
	.tree_trunk__path {
		fill: var(--color-brown-1);
	}

	.tree_trunk {
		position: absolute;
		width: calc(var(--size) * 4);
		height: auto;
		left: calc(var(--size) * -2);
		top:  calc(var(--size) * -2.5);

	}

	.tree_leaves--shadow {
		background-color: var(--shadow-2);
		--local-settings-transform: scale(0.8, 0.3);
		animation: breathOfWindShadow linear infinite alternate;
		animation-duration: calc((var(--duration) * 3) + (var(--duration) * var(--random)));

	}

	@keyframes breathOfWindShadow {
		from {
			transform: rotateZ(-5deg) 
				translate(calc(-50% - var(--breath-of-wind-adjustment)), 32%) 
				var(--local-settings-transform, );
		}
		to {
			transform: rotateZ(5deg) 
				translate(calc(-50% + var(--breath-of-wind-adjustment)), 41%) 
				var(--local-settings-transform, );
		}
	}

	@keyframes breathOfWind {
		from {
			transform: rotateZ(-5deg) translate(calc(var(--breath-of-wind-adjustment) * -1), -1px) var(--local-settings-transform, );
		}
		to {
			transform: rotateZ(5deg) translate(var(--breath-of-wind-adjustment), -1px) var(--local-settings-transform, );
		}
	}

	@keyframes shadow {
		from {
			transform: translate(-100%, 10%);
		}
		to {
			transform: translate(100%, -40%);
		}
	}
	
	@supports (backdrop-filter: blur(1px)) {
		.tree_leaves__shadow__chrome_inactive {
			animation-duration: unset;
		}
		/* .tree_leaves__shadow__chrome {
			animation-duration: calc((var(--duration) * 3) + (var(--duration) * var(--random)));
		} */
	}
</style>

<div>
	<div class="tree" use:randomize={true} >
		<div class="tree_leaves">
			<div class="tree_leaves--brightness">
			
			</div>
		</div>
		<div class="tree_leaves--shadow" class:tree_leaves__shadow__chrome_inactive={!chromeShadow}>
		</div>
		<div class="tree_trunk">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.35 138.8">
				<g id="Layer_2" data-name="Layer 2">
					<g id="Layer_2-2" data-name="Layer 2">
						<path class="tree_trunk__path"
							d="M42.36,67.28l-18,20.06,1.86,46.79,0,.43a4.24,4.24,0,1,1-8.48,0l1.46-62.79L0,46.59,19.37,63.33l.78-33.78L7.41,11.47,20.29,23.73,20.84,0l1.69,42.51L47.35,22.63,22.81,49.34l1.25,31.42Z" />
					</g>
				</g>
			</svg>
		</div>
	</div>
</div>
