<script>
	import {randomize} from "../../actions/helpers";
	import {badges} from "../../store";
	export let src: string = "";
	export let type: string = "";
	

</script>

<style>
	.badge {
		width: calc(var(--vh-main) * 20);
		height: calc(var(--vh-main) * 23);
		background-size: 100% 100%;
		z-index: 100;
		transition: all 100ms;
		position: relative;
		overflow: hidden;
		image-rendering: optimizequality;
	}
	.badge:hover:not(.disabled)  {
		transform: rotateZ(calc(10deg * var(--random)));
	}
	.disabled {
		filter: brightness(0.1);
	}
</style>

<div
	class="badge" 
	class:disabled={!($badges).includes(type)}
	use:randomize={true} 
	style={`background-image: url("${src}");`} 
	alt="Badge"
></div>