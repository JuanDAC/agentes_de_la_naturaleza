<script>
	import Carousel from '../../components/ui/Carousel.svelte';
	import InformationSlider from '../../components/ui/carousels/InformationSlider.svelte';
	import {intro} from "../../store";
	
</script>

<style>
	
	.sliders {
		--carousel--size: calc(var(--vh) * 60);
	}
</style>
<div class="sliders">
	<Carousel iterable={intro} template={InformationSlider} title="" href="/map" />
</div>
