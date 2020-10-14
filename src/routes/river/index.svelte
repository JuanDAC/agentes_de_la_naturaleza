<script>
	// import type { randomize } from '../../actions/helpers';
	import Tree from '../../components/game_objects/rough/Tree.svelte';
	import {currentLevelData} from "../../store/index";
	import type {ICurrentLevelData} from "../../interfaces";
	import RecycleOrdinary from '../../components/game_objects/rough/things/RecycleOrdinary.svelte';
	// let localLeveldata: ICurrentLevelData;
	// let animationPlay: boolean = false;
	// let previousAnimationPlay: number = NaN;
	const orderFilter:Array<string> = [
		"BOTTLE",
		"COTTON",
		"COAL",
		"SAND",
		"GRAVEL",
		"STONES",
	];
	let length: number = NaN;
	const dragstart = async (event: {[index:string]: any}) => {
		
		if ((/Chrome/).test(navigator.userAgent)) {
			console.log(event);
			event.dataTransfer.dropEffect = event.dataTransfer.effectAllowed ='move';
			const blankCanvas = document.createElement('canvas');
			event.dataTransfer.setDragImage(blankCanvas, 0, 0);
		}
		console.log(event);
		const figure: HTMLElement = (event.target.closest("figure") as HTMLElement);

		event.dataTransfer.setData('text/plain', JSON.stringify({type: figure.getAttribute("data-type") as string, id: figure.id as string}));
	};
	const dragover = (event: {[index:string]: any}) => {
		event.preventDefault();
	}
	const drop = (event: {[index:string]: any}) => {
		const {type: getType, id } = JSON.parse(event.dataTransfer.getData('text/plain'));
		if (getType === orderFilter[0]) {
			const selector: string = orderFilter.shift() as string | "";
			length = orderFilter.length;
			const drag = document.getElementById(id);
			if (drag && typeof drag.remove === "function") drag.remove();
			const activeSelector = document.getElementById(selector);
			if (activeSelector instanceof HTMLElement) activeSelector.style.setProperty("filter", selector==="BOTTLE" ? "opacity(1)" : "opacity(0.7)");
			if (orderFilter.length === 0) {
				currentLevelData.set({levelCompleted: "river-end-game"} as ICurrentLevelData);
			}
		}
		event.preventDefault();
	}
	
</script>

<style>
	.background {
		width: var(--width_main);
		height: var(--height_main);
		position: absolute;
		background-image: url("../img/river/river_color.png");
		background-size: 100% 100%;
	}
	.background-animate {
		background-image: url("../img/river/river.png");
		--length: 6;
	}
	@keyframes animateBackground {
		to {
			background-position: calc((var(--length) - 1) * var(--width_main)) 0px;
		}
	}
	/* your styles go here */

	.tree {
		position: absolute;
		--size: calc(var(--vh) * 0.5);
		--duration: 2s;
	}
	.tree:nth-last-child(1) {
		top: calc(var(--vh) * 30);
		left: calc(var(--vw) * 50);
	}
	.tree:nth-last-child(2) {
		top: calc(var(--vh) * 35);
		left: calc(var(--vw) * 78);
	}
	.tree:nth-last-child(3) {
		top: calc(var(--vh) * 20);
		left: calc(var(--vw) * 90);
	}
	.tree:nth-last-child(4) {
		top: calc(var(--vh) * 23);
		left: calc(var(--vw) * 6);
	}
	.tree:nth-last-child(5) {
		top: calc(var(--vh) * 19);
		left: calc(var(--vw) * 31);
	}
	.tree:nth-last-child(6) {
		top: calc(var(--vh) * 10);
		left: calc(var(--vw) * 24);
	}
	.tree:nth-last-child(7) {
		top: calc(var(--vh) * 12);
		left: calc(var(--vw) * 58);
	}
	.tree:nth-last-child(8) {
		top: calc(var(--vh) * 39);
		left: calc(var(--vw) * 20);
	}
	.game {
		width: var(--width_main);
		height: var(--height_main);
	}
	.container,
	.filter-bottle {
		position: absolute;
		left: calc(var(--vw) * 36);
		bottom: calc(var(--vh) * 27);
		width: calc(var(--vw) * 16);
		height: calc(var(--vw) * 13);
		transform: scaleX(-1);
		filter: opacity(0.1);
		transition: all 300ms linear;
	}
	.container {
		width: calc(var(--vw) * 21);
		height: calc(var(--vw) * 17);
	}
	figure > img {
		width: 100%;
		height: 100%;
	}
	.filter-1 {
		left: calc(var(--vw) * 41.5);
		height: calc(var(--vw) * 9);
		bottom: calc(var(--vh) * 31);
	}
	.filter-2 {
		left: calc(var(--vw) * 40);
	}
	.filter-3 {
		left: calc(var(--vw) * 37.7);
	}
	.filter-4 {
		left: calc(var(--vw) * 35.3);
	}
	.filter-5 {
		left: calc(var(--vw) * 32.5);
	}
	.filter-draggable {
		position: absolute;
		/* left: calc(var(--vw) * 36); */
		bottom: calc(var(--vh) * 17);
		width: calc(var(--vw) * 2);
		height: calc(var(--vw) * 5);
		transform: translate(0,0) rotate();
		cursor: grab;
		cursor: -moz-grab;
		cursor: -webkit-grab;
		transform: scaleX(-1);
	}
	.filter-draggable:active {
		cursor: grabbing;
		cursor: -moz-grabbing;
		cursor: -webkit-grabbing;
	}
	.waste {
		position: absolute;
		animation: float_up 2s linear infinite;
		animation-delay: calc(2s * var(--random));
	}
	.waste > * {
		transition: all 300ms linear;
	}
	@keyframes float_up {
		0%, 100%{
			transform: translate(calc(-25% * var(--random)), calc(-25% * var(--random)));
		}
		25%{
			transform: translate(calc(25% * var(--random)), calc(-25% * var(--random)));
		}
		50%{
			transform: translate(calc(25% * var(--random)), calc(25% * var(--random)));
		}
		75%{
			transform: translate(calc(-25% * var(--random)), calc(25% * var(--random)));
		}
	}
	.clear_one > *:nth-child(6n) {
		filter: opacity(0);
	}
	.clear_two > *:nth-child(5n) {
		filter: opacity(0);
	}
	.clear_three > *:nth-child(4n) {
		filter: opacity(0);
	}
	.clear_four > *:nth-child(3n) {
		filter: opacity(0);
	}
	.clear_five > *:nth-child(2n) {
		filter: opacity(0);
	}
	.clear_six > *:nth-child(1n) {
		filter: opacity(0);
	}
