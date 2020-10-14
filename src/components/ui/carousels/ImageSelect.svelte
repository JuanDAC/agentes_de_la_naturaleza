<script>
	import type { ICharacter } from '../../../interfaces';
	// import Button from '../Button.svelte';
	// import { RepelCursor } from '../../../actions/helpers';
	 
	export let index: number = 0;
	export let data: ICharacter | undefined;
	
</script>

<style>
	.carousel_item {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		transform-origin: center;
		transform-style: preserve-3d;
		transform: rotateY(calc(var(--index) * var(--angle))) translateZ(var(--carousel--size));
		justify-content: center;
		align-items: center;
		backface-visibility: hidden;
	}
	.carousel_image {
		height: inherit;
		overflow: hidden;
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: center;
	}
	.carousel_image img {
		object-fit: cover;
		/* width: 100%; */
		height: 100%;
	}
	.carousel_actions {
		width: 100%;
		display: grid;
		place-items: center;
	}
</style>

{#if data}
	<article class="carousel_item" style="--index:{index + 1};">
		<picture class="carousel_image" >
			<img 
				src="{data.pipes.imageManager ? data.pipes.imageManager("src", index, data.img.src) : data.img.src }" 
				alt="{data.pipes.imageManager ? data.pipes.imageManager("alt", index, data.img.src) : data.img.src }"
			>
		</picture>
		<div class="carousel_actions" >
			<svelte:component 
				this={data.action.DomNode}
				on:click={() => data 
					&& data.action.pipes.onClick 
					&& data.action.pipes.onClick(index, data.img.src)
				}
			>
				{data.action.text ? data.action.text : ''}
			</svelte:component>
		</div>
	</article>
{/if}