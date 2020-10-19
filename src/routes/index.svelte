<script>
	import Button from '../components/ui/buttons/Button.svelte';
	import { RepelCursor } from '../actions/helpers';
	import { badges, characterSelected, pages, images } from '../store';
	import { onMount } from 'svelte';
	import { goto, prefetchRoutes } from '@sapper/app';
	let imagesLoad: number = 0;
	let percentage: number = 0;
	let successfull: boolean = false;
	let interval: number = setInterval(() => {
		percentage += 1;
		if (percentage >= 100) {
			percentage = 100;
			clearInterval(interval)
			successfull = true;
		}
	}, 1200);

	prefetchRoutes(pages).then((result: any) => {
		console.log(result);
	}).catch((err: any) => {
		console.log(err);
	});
	
	// --ignore 
	let clearStorage: (e: CustomEvent<any>) => void = ()=>{};
	onMount(()=>{
		const loader: HTMLElement = document.getElementById("loader-server") as HTMLElement;
		if(loader) loader.remove();
		images.forEach((item:string) => setTimeout(()=>{
			const img: HTMLImageElement = document.createElement("img");
			img.src = item;
			img.style.setProperty("background-image", `url(../${item})`);
			img.style.setProperty("position", "absolute");
			img.style.setProperty("width", "0px");
			img.style.setProperty("height", "0px");
			document.body.appendChild(img);
			img.onload = () => {
				console.log(`load -> ${item}`);
				imagesLoad+=1;
				const realRercentage: number = Math.ceil(imagesLoad*100/images.length);
				if (realRercentage > percentage) percentage = realRercentage;
			}
		}, Math.random() * 10000));
		clearStorage = () => {
			goto("/character-selector", { target: '_blank' }).then((result: any) => {
				badges.set([]);
				console.log(result);
			}).catch((err: any) => {
				console.log(err);
			});

		};
	})

</script>

<style>
	.splash-art {
		display: grid;
		place-items: center;
	}

	.title {
		height: auto;
		width: clamp(10px, calc(var(--width_main) * 0.8), 70vmin);
		transform: translateY(calc(var(--vh) * -100));
		animation: showLogo 500ms cubic-bezier(.55,.03,.91,1.74) 200ms forwards;
		margin-bottom: calc(var(--vh) * 40);
	}
	.title * {
		width: 100%;
		height: auto;
		user-select: none;
	}
	.loading {
		height: calc(var(--vh) * 9);
		width: calc(var(--vw) * 78);
		background: var(--color-secondary);
		border-radius: calc(var(--vh) * 4);
		padding: calc(var(--vh) * 1);
		position: absolute;
		bottom: calc(var(--vh) * 20);
		transform: translateX(-50%);
		left: 50%;

	}
	.loading__bar {
		height: 100%;
		border-radius: calc(var(--vh) * 3);
		background: var(--color-primary);
		display: flex;
		justify-content: flex-end;
		align-items: center;
		box-sizing: border-box;
		border: calc(var(--vh) * 1) solid transparent;
		min-width: calc(var(--vw) * 6);
		font-family: 'Chicle', cursive;
		font-size: calc(var(--vh) * 6);
		color: var(--color-text);
		transition: all 110ms linear;
		overflow: hidden;
	}
	.play {
		margin-bottom: calc(var(--vh) * 2);
		width: 100%;
		transition: all 200ms ease-in-out;
		position: absolute;
		transform: translateY(var(--height_main));
		bottom: calc(var(--vh) * 20);
		left: 0px;
		--transformation-adjustment: ;
		display: flex;
		justify-content: center;
		gap: calc(var(--vh) * 5);
	}
	/* .play * {
		all: unset;
		height: 100%;
		cursor: pointer;
		margin-top: calc(var(--vh) * 45); */
	
	/* .play:hover {
		--transformation-adjustment: translateX(-50%) scale(1.1) rotate3d(0, 0, -1, 2deg) ;
	} */

	.successfull {
		animation: successfull 400ms ease-in-out 400ms forwards;
	}
	.entry {
		animation: entry 400ms ease-in-out 660ms forwards;
	}
	@keyframes entry {
		to {
			transition: all 200ms ease-in-out;
			transform: translateY(0px) var(--transformation-adjustment);
		}
	}
	@keyframes successfull {
		100% {
			transform: translateX(var(--width_main));
		}
	}
	@keyframes showLogo{
		90% {
			width: 50vmin;
		}
		to {
			transform: translateY(0%);
		}
	}

</style>

<div class="splash-art" >
	<figure class="title" on:dragstart|preventDefault={()=>{}}>
		<img src="img/global/logo.png" alt="splash art - logo" use:RepelCursor={{length: -10}} on:dragstart|preventDefault={()=>{}}/>
	</figure>
	<div class="loading" class:successfull={successfull}>
		<div class="loading__bar" style="width: {percentage}%;" >{percentage}%</div>
	</div>
	<div class="play" class:entry={successfull}>
		<Button on:click={clearStorage} >
			Nueva Partida
		</Button>
		{#if ((Array.isArray($badges) && ($badges).length > 0) && !isNaN(Number(characterSelected.set)))}
			 <Button href="/map">
				 Continuar
			 </Button>
		{/if}
	</div>
</div>
