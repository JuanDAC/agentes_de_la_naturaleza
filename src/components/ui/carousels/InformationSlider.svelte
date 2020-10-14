<script>
	import type { ISliders } from '../../../interfaces';
	 
	export let index: number = 0;
	export let data: ISliders | undefined;
	
</script>
 
<style>
	.carousel_item {
		position: absolute;
		display: flex;
		flex-direction: column;
		transform-origin: center;
		transform-style: preserve-3d;
		transform: rotateY(calc(var(--index) * var(--angle))) translateZ(var(--carousel--size));
		justify-content: center;
		align-items: center;
		backface-visibility: hidden;

		width: 180%;
		left: -40%;
		height: 110%;
		top: -5%;
		background-color: var(--color-coral-2);
		border: var(--vh) solid var(--color-secondary);
		border-radius: calc(var(--vh) * 2);
		box-sizing: border-box;
		box-shadow: 0px 0px 0px 1px var(--color-primary), 0px 0px 0px 1px inset var(--color-primary);
	}
	.carousel_image {
		height: 60%;
	}
	.carousel_image img {
		height: 100%;
		width: 100%;
		object-fit: contain;

	}
	.carousel_information {
		padding: 0px 1em;
	}

	
</style>

{#if data}
	<article class="carousel_item" style="--index:{index + 1};">
		{#if data && typeof data.img !== 'boolean' && data.img}
			<picture class="carousel_image" >
				<img 
					src="{data.pipes.imageManager ? data.pipes.imageManager("src", index, data.img.src) : data.img.src }" 
					alt="{data.pipes.imageManager ? data.pipes.imageManager("alt", index, data.img.src) : data.img.src }"
				>
			</picture>
		{/if}
		<div class="carousel_information">
			<span class="carousel_information--paragraphs">
				{data.content.paragraphs}
			</span>
		</div>
	</article>
{/if}