<script>
	import { onMount } from "svelte";
	let condition: boolean = true;
	import Cars from "../../components/game_objects/smart/Cars.svelte";
	import type { ICurrentLevelData } from "../../interfaces";
	import { currentLevelData } from "../../store";
	setInterval(()=>{
		condition = false;
		setTimeout(() => condition = true, 10);
	}, 7000)
	onMount(()=>{
		currentLevelData.set({level: location.pathname.replace(/\//, ""), garbage: 20} as ICurrentLevelData);
	});
</script>

<style>
	.background {
		width: var(--width_main);
		height: var(--height_main);
		position: absolute;
		background-image: url("../img/street/street_color.png");
		background-size: 100% 100%;
	}
	.background-animate {
		background-image: url("../img/street/street.png");
		cursor: url('data:image/png;base64,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'), auto;
		--length: 7;
	}
	.cars {
		position: absolute;
		width: calc(var(--vw) * 25);
		filter: opacity(0);
	}
	.cars:nth-child(1n){
		animation: motionRight linear forwards running;
		bottom: calc(var(--vw) * 12);
		z-index: 1;
	}
	.cars:nth-child(2n){
		animation: motionLeft linear forwards running;
		
		bottom: calc(var(--vw) * 17);
		z-index: 0;
	}

	@keyframes motionRight {
		from {
			
			filter: opacity(1);
			transform: translateX(-100%) scaleX(-1);
		}
		to {
			filter: opacity(1);
			transform: translateX(500%) scaleX(-1);
		}
	}
	@keyframes motionLeft {
		from {
			filter: opacity(1);
			transform: translateX(500%) ;
		}
		to {
			filter: opacity(1);
			transform: translateX(-100%) ;
		}
	}
</style>



<!-- markup (zero or more items) goes here -->

<div class="background">
	
</div>
<div class="background-animate">
	{#if condition}
		 <!-- content here -->
		 <div class="cars" style={`animation-delay: ${Math.random()*1000}ms;animation-duration: ${(Math.random()*4000)+2000}ms;`}>
			 <Cars/>	
		 </div>
		 <div class="cars" style={`animation-delay: ${Math.random()*1000}ms;animation-duration: ${(Math.random()*4000)+2000}ms;`}>
			 <Cars/>	
		 </div>
	{/if}
</div>
<!--
{#each Array.apply(null, Array(8)) as item}
	<div class='tree'>
		{item || ''}
		<Tree />
	</div>
{/each}
-->