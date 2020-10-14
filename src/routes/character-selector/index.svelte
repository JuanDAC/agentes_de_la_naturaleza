<script>
	import { goto } from "@sapper/app";
	import {charactersConstructor} from "../../store"
	import Button from '../../components/ui/buttons/Button.svelte';
	import Carousel from '../../components/ui/Carousel.svelte';
	import ImageSelect from '../../components/ui/carousels/ImageSelect.svelte';
</script>
<style>
	.characters {
		--carousel--size: calc(var(--vh) * 60);
	}
</style>
<div class="characters">
	<Carousel iterable={charactersConstructor(goto, Button)} template={ImageSelect} title="selecciona tu personaje" />
</div>
