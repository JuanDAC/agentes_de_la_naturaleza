<script>
	import { onMount } from "svelte";
	import type { ICurrentLevelData } from "../../interfaces";
	import {goto } from "@sapper/app";
	const music: number = Math.floor(Math.random()*8);
	export let path: string = '';
	let myAudio: HTMLAudioElement;
	import {characterSelected, currentLevelData, dialogs, badges, mute} from "../../store";
	let show: boolean = false;
	let currentDialog: string = "";
	let previousPath = "initial";
	let previousTimeout: number = NaN;
	const timeOftimer = 10000;
	let index:number = NaN;
	
	
	
	$: if (path !== previousPath) {
		if (!isNaN(previousTimeout)) clearTimeout(previousTimeout);
		show = dialogs.has(path);
		const data = dialogs.get(path);
		if (path === "map" && ($badges).length === 4) {
			show = true;
			currentDialog = dialogs.get("end-game") as string;
		} else if (show && Array.isArray(data)) {
			data.forEach((value: string, i: number) => {
				if (i === 0)
					currentDialog = value;
				else 
					setTimeout(() => currentDialog = (value), (timeOftimer * i));
			});
			previousTimeout = setTimeout(() => show = false, (timeOftimer * data.length));
		} else if (show && typeof data === "string"){
			currentDialog = (data);
			previousTimeout = setTimeout(() => show = false, timeOftimer);
		}
		if (index != 0) previousPath = path;
		index=(characterSelected.set)
	} 
	onMount(() => {
		currentLevelData.subscribe((value:ICurrentLevelData) => {
			if(typeof value.levelCompleted === "string") {
				show = true;
				currentDialog = dialogs.get(value.levelCompleted as string) as string || "";
				badges.update((values: Array<string>) => ([...values, location.pathname.replace(/\//, "")]));
				currentLevelData.set({});
				setTimeout(() => {
					goto("/map").then(()=>{
						const menuBadgesElement = document.getElementById("menuBadges");
						if (menuBadgesElement && typeof menuBadgesElement.click === "function") menuBadgesElement.click();
					})
				}, timeOftimer*0.5);
			}
		});

		
		// mute music

		mute.set(myAudio.paused);
		mute.subscribe((value:boolean) => value && !isNaN(index) ? myAudio.pause() : myAudio.play());
		
		badges.subscribe((value: Array<string>) => {
			localStorage.removeItem("badges");
			localStorage.setItem("badges", JSON.stringify(value));
		})
		// get storage

		const oldSelect: number = Number(localStorage.getItem("characterSelected"));
		const oldBadges: Array<string> = JSON.parse(localStorage.getItem("badges") || '');
		if (!isNaN(oldSelect)) {
			characterSelected.set = oldSelect;
			index = (characterSelected.set);
			console.log("localStorage " + characterSelected.set)
		}
		if (Array.isArray(oldBadges)) {
			badges.set(oldBadges);
		}
		
	})
</script>

<style>
.wrapper-message {
	position: relative;
	bottom: 0px;
	left: 0px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: end;
	width: max-content;
	margin: auto;
	transition: all 350ms;
	transform: translateY(0%);

}
.character {
	width: calc(var(--vh-main) * 12);
	height: calc(var(--vh-main) * 18);
	background-size: 110% 110%;
	background-position: -5% -5%;
}
.message {
	width: calc(var(--vh-main) * 100);
	display: flex;
	background-color: var(--color-coral-2);
	border: var(--vh-main) solid var(--color-secondary);
	border-radius: calc(var(--vh-main) * 2);
	box-sizing: border-box;
	padding: calc(var(--vh-main) * 1);
	box-shadow: 0px 0px 0px 1px var(--color-primary), 0px 0px 0px 1px inset var(--color-primary);
}
.showMessage {
	transform: translateY(-100%);
}
.playAudio {
	position: absolute;
	visibility: hidden;
	left: -1000px;
}
@supports (backdrop-filter: blur(1px)) {
	.wrapper-message {
		align-items: flex-end;
	}
}
</style>

<div class="wrapper-message" class:showMessage={show}>
	<div class="character" style="background-image: url('img/characters/character-transparent-{index}.png')"></div>
	<div class="message">{currentDialog}</div>
</div>

<audio autoplay loop  class="playAudio" bind:this={myAudio}>
	<source src="../audio/home/{music}.mp3">
	<track kind="captions">
</audio>