</style>



<!-- markup (zero or more items) goes here -->

<div class="background" on:dragstart|preventDefault={()=>{}}>
	
</div>
<div class="background-animate" on:dragstart|preventDefault={()=>{}}>
	{#each Array.apply(null, Array(8)) as _}
		<div class='tree'>
			<Tree />
		</div>
	{/each}
	
</div>
<div id="wrapper-waste" 
	class:clear_one={length<=5}
	class:clear_two={length<=4}
	class:clear_three={length<=3}
	class:clear_four={length<=2}
	class:clear_five={length<=1}
	class:clear_six={length<=0}
>
	{#each Array.apply(null, Array(Math.floor(Math.random()*100)+50)) as _}
		<div class="waste" style={`left: calc((var(--vw) * ${Math.random() * 110 - 5}));bottom: calc(var(--vh) * ${Math.random() * 20 + 31});--random:${Math.random()};`}>
			<RecycleOrdinary type={"ordinarios"}/>
		</div>
	{/each}
</div>

<div class="game" >
	<figure class="filter-bottle " id="BOTTLE">
		<img src="img/filter/filter-1.svg" alt="filter" on:dragstart|preventDefault={()=>{}}/>
	</figure>
	<figure class="filter-bottle filter-1" id="COTTON">
		<img src="img/filter/filter-2.svg" alt="filter" on:dragstart|preventDefault={()=>{}}/>
	</figure>
	<figure class="filter-bottle filter-2" id="COAL">
		<img src="img/filter/filter-3.svg" alt="filter" on:dragstart|preventDefault={()=>{}}/>
	</figure>
	<figure class="filter-bottle filter-3" id="SAND">
		<img src="img/filter/filter-4.svg" alt="filter" on:dragstart|preventDefault={()=>{}}/>
	</figure>
	<figure class="filter-bottle filter-4" id="GRAVEL">
		<img src="img/filter/filter-5.svg" alt="filter" on:dragstart|preventDefault={()=>{}}/>
	</figure>
	<figure class="filter-bottle filter-5" id="STONES">
		<img src="img/filter/filter-6.svg" alt="filter" on:dragstart|preventDefault={()=>{}}/>
	</figure>



	<figure 
		class="filter-draggable"
		data-type="BOTTLE"
		style={`left: calc((var(--vw) * ${(Math.random()*40) + 15}));width: calc(var(--vw) * 5);transform: rotate(${Math.random() * 360}deg)`}
		draggable={true}
		on:dragstart={dragstart}
		id={`filter_${new Date().valueOf()}`} 
	>
		<img src="img/filter/filter-1.svg" alt="filter"/>
	</figure>
	<figure 
		class="filter-draggable"
		data-type="COTTON"
		style={`left: calc((var(--vw) * ${(Math.random()*40) + 15}));transform: rotate(${Math.random() * 360}deg)`}
		draggable={true}
		on:dragstart={dragstart}
		id={`filter_${new Date().valueOf()}`} 
	>
		<img src="img/filter/filter-2.svg" alt="filter"/>
	</figure>
	<figure 
		class="filter-draggable"
		data-type="COAL"
		style={`left: calc((var(--vw) * ${(Math.random()*40) + 15}));transform: rotate(${Math.random() * 360}deg)`}
		draggable={true}
		on:dragstart={dragstart}
		id={`filter_${new Date().valueOf()}`} 
	>
		<img src="img/filter/filter-3.svg" alt="filter"/>
	</figure>
	<figure 
		class="filter-draggable"
		data-type="SAND"
		style={`left: calc((var(--vw) * ${(Math.random()*40) + 15}));transform: rotate(${Math.random() * 360}deg)`}
		draggable={true}
		on:dragstart={dragstart}
		id={`filter_${new Date().valueOf()}`} 
	>
		<img src="img/filter/filter-4.svg" alt="filter"/>
	</figure>
	<figure 
		class="filter-draggable"
		data-type="GRAVEL"
		style={`left: calc((var(--vw) * ${(Math.random()*40) + 15}));transform: rotate(${Math.random() * 360}deg)`}
		draggable={true}
		on:dragstart={dragstart}
		id={`filter_${new Date().valueOf()}`} 
	>
		<img src="img/filter/filter-5.svg" alt="filter"/>
	</figure>
	<figure 
		class="filter-draggable"
		data-type="STONES"
		style={`left: calc((var(--vw) * ${(Math.random()*40) + 15}));transform: rotate(${Math.random() * 360}deg)`}
		draggable={true}
		on:dragstart={dragstart}
		id={`filter_${new Date().valueOf()}`} 
	>
		<img src="img/filter/filter-6.svg" alt="filter"/>
	</figure>
	<div 
		class="container"
		on:dragover={dragover}
		on:drop={drop}
	>
		
	</div>
</div>