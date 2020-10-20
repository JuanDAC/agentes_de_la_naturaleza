<script>
	import {currentLevelData} from "../../../../store";
	import type {ICurrentLevelData} from "../../../../interfaces";
	import { onMount } from "svelte";
	export let type: string = "";
	// let localLeveldata: ICurrentLevelData;
	let animationPlay: HTMLDivElement;
	// let previousAnimationPlay: number = NaN;
	onMount(()=>{
		currentLevelData.subscribe((value:ICurrentLevelData) => {
			if (value.garbage === 0) {
				currentLevelData.update((value:ICurrentLevelData) => ({...value, levelCompleted: `${location.pathname.replace(/\//, "")}-end-game`}));
			}
		});
	})
	const dragover = (event: {[index:string]: any}) => {
		event.preventDefault();
	}
	const drop = (event: {[index:string]: any}) => {
		const {type: getType, id } = JSON.parse(event.dataTransfer.getData('text/plain'));
		if (getType == type) {
			animationPlay.animate([
				{transform: `scale(0) rotate(0deg)`},
				{transform: `scale(1) rotate(180deg)`},
				{transform: `scale(1) rotate(360deg)`},
				{transform: `scale(1) rotate(540deg)`},
				{transform: `scale(1) rotate(720deg)`},
				{transform: `scale(1) rotate(900deg)`},
				{transform: `scale(1) rotate(1080deg)`},
				{transform: `scale(1) rotate(1260deg)`},
				{transform: `scale(1) rotate(1440deg)`},
				{transform: `scale(1) rotate(1620deg)`},
				{transform: `scale(1) rotate(1800deg)`},
				{transform: `scale(0) rotate(1980deg)`},
			], 1500)
			const drag = document.getElementById(id)
			if (drag && typeof drag.remove === "function") drag.remove();
			currentLevelData.update((value: ICurrentLevelData) => ({...value, garbage: ((value.garbage as number) - 1)}));
		}
	}
	
</script>
<style >
	svg {
		height: calc(var(--vh) * 11.5);
		cursor:crosshair;
	}
	.st0{fill:#E3E5EF;}
	.st1{fill:#4C903F;}
	.st2{fill:url(#SVGID_1_);}
	.st3{fill:#2B5B31;}
	.st4{fill:url(#SVGID_2_);}
	.st5{fill:#3B703C;}
	.st6{fill:url(#SVGID_3_);}
	.st7{fill:url(#SVGID_4_);}
	.st8{fill:#5CB143;}
	.st9{fill:#53A041;}
	.st10{fill:#65B34D;}
	.st11{fill:url(#SVGID_5_);}
	.st12{fill:#7FC06B;}
	.st13{fill:#3F763A;}
	.st14{fill:#336134;}
	.st15{fill:#154A1C;}
	.st16{fill:#34623A;}
	.st17{fill:#D6CEDC;}
	.st18{fill:#25242F;}
	.st19{fill:#393842;}
	.st20{fill:#A391B1;}
	.st21{fill:#A3B2BF;}
	.st22{fill:#A0B0BA;}
	.st23{fill:#DDDDDE;}
	.st24{fill:#A0ADB7;}
	.st25{fill:#A2B0BD;}
	.st26{fill:#A5B5C2;}
	.st27{fill:url(#SVGID_6_);}
	.st28{fill:#98A6B1;}
	.st29{fill:url(#SVGID_7_);}
	.st30{fill:#AAB9C4;}
	.st31{fill:url(#SVGID_8_);}
	.st32{fill:#63737C;}
	.st33{fill:#CDC6BC;}
	.st34{fill:#999C9D;}
	.st35{fill:#5C5F60;}
	.st36{fill:#515354;}
	.st37{fill:#1A67A5;}
	.st38{fill:#165D8D;}
	.st39{fill:#175079;}
	.st40{fill:#19639E;}
	.st41{fill:#1A70B4;}
	.st42{fill:url(#SVGID_9_);}
	.st43{fill:#0F3E63;}
	.st44{fill:url(#SVGID_10_);}
	.st45{fill:#1A68A8;}
	.st46{fill:#2079BB;}
	.st47{fill:url(#SVGID_11_);}
	.st48{fill:#86A1B1;}
	.st49{fill:#083652;}
	.st50{fill:#27556A;}
	.st51{fill:#5AA4F6;}
	.st52{fill:#5499EB;}
	.st53{fill:#549BE7;}
	.st54{fill:#FCFCFC;}
	.st55{fill:#E9E9E9;}
	.st56{fill:url(#SVGID_12_);}
	.st57{fill:#E6E6E6;}
	.st58{fill:url(#SVGID_13_);}
	.st59{fill:#E7E7E7;}
	.st60{fill:url(#SVGID_14_);}
	.st61{fill:url(#SVGID_15_);}
	.st62{fill:#ECECEC;}
	.st63{fill:#EBEBEB;}
	.st64{fill:#EDEDED;}
	.st65{fill:url(#SVGID_16_);}
	.st66{fill:#F8F8F8;}
	.st67{fill:#F5F5F5;}
	.st68{fill:#F4F4F4;}
	.st69{fill:#767676;}
	.st70{fill:#B71E1D;}
	.st71{fill:url(#SVGID_17_);}
	.st72{fill:#960017;}
	.st73{fill:url(#SVGID_18_);}
	.st74{fill:#A6011C;}
	.st75{fill:url(#SVGID_19_);}
	.st76{fill:url(#SVGID_20_);}
	.st77{fill:#E1262F;}
	.st78{fill:#DE232D;}
	.st79{fill:#ED323B;}
	.st80{fill:url(#SVGID_21_);}
	.st81{fill:#EA4842;}
	.st82{fill:#AA081B;}
	.st83{fill:#9E0017;}
	.st84{fill:#80000D;}
	.st85{fill:#9F001C;}
	.st86{fill:#F5DADF;}
	.st87{fill:#BCB7A2;}
	.st88{fill:#ABA492;}
	.st89{fill:#E5E5E7;}
	.st90{fill:#8F8577;}
	.st91{fill:#B6B09D;}
	.st92{fill:#C7C2AC;}
	.st93{fill:url(#SVGID_22_);}
	.st94{fill:#8A8174;}
	.st95{fill:url(#SVGID_23_);}
	.st96{fill:#BEB9A4;}
	.st97{fill:#D0CBB5;}
	.st98{fill:url(#SVGID_24_);}
	.st99{fill:#5D5343;}
	.st100{fill:#EFECE1;}
	.st101{fill:#D2CCC1;}
	.st102{fill:#CAC3B9;}
	.st103{fill:#DEBA32;}
	.st104{fill:#D3A22B;}
	.st105{fill:#BF7C1F;}
	.st106{fill:#DAB331;}
	.st107{fill:#E6C933;}
	.st108{fill:url(#SVGID_25_);}
	.st109{fill:#B77922;}
	.st110{fill:url(#SVGID_26_);}
	.st111{fill:#DFBD32;}
	.st112{fill:#F1D03E;}
	.st113{fill:url(#SVGID_27_);}
	.st114{fill:#BBAE9A;}
	.st115{fill:#A1680D;}
	.st116{fill:#C0802B;}
	.st117{fill:#FFDE5C;}
	.st118{fill:#CB942B;}
	.st119{fill:#BF7F25;}
	.wrapper-trash{
		position: relative;
	}
	.animate{
		position: absolute;
		background-image: linear-gradient(#2BD6E0, #A32BE0, #E06009);
		border-radius: 50%;
		left: calc(var(--vh) * -2.2);
		width: calc(var(--vh) * 11);
		height: calc(var(--vh) * 11);
		transform: scale(0);
		filter: blur(1px);
	}
	.animate::before,
	.animate::after,
	.animate span{
		content: "";
		position: absolute;
		background-image: linear-gradient(#2BD6E0, #A32BE0, #E06009);
		border-radius: 50%;
		width: 100%;
		height: 100%;
		left:0px;
		filter: blur(5px);
	}
	.animate::before{
		filter: blur(10px);
	}
	.animate span:nth-child(1) {
		filter: blur(15px);
	}
	.animate span:nth-child(2) {
		filter: blur(20px);
	}
	.animate span:nth-child(3) {
		filter: blur(25px);
	}
	#Layer_1 {
		position: relative;
		z-index: 30;
	}
	/* @keyframes animate-scale  {
		
	} */
</style>
<!-- class:play={animationPlay} -->

<div 
	class="wrapper-trash"
	on:dragover={dragover}
	on:drop={drop}
	>
	<div 
		bind:this={animationPlay}
		class="animate"
	>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</div>
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 76 134.9" style="enable-background:new 0 0 76 134.9;" xml:space="preserve">
		{#if type === "ordinarios"}
			<g id="ordinarios">
				<g>
					<g>
						<path class="st0" d="M32.3,134.3L1,116.3c-1.5-0.9-1.3-2.4,0.4-3.4l27.4-15.8c1.7-1,4.4-1.1,5.9-0.2l31.2,18
							c1.5,0.9,1.3,2.4-0.4,3.4l-27.4,15.8C36.4,135.1,33.8,135.2,32.3,134.3z"/>
						<polygon class="st1" points="54.9,119.3 52.9,118.9 54.1,91.4 54.9,91.5 			"/>
						
							<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-67.1428" y1="53.3051" x2="-63.1971" y2="53.3051" gradientTransform="matrix(1 0 0 1 129.6298 0)">
							<stop  offset="8.675500e-02" style="stop-color:#529D41"/>
							<stop  offset="0.8152" style="stop-color:#46853E"/>
						</linearGradient>
						<polygon class="st2" points="66.4,50.8 66.4,55.8 64.6,54.9 62.5,51.9 			"/>
						<polygon class="st3" points="37.8,100.8 54.1,91.4 52.9,118.9 36.6,128.3 			"/>
						
							<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="-71.3455" y1="114.7315" x2="-127.6616" y2="114.7315" gradientTransform="matrix(1 0 0 1 129.6298 0)">
							<stop  offset="0.3092" style="stop-color:#3B703C"/>
							<stop  offset="0.3753" style="stop-color:#3C723C"/>
							<stop  offset="0.3991" style="stop-color:#40793D"/>
							<stop  offset="0.416" style="stop-color:#46843E"/>
							<stop  offset="0.4167" style="stop-color:#46853E"/>
							<stop  offset="0.4275" style="stop-color:#4A8E3F"/>
							<stop  offset="0.4595" style="stop-color:#55A241"/>
							<stop  offset="0.4911" style="stop-color:#5BAF43"/>
							<stop  offset="0.5216" style="stop-color:#5DB343"/>
							<stop  offset="0.8752" style="stop-color:#59AB42"/>
							<stop  offset="0.9019" style="stop-color:#54A141"/>
							<stop  offset="0.947" style="stop-color:#47873E"/>
							<stop  offset="0.9748" style="stop-color:#3D733C"/>
						</linearGradient>
						<path class="st4" d="M33.1,99.3l11,6.4v19.9l-8,4.6c-0.7,0.4-1.7,0.4-2.3,0.1L6.7,114.5c-0.3-0.2-0.4-0.4-0.4-0.6
							c0-0.3,0.2-0.6,0.6-0.8l24-13.9C31.5,99,32.5,98.9,33.1,99.3z"/>
						<path class="st5" d="M60.7,115.5L60.7,115.5c0,0.3-0.2,0.5-0.6,0.8l-5.2,3v-7.4l5.4,3.1C60.5,115.1,60.7,115.3,60.7,115.5z"/>
						
						<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-71.3455" y1="84.7844" x2="-127.6615" y2="84.7844" gradientTransform="matrix(1 0 0 1 129.6298 0)">
							<stop  offset="0.3092" style="stop-color:#3B703C"/>
							<stop  offset="0.3753" style="stop-color:#3C723C"/>
							<stop  offset="0.3991" style="stop-color:#40793D"/>
							<stop  offset="0.416" style="stop-color:#46843E"/>
							<stop  offset="0.4167" style="stop-color:#46853E"/>
							<stop  offset="0.4275" style="stop-color:#4A8E3F"/>
							<stop  offset="0.4595" style="stop-color:#55A241"/>
							<stop  offset="0.4911" style="stop-color:#5BAF43"/>
							<stop  offset="0.5216" style="stop-color:#5DB343"/>
							<stop  offset="0.8896" style="stop-color:#59AB42"/>
							<stop  offset="0.9192" style="stop-color:#54A141"/>
							<stop  offset="0.9692" style="stop-color:#47873E"/>
							<stop  offset="1" style="stop-color:#3D733C"/>
						</linearGradient>
						<polygon class="st6" points="63.2,55.6 60.7,115.5 60.7,115.5 54.9,115.4 54.9,91.5 44.1,97.7 44.1,115.1 6.3,114 3.8,54" style="stop-color:#3B703C"/>
						<path class="st3" d="M62.9,60.9l-9.7-5.6l-40.5-1.1l-8.6,5l0.3,6.9l27.9,16.1c1.5,0.9,4.1,0.8,5.9-0.2l24.5-14.1L62.9,60.9z"/>
						
							<linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="-132.8678" y1="59.5911" x2="-68.4666" y2="59.5911" gradientTransform="matrix(1 0 0 1 129.6298 0)">
							<stop  offset="2.126530e-02" style="stop-color:#509940"/>
							<stop  offset="4.195636e-02" style="stop-color:#54A141"/>
							<stop  offset="7.769930e-02" style="stop-color:#59AB42"/>
							<stop  offset="0.4784" style="stop-color:#5DB343"/>
							<stop  offset="0.5089" style="stop-color:#5BAF43"/>
							<stop  offset="0.5405" style="stop-color:#55A241"/>
							<stop  offset="0.5725" style="stop-color:#4A8E3F"/>
							<stop  offset="0.5833" style="stop-color:#46853E"/>
							<stop  offset="0.584" style="stop-color:#46843E"/>
							<stop  offset="0.6009" style="stop-color:#40793D"/>
							<stop  offset="0.6247" style="stop-color:#3C723C"/>
							<stop  offset="0.6908" style="stop-color:#3B703C"/>
						</linearGradient>
						<path class="st7" d="M67,55.5l-3.4-0.1L34.7,40.8c-1.5-0.9-4.1-0.8-5.9,0.2L6.2,54.2L0,54v4.8h0c0,0.6,0.3,1.1,1,1.5l31.2,18
							c1.5,0.9,4.1,0.8,5.9-0.2l4.2-2.4l1.4-3l21.8-12.6c1-0.6,1.4-1.3,1.4-1.9h0V55.5z"/>
						<g>
							<g>
								<g>
									<g>
										<path class="st5" d="M46.7,0.1l28.6,16.4c0.1,0.1,0.4,0.3,0.6,0.8c0.2,0.5,0.3,1.1,0.2,1.6L68,53.2c-0.1,0.6-1.1,3.1-1.6,2.8
											L37.9,37.5c-0.1-0.1-0.4-0.3-0.5-0.8c-0.2-0.5-0.3-1.1-0.2-1.6l7.9-34.4C45.3,0.2,46.1-0.2,46.7,0.1z"/>
										<path class="st8" d="M45,0.1l28.6,16.4c0.1,0.1,0.4,0.3,0.6,0.8c0.2,0.5,0.3,1.1,0.2,1.6l-7.9,34.4c-0.1,0.6-1,1-1.5,0.7
											L36.3,37.5c-0.1-0.1-0.4-0.3-0.5-0.8c-0.2-0.5-0.3-1.1-0.2-1.6l7.9-34.4C43.7,0.2,44.5-0.2,45,0.1z"/>
										<path class="st9" d="M1,55.5l31.2,18c1.5,0.9,4.1,0.8,5.9-0.2l27.4-15.8c1.7-1,1.9-2.5,0.4-3.4L65.8,54L34.9,36.1L34.7,36
											c-1.5-0.9-4.1-0.8-5.9,0.2L1.4,52.1C-0.3,53.1-0.5,54.6,1,55.5z"/>
										<path class="st10" d="M1.7,55.1l30.6,17.7c1.5,0.8,4.1,0.7,5.8-0.2L64.9,57c1.7-1,1.9-2.5,0.4-3.3l-0.2-0.1L34.9,36.1
											L34.7,36c-1.5-0.8-4.1-0.7-5.8,0.2L2.1,51.8C0.4,52.7,0.2,54.2,1.7,55.1z"/>
										
											<linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="2049.6353" y1="54.0276" x2="2108.4006" y2="54.0276" gradientTransform="matrix(-1 0 0 1 2114.4783 0)">
											<stop  offset="4.207150e-02" style="stop-color:#498B3F"/>
											<stop  offset="0.4632" style="stop-color:#427D3D"/>
											<stop  offset="0.5083" style="stop-color:#40793C"/>
											<stop  offset="0.5549" style="stop-color:#3B6C37"/>
											<stop  offset="0.5833" style="stop-color:#376133"/>
											<stop  offset="0.5985" style="stop-color:#356134"/>
											<stop  offset="0.6908" style="stop-color:#336134"/>
										</linearGradient>
										<path class="st11" d="M4.1,53.6c0,0.3,0.1,0.7,0.4,0.9l28.3,16.3C33,70.9,33.4,71,34,71c0.7,0,1.4-0.2,1.9-0.4l26.6-15.4
											c0.6-0.3,0.6-1.2,0-1.5L34.3,37.4c-0.9-0.5-2-0.5-2.9,0C25.5,40.9,4.1,53.4,4.1,53.6z"/>
										<path class="st9" d="M31.4,38.2c0.9-0.5,2-0.5,2.9,0l28.1,16.2c0.2,0.1,0.3,0.2,0.3,0.4c0.2-0.4,0.1-0.9-0.3-1.1L34.3,37.4
											c-0.9-0.5-2-0.5-2.9,0C25.5,40.9,4.1,53.4,4.1,53.6c0,0.2,0,0.4,0.2,0.6C6.3,52.8,25.8,41.4,31.4,38.2z"/>
										<path class="st3" d="M19.2,66l-5.9-3.4c-1.5-0.8-1.6-2.1-0.4-2.8l0.5-0.3L24.6,66l-0.5,0.3C22.8,66.9,20.6,66.8,19.2,66z"/>
									</g>
								</g>
							</g>
							<g>
								<path class="st12" d="M63.5,51.3L63.5,51.3l-0.2,0.3c0,0.2-0.2,0.5-0.4,0.6c0,0,0,0,0,0l-0.1,0.1l-0.1,0.1l0,0h0l0,0L56,48.6
									l-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.3v0c0-0.3,0.2-0.7,0.5-0.8c0.1-0.1,0.2-0.1,0.3,0l0,0c0,0,0,0,0,0L63.5,51.3L63.5,51.3z"/>
								<path class="st13" d="M63.6,51.6C63.6,51.6,63.6,51.6,63.6,51.6L63.6,51.6c0,0.3-0.2,0.6-0.4,0.7l0,0c0,0-0.1,0-0.1,0.1
									c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0h0l0,0c-0.1-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0.1-0.3,0.2-0.6,0.5-0.7
									c0.1-0.1,0.2-0.1,0.3,0c0,0,0,0,0.1,0C63.6,51.4,63.6,51.5,63.6,51.6z"/>
								<path class="st14" d="M63.6,51.6c0,0.3-0.2,0.6-0.4,0.7c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0
									c0,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.1-0.1-0.3c0,0,0-0.1,0-0.1c0-0.3,0.2-0.5,0.4-0.6c0.1-0.1,0.2-0.1,0.3,0
									C63.6,51.4,63.6,51.5,63.6,51.6L63.6,51.6C63.6,51.6,63.6,51.6,63.6,51.6z"/>
							</g>
							<g>
								<path class="st12" d="M45.9,41.3L45.9,41.3l-0.2,0.3c0,0.2-0.2,0.5-0.4,0.6c0,0,0,0,0,0l-0.1,0.1l-0.1,0.1l0,0h0l0,0l-6.8-3.8
									l-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.3v0c0-0.3,0.2-0.7,0.5-0.8c0.1-0.1,0.2-0.1,0.3,0l0,0c0,0,0,0,0,0L45.9,41.3L45.9,41.3z"/>
								<path class="st13" d="M46,41.6C46,41.6,46,41.6,46,41.6L46,41.6c0,0.3-0.2,0.6-0.4,0.7l0,0c0,0-0.1,0-0.1,0.1
									c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0h0l0,0c-0.1-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0.1-0.3,0.2-0.6,0.5-0.7
									c0.1-0.1,0.2-0.1,0.3,0c0,0,0,0,0.1,0C46,41.4,46,41.5,46,41.6z"/>
								<path class="st14" d="M46,41.6c0,0.3-0.2,0.6-0.4,0.7c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0
									c0,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.1-0.1-0.3c0,0,0-0.1,0-0.1c0-0.3,0.2-0.5,0.4-0.6c0.1-0.1,0.2-0.1,0.3,0
									C46,41.4,46,41.5,46,41.6L46,41.6C46,41.6,46,41.6,46,41.6z"/>
							</g>
						</g>
					</g>
					<polygon class="st15" points="60.8,62.8 58.1,66.3 56.7,65.2 		"/>
					<polygon class="st15" points="53.1,67.3 50.4,70.8 49,69.6 		"/>
					<polygon class="st16" points="61.9,62.2 59.2,65.7 58.1,66.3 60.8,62.8 		"/>
					<polygon class="st16" points="54.2,66.6 51.5,70.1 50.4,70.8 53.1,67.3 		"/>
					<path class="st17" d="M26,97.1c-0.2,0.4-0.6,0.6-1.1,0.4c-0.6-0.2-1-0.8-0.9-1.4c0.4-2.3-0.9-4.8-2.9-6.1l0,0
						c-0.5-0.3-0.8-1-0.5-1.5c0.2-0.5,0.8-0.6,1.4-0.3l0,0c2.9,1.9,4.6,5.4,4.1,8.7C26,96.9,26,97,26,97.1z M23.5,100.8
						c-0.1,0.2-0.2,0.3-0.3,0.4c-1,0.6-2.2,0.8-3.4,0.8c-1.3-0.1-2.5-0.5-3.7-1.3c-0.6-0.4-1.1-0.8-1.6-1.3c-0.4-0.5-0.5-1.1-0.2-1.5
						c0.4-0.4,1-0.4,1.5,0.1c0.3,0.3,0.7,0.6,1.1,0.9c1.7,1.1,3.6,1.2,5.1,0.3c0.5-0.3,1.1,0,1.4,0.5C23.6,100,23.7,100.5,23.5,100.8z
						M17.7,88.7c-0.1,0.2-0.3,0.4-0.6,0.5c-1.3,0.3-2.3,1.1-2.8,2.3c-0.4,0.8-0.5,1.7-0.4,2.6c0.1,0.6-0.4,1.1-0.9,1
						c-0.6,0-1.1-0.6-1.1-1.2c-0.1-1.3,0.1-2.6,0.6-3.7c0.8-1.7,2.2-2.8,4-3.2c0.5-0.1,1.1,0.3,1.3,0.9C17.8,88.2,17.8,88.5,17.7,88.7z
						"/>
				</g>
				<g>
					<g>
						<path class="st18" d="M57.3,116.3c0-2.5,1.8-5.7,4-6.9c1.1-0.6,2.1-0.7,2.9-0.3l0,0l1.7,1.1l-5.9,9.7l-1.5-1v0
							C57.8,118.5,57.3,117.6,57.3,116.3z"/>
						<path class="st19" d="M59,117.4c0,2.5,1.8,3.6,4,2.3c2.2-1.3,4-4.4,4-6.9c0-2.5-1.8-3.6-4-2.3C60.8,111.7,59,114.8,59,117.4z"/>
					</g>
					<path class="st20" d="M60.1,116.7c0,1.8,1.3,2.6,2.9,1.6c1.6-0.9,2.9-3.1,2.9-5c0-1.8-1.3-2.6-2.9-1.6
						C61.4,112.7,60.1,114.9,60.1,116.7z"/>
				</g>
			</g>
		{:else if  type === "papel"}
			<g id="papel">
				<g>
					<g>
						<g>
							<path class="st21" d="M46.7,0.1l28.6,16.4c0.1,0.1,0.4,0.3,0.6,0.8c0.2,0.5,0.3,1.1,0.2,1.6L68,53.2c-0.1,0.6-1.1,3.1-1.6,2.8
								L37.9,37.5c-0.1-0.1-0.4-0.3-0.5-0.8c-0.2-0.5-0.3-1.1-0.2-1.6l7.9-34.4C45.3,0.2,46.1-0.2,46.7,0.1z"/>
							<path class="st22" d="M45,0.1l28.6,16.4c0.1,0.1,0.4,0.3,0.6,0.8c0.2,0.5,0.3,1.1,0.2,1.6l-7.9,34.4c-0.1,0.6-1,1-1.5,0.7
								L36.3,37.5c-0.1-0.1-0.4-0.3-0.5-0.8c-0.2-0.5-0.3-1.1-0.2-1.6l7.9-34.4C43.7,0.2,44.5-0.2,45,0.1z"/>
							<path class="st23" d="M32.3,134.3L1,116.3c-1.5-0.9-1.3-2.4,0.4-3.4l27.4-15.8c1.7-1,4.4-1.1,5.9-0.2l31.2,18
								c1.5,0.9,1.3,2.4-0.4,3.4l-27.4,15.8C36.4,135.1,33.8,135.2,32.3,134.3z"/>
							<polygon class="st24" points="54.9,119.3 52.9,118.9 54.1,91.4 54.9,91.5 				"/>
							<polygon class="st25" points="37.8,100.8 54.1,91.4 52.9,118.9 36.6,128.3 				"/>
							<path class="st26" d="M60.7,115.5L60.7,115.5c0,0.3-0.2,0.5-0.6,0.8l-5.2,3v-7.4l5.4,3.1C60.5,115.1,60.7,115.3,60.7,115.5z"/>
							
								<linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="-225.6703" y1="92.2266" x2="-278.6662" y2="92.2266" gradientTransform="matrix(-1 0 0 1 -213.1358 0)">
								<stop  offset="0.3092" style="stop-color:#A0ADB6"/>
								<stop  offset="0.4015" style="stop-color:#A0AEB8"/>
								<stop  offset="0.4167" style="stop-color:#A1AFBA"/>
								<stop  offset="0.4466" style="stop-color:#A3B2BE"/>
								<stop  offset="0.5216" style="stop-color:#A5B6C2"/>
								<stop  offset="0.8896" style="stop-color:#A4B5C1"/>
								<stop  offset="0.9988" style="stop-color:#A0AEB7"/>
								<stop  offset="1" style="stop-color:#A0AEB7"/>
							</linearGradient>
							<path class="st27" d="M63.2,55.6l-2.5,59.9v0l-5.8-0.2V91.5l-10.8,6.2v7.9v9.4v10.4l-8,4.6c-0.7,0.4-1.7,0.4-2.3,0.1L6.7,114.5
								c-0.3-0.2-0.4-0.4-0.4-0.6L3.8,54L63.2,55.6z"/>
							<path class="st28" d="M62.9,60.9l-9.7-5.6l-40.5-1.1l-8.6,5l0.3,6.9l27.9,16.1c1.5,0.9,4.1,0.8,5.9-0.2l24.5-14.1L62.9,60.9z"/>
							
								<linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="2026.0436" y1="59.5911" x2="2090.4446" y2="59.5911" gradientTransform="matrix(1 0 0 1 -2018.3524 0)">
								<stop  offset="0.3092" style="stop-color:#A0ADB6"/>
								<stop  offset="0.4015" style="stop-color:#A0AEB8"/>
								<stop  offset="0.4167" style="stop-color:#A1AFBA"/>
								<stop  offset="0.4466" style="stop-color:#A3B2BE"/>
								<stop  offset="0.5216" style="stop-color:#A5B6C2"/>
								<stop  offset="0.8752" style="stop-color:#A4B5C1"/>
								<stop  offset="0.9738" style="stop-color:#A0AEB7"/>
								<stop  offset="0.9748" style="stop-color:#A0AEB7"/>
							</linearGradient>
							<path class="st29" d="M67,55.5l-3.4-0.1L34.7,40.8c-1.5-0.9-4.1-0.8-5.9,0.2L6.2,54.2L0,54l0,4.8h0c0,0.6,0.3,1.1,1,1.5l31.2,18
								c1.5,0.9,4.1,0.8,5.9-0.2l4.2-2.4l1.4-3l21.8-12.6c1-0.6,1.4-1.3,1.4-1.9h0V55.5z"/>
							<path class="st21" d="M1,55.5l31.2,18c1.5,0.9,4.1,0.8,5.9-0.2l27.4-15.8c1.7-1,1.9-2.5,0.4-3.4L65.8,54L34.9,36.1L34.7,36
								c-1.5-0.9-4.1-0.8-5.9,0.2L1.4,52.1C-0.3,53.1-0.5,54.6,1,55.5z"/>
							<path class="st30" d="M1.7,55.1l30.6,17.7c1.5,0.8,4.1,0.7,5.8-0.2L64.9,57c1.7-1,1.9-2.5,0.4-3.3l-0.2-0.1L34.9,36.1L34.7,36
								c-1.5-0.8-4.1-0.7-5.8,0.2L2.1,51.8C0.4,52.7,0.2,54.2,1.7,55.1z"/>
							
								<linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="-271.0213" y1="54.2733" x2="-212.256" y2="54.2733" gradientTransform="matrix(-1 0 0 1 -213.1358 0)">
								<stop  offset="0.3092" style="stop-color:#9DABB3"/>
								<stop  offset="0.4167" style="stop-color:#9CACB3"/>
								<stop  offset="0.4373" style="stop-color:#9DADB5"/>
								<stop  offset="0.5368" style="stop-color:#A0AEB9"/>
								<stop  offset="0.9579" style="stop-color:#A2B0BB"/>
							</linearGradient>
							<path class="st31" d="M4.4,53.9c0,0.3,0.1,0.7,0.4,0.9L33.1,71c0.1,0.1,0.5,0.2,1.1,0.2c0.7,0,1.4-0.2,1.9-0.4l26.6-15.4
								c0.6-0.3,0.6-1.2,0-1.5L34.6,37.7c-0.9-0.5-2-0.5-2.9,0C25.8,41.1,4.4,53.6,4.4,53.9z"/>
							<path class="st21" d="M62.7,54.7L34.6,38.4c-0.9-0.5-2-0.5-2.9,0c-5.6,3.2-25.1,14.7-27.1,16c-0.1-0.2-0.2-0.4-0.2-0.6
								c0-0.2,21.4-12.7,27.3-16.2c0.9-0.5,2-0.5,2.9,0l28.1,16.2c0.4,0.2,0.5,0.7,0.4,1.1C63,54.9,62.9,54.8,62.7,54.7z"/>
							<path class="st28" d="M19.2,66l-5.9-3.4c-1.5-0.8-1.6-2.1-0.4-2.8l0.5-0.3L24.6,66l-0.5,0.3C22.8,66.9,20.6,66.8,19.2,66z"/>
						</g>
						<g>
							<path class="st32" d="M14.5,95.6c-0.1,0.1-0.1,0.3,0,0.4c0,0.1,0,0.1,0.1,0.1l4.1,2.4l-0.2-3.4l-2.6-1.5L14.5,95.6z"/>
							<path class="st32" d="M22.8,97.3l2.8,1.6c0.2,0.1,0.4,0.1,0.5,0.1l-1.8-3.9L22,95.5L22.8,97.3z"/>
							<path class="st32" d="M19.3,91.7l3.6,3l0.6-3.7l-0.9,0.2l-1.6-3.6c-0.3-0.7-0.8-1.2-1.3-1.5L17,84.5l3.2,7L19.3,91.7z"/>
							<path class="st32" d="M18.8,88.9l-1.5-3.3c-0.1-0.3-0.3-0.5-0.5-0.6c0,0,0,0,0,0c0,0-0.1,0-0.1,0l-1.9,2.6l2.6,3.3L18.8,88.9z"
								/>
							<path class="st32" d="M16.9,94.1l-1-4.6l-3.5-1.1l1,1.2l-0.9,1.3c-0.3,0.4-0.2,1,0,1.7l1.3,3.2l2.1-2.9L16.9,94.1z"/>
							<path class="st32" d="M21.5,96.9l-0.1-1.3L19,97.1l2.8,4.5l-0.1-1.3l2.6,1.5c0.5,0.3,1,0.2,1.2-0.1l1.1-1.9L21.5,96.9z"/>
						</g>
					</g>
					<g>
						<g>
							<path class="st18" d="M57.3,116.3c0-2.5,1.8-5.7,4-6.9c1.1-0.6,2.1-0.7,2.9-0.3l0,0l1.7,1.1l-5.9,9.7l-1.5-1v0
								C57.8,118.5,57.3,117.6,57.3,116.3z"/>
							<path class="st19" d="M59,117.4c0,2.5,1.8,3.6,4,2.3c2.2-1.3,4-4.4,4-6.9c0-2.5-1.8-3.6-4-2.3C60.8,111.7,59,114.8,59,117.4z"/>
						</g>
						<path class="st33" d="M60.1,116.7c0,1.8,1.3,2.6,2.9,1.6c1.6-0.9,2.9-3.1,2.9-5c0-1.8-1.3-2.6-2.9-1.6
							C61.4,112.7,60.1,114.9,60.1,116.7z"/>
					</g>
				</g>
				<g>
					<path class="st34" d="M63.5,51.5L63.5,51.5l-0.2,0.2c0,0.2-0.2,0.4-0.4,0.5c0,0,0,0,0,0l-0.1,0.1l-0.1,0.1l0,0h0l0,0L56,49.4
						l-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.2v0c0-0.2,0.2-0.5,0.5-0.6c0.1-0.1,0.2-0.1,0.3,0l0,0c0,0,0,0,0,0L63.5,51.5L63.5,51.5z"/>
					<path class="st35" d="M63.6,51.8C63.6,51.8,63.6,51.8,63.6,51.8L63.6,51.8c0,0.2-0.2,0.5-0.4,0.6l0,0c0,0-0.1,0-0.1,0.1
						c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0h0l0,0c-0.1,0-0.1-0.1-0.1-0.2c0,0,0-0.1,0-0.1c0.1-0.2,0.2-0.4,0.5-0.5
						c0.1,0,0.2-0.1,0.3,0c0,0,0,0,0.1,0C63.6,51.6,63.6,51.7,63.6,51.8z"/>
					<path class="st36" d="M63.6,51.8c0,0.2-0.2,0.5-0.4,0.6c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0
						c-0.1,0-0.1-0.1-0.1-0.2c0,0,0-0.1,0-0.1c0-0.2,0.2-0.4,0.4-0.5c0.1-0.1,0.2-0.1,0.3,0C63.6,51.6,63.6,51.7,63.6,51.8L63.6,51.8
						C63.6,51.8,63.6,51.8,63.6,51.8z"/>
				</g>
				<g>
					<path class="st34" d="M45.9,41.3L45.9,41.3l-0.2,0.3c0,0.2-0.2,0.5-0.4,0.6c0,0,0,0,0,0l-0.1,0.1l-0.1,0.1l0,0h0l0,0l-6.8-3.8
						l-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.3v0c0-0.3,0.2-0.7,0.5-0.8c0.1-0.1,0.2-0.1,0.3,0l0,0c0,0,0,0,0,0L45.9,41.3L45.9,41.3z"/>
					<path class="st35" d="M46,41.6C46,41.6,46,41.6,46,41.6L46,41.6c0,0.3-0.2,0.6-0.4,0.7l0,0c0,0-0.1,0-0.1,0.1
						c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0h0l0,0c-0.1-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0.1-0.3,0.2-0.6,0.5-0.7
						c0.1-0.1,0.2-0.1,0.3,0c0,0,0,0,0.1,0C46,41.4,46,41.5,46,41.6z"/>
					<path class="st36" d="M46,41.6c0,0.3-0.2,0.6-0.4,0.7c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0
						c0,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.1-0.1-0.3c0,0,0-0.1,0-0.1c0-0.3,0.2-0.5,0.4-0.6c0.1-0.1,0.2-0.1,0.3,0C46,41.4,46,41.5,46,41.6
						L46,41.6C46,41.6,46,41.6,46,41.6z"/>
				</g>
			</g>
		{:else if  type === "plastico"}
			<g id="plastico">
				<g>
					<g>
						<g>
							<path class="st37" d="M46.7,0.1l28.6,16.4c0.1,0.1,0.4,0.3,0.6,0.8c0.2,0.5,0.3,1.1,0.2,1.6L68,53.2c-0.1,0.6-1.1,3.1-1.6,2.8
								L37.9,37.5c-0.1-0.1-0.4-0.3-0.5-0.8c-0.2-0.5-0.3-1.1-0.2-1.6l7.9-34.4C45.3,0.2,46.1-0.2,46.7,0.1z"/>
							<path class="st38" d="M45,0.1l28.6,16.4c0.1,0.1,0.4,0.3,0.6,0.8c0.2,0.5,0.3,1.1,0.2,1.6l-7.9,34.4c-0.1,0.6-1,1-1.5,0.7
								L36.3,37.5c-0.1-0.1-0.4-0.3-0.5-0.8c-0.2-0.5-0.3-1.1-0.2-1.6l7.9-34.4C43.7,0.2,44.5-0.2,45,0.1z"/>
							<path class="st0" d="M32.3,134.3L1,116.3c-1.5-0.9-1.3-2.4,0.4-3.4l27.4-15.8c1.7-1,4.4-1.1,5.9-0.2l31.2,18
								c1.5,0.9,1.3,2.4-0.4,3.4l-27.4,15.8C36.4,135.1,33.8,135.2,32.3,134.3z"/>
							<polygon class="st39" points="54.9,119.3 52.9,118.9 54.1,91.4 54.9,91.5 				"/>
							<polygon class="st40" points="37.8,100.8 54.1,91.4 52.9,118.9 36.6,128.3 				"/>
							<path class="st41" d="M60.7,115.5L60.7,115.5c0,0.3-0.2,0.5-0.6,0.8l-5.2,3v-7.4l5.4,3.1C60.5,115.1,60.7,115.3,60.7,115.5z"/>
							
								<linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="-202.384" y1="92.2266" x2="-255.3799" y2="92.2266" gradientTransform="matrix(-1 0 0 1 -189.8495 0)">
								<stop  offset="0.3092" style="stop-color:#174E78"/>
								<stop  offset="0.3753" style="stop-color:#174F7A"/>
								<stop  offset="0.3991" style="stop-color:#175381"/>
								<stop  offset="0.416" style="stop-color:#18598C"/>
								<stop  offset="0.4167" style="stop-color:#18598D"/>
								<stop  offset="0.4275" style="stop-color:#195E96"/>
								<stop  offset="0.4595" style="stop-color:#1A6AAA"/>
								<stop  offset="0.4911" style="stop-color:#1B72B7"/>
								<stop  offset="0.5216" style="stop-color:#1B74BB"/>
								<stop  offset="0.8896" style="stop-color:#1A70B3"/>
								<stop  offset="0.9192" style="stop-color:#196BA9"/>
								<stop  offset="0.9692" style="stop-color:#185C8F"/>
								<stop  offset="1" style="stop-color:#17517B"/>
							</linearGradient>
							<path class="st42" d="M63.2,55.6l-2.5,59.9v0l-5.8-0.2V91.5l-10.8,6.2v7.9v9.4v10.4l-8,4.6c-0.7,0.4-1.7,0.4-2.3,0.1L6.7,114.5
								c-0.3-0.2-0.4-0.4-0.4-0.6L3.8,54L63.2,55.6z"/>
							<path class="st43" d="M62.9,60.9l-9.7-5.6l-40.5-1.1l-8.6,5l0.3,6.9l27.9,16.1c1.5,0.9,4.1,0.8,5.9-0.2l24.5-14.1L62.9,60.9z"/>
							
								<linearGradient id="SVGID_10_" gradientUnits="userSpaceOnUse" x1="2002.7572" y1="59.5911" x2="2067.1584" y2="59.5911" gradientTransform="matrix(1 0 0 1 -1995.066 0)">
								<stop  offset="0.3092" style="stop-color:#174E78"/>
								<stop  offset="0.3753" style="stop-color:#174F7A"/>
								<stop  offset="0.3991" style="stop-color:#175381"/>
								<stop  offset="0.416" style="stop-color:#18598C"/>
								<stop  offset="0.4167" style="stop-color:#18598D"/>
								<stop  offset="0.4275" style="stop-color:#195E96"/>
								<stop  offset="0.4595" style="stop-color:#1A6AAA"/>
								<stop  offset="0.4911" style="stop-color:#1B72B7"/>
								<stop  offset="0.5216" style="stop-color:#1B74BB"/>
								<stop  offset="0.8752" style="stop-color:#1A70B3"/>
								<stop  offset="0.9019" style="stop-color:#196BA9"/>
								<stop  offset="0.947" style="stop-color:#185C8F"/>
								<stop  offset="0.9748" style="stop-color:#17517B"/>
							</linearGradient>
							<path class="st44" d="M67,55.5l-3.4-0.1L34.7,40.8c-1.5-0.9-4.1-0.8-5.9,0.2L6.2,54.2L0,54l0,4.8h0c0,0.6,0.3,1.1,1,1.5l31.2,18
								c1.5,0.9,4.1,0.8,5.9-0.2l4.2-2.4l1.4-3l21.8-12.6c1-0.6,1.4-1.3,1.4-1.9h0V55.5z"/>
							<path class="st45" d="M1,55.5l31.2,18c1.5,0.9,4.1,0.8,5.9-0.2l27.4-15.8c1.7-1,1.9-2.5,0.4-3.4L65.8,54L34.9,36.1L34.7,36
								c-1.5-0.9-4.1-0.8-5.9,0.2L1.4,52.1C-0.3,53.1-0.5,54.6,1,55.5z"/>
							<path class="st46" d="M1.7,55.1l30.6,17.7c1.5,0.8,4.1,0.7,5.8-0.2L64.9,57c1.7-1,1.9-2.5,0.4-3.3l-0.2-0.1L34.9,36.1L34.7,36
								c-1.5-0.8-4.1-0.7-5.8,0.2L2.1,51.8C0.4,52.7,0.2,54.2,1.7,55.1z"/>
							
								<linearGradient id="SVGID_11_" gradientUnits="userSpaceOnUse" x1="-247.7351" y1="54.2733" x2="-188.9698" y2="54.2733" gradientTransform="matrix(-1 0 0 1 -189.8495 0)">
								<stop  offset="0.3092" style="stop-color:#134869"/>
								<stop  offset="0.407" style="stop-color:#134A69"/>
								<stop  offset="0.4167" style="stop-color:#134B69"/>
								<stop  offset="0.4451" style="stop-color:#154F74"/>
								<stop  offset="0.4917" style="stop-color:#175481"/>
								<stop  offset="0.5368" style="stop-color:#185685"/>
								<stop  offset="0.9579" style="stop-color:#195D93"/>
							</linearGradient>
							<path class="st47" d="M4.4,53.9c0,0.3,0.1,0.7,0.4,0.9L33.1,71c0.1,0.1,0.5,0.2,1.1,0.2c0.7,0,1.4-0.2,1.9-0.4l26.6-15.4
								c0.6-0.3,0.6-1.2,0-1.5L34.6,37.7c-0.9-0.5-2-0.5-2.9,0C25.8,41.1,4.4,53.6,4.4,53.9z"/>
							<path class="st45" d="M62.7,54.7L34.6,38.4c-0.9-0.5-2-0.5-2.9,0c-5.6,3.2-25.1,14.7-27.1,16c-0.1-0.2-0.2-0.4-0.2-0.6
								c0-0.2,21.4-12.7,27.3-16.2c0.9-0.5,2-0.5,2.9,0l28.1,16.2c0.4,0.2,0.5,0.7,0.4,1.1C63,54.9,62.9,54.8,62.7,54.7z"/>
							<path class="st43" d="M19.2,66l-5.9-3.4c-1.5-0.8-1.6-2.1-0.4-2.8l0.5-0.3L24.6,66l-0.5,0.3C22.8,66.9,20.6,66.8,19.2,66z"/>
						</g>
						<g>
							<path class="st48" d="M14.5,95.6c-0.1,0.1-0.1,0.3,0,0.4c0,0.1,0,0.1,0.1,0.1l4.1,2.4l-0.2-3.4l-2.6-1.5L14.5,95.6z"/>
							<path class="st48" d="M22.8,97.3l2.8,1.6c0.2,0.1,0.4,0.1,0.5,0.1l-1.8-3.9L22,95.5L22.8,97.3z"/>
							<path class="st48" d="M19.3,91.7l3.6,3l0.6-3.7l-0.9,0.2l-1.6-3.6c-0.3-0.7-0.8-1.2-1.3-1.5L17,84.5l3.2,7L19.3,91.7z"/>
							<path class="st48" d="M18.8,88.9l-1.5-3.3c-0.1-0.3-0.3-0.5-0.5-0.6c0,0,0,0,0,0c0,0-0.1,0-0.1,0l-1.9,2.6l2.6,3.3L18.8,88.9z"
								/>
							<path class="st48" d="M16.9,94.1l-1-4.6l-3.5-1.1l1,1.2l-0.9,1.3c-0.3,0.4-0.2,1,0,1.7l1.3,3.2l2.1-2.9L16.9,94.1z"/>
							<path class="st48" d="M21.5,96.9l-0.1-1.3L19,97.1l2.8,4.5l-0.1-1.3l2.6,1.5c0.5,0.3,1,0.2,1.2-0.1l1.1-1.9L21.5,96.9z"/>
						</g>
						<polygon class="st49" points="60.8,62.8 58.1,66.3 56.7,65.2 			"/>
						<polygon class="st49" points="53.1,67.3 50.4,70.8 49,69.6 			"/>
						<polygon class="st50" points="61.9,62.2 59.2,65.7 58.1,66.3 60.8,62.8 			"/>
						<polygon class="st50" points="54.2,66.6 51.5,70.1 50.4,70.8 53.1,67.3 			"/>
					</g>
					<g>
						<g>
							<path class="st18" d="M57.3,116.3c0-2.5,1.8-5.7,4-6.9c1.1-0.6,2.1-0.7,2.9-0.3l0,0l1.7,1.1l-5.9,9.7l-1.5-1v0
								C57.8,118.5,57.3,117.6,57.3,116.3z"/>
							<path class="st19" d="M59,117.4c0,2.5,1.8,3.6,4,2.3c2.2-1.3,4-4.4,4-6.9c0-2.5-1.8-3.6-4-2.3C60.8,111.7,59,114.8,59,117.4z"/>
						</g>
						<path class="st33" d="M60.1,116.7c0,1.8,1.3,2.6,2.9,1.6c1.6-0.9,2.9-3.1,2.9-5c0-1.8-1.3-2.6-2.9-1.6
							C61.4,112.7,60.1,114.9,60.1,116.7z"/>
					</g>
				</g>
				<g>
					<path class="st51" d="M63.5,51.3L63.5,51.3l-0.2,0.3c0,0.2-0.2,0.5-0.4,0.6c0,0,0,0,0,0l-0.1,0.1l-0.1,0.1l0,0h0l0,0L56,48.6
						l-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.3v0c0-0.3,0.2-0.7,0.5-0.8c0.1-0.1,0.2-0.1,0.3,0l0,0c0,0,0,0,0,0L63.5,51.3L63.5,51.3z"/>
					<path class="st52" d="M63.6,51.6C63.6,51.6,63.6,51.6,63.6,51.6L63.6,51.6c0,0.3-0.2,0.6-0.4,0.7l0,0c0,0-0.1,0-0.1,0.1
						c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0h0l0,0c-0.1-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0.1-0.3,0.2-0.6,0.5-0.7
						c0.1-0.1,0.2-0.1,0.3,0c0,0,0,0,0.1,0C63.6,51.4,63.6,51.5,63.6,51.6z"/>
					<path class="st53" d="M63.6,51.6c0,0.3-0.2,0.6-0.4,0.7c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0
						c0,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.1-0.1-0.3c0,0,0-0.1,0-0.1c0-0.3,0.2-0.5,0.4-0.6c0.1-0.1,0.2-0.1,0.3,0
						C63.6,51.4,63.6,51.5,63.6,51.6L63.6,51.6C63.6,51.6,63.6,51.6,63.6,51.6z"/>
				</g>
				<g>
					<path class="st51" d="M45.9,41.3L45.9,41.3l-0.2,0.3c0,0.2-0.2,0.5-0.4,0.6c0,0,0,0,0,0l-0.1,0.1l-0.1,0.1l0,0h0l0,0l-6.8-3.8
						l-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.3v0c0-0.3,0.2-0.7,0.5-0.8c0.1-0.1,0.2-0.1,0.3,0l0,0c0,0,0,0,0,0L45.9,41.3L45.9,41.3z"/>
					<path class="st52" d="M46,41.6C46,41.6,46,41.6,46,41.6L46,41.6c0,0.3-0.2,0.6-0.4,0.7l0,0c0,0-0.1,0-0.1,0.1
						c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0h0l0,0c-0.1-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0.1-0.3,0.2-0.6,0.5-0.7
						c0.1-0.1,0.2-0.1,0.3,0c0,0,0,0,0.1,0C46,41.4,46,41.5,46,41.6z"/>
					<path class="st53" d="M46,41.6c0,0.3-0.2,0.6-0.4,0.7c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0
						c0,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.1-0.1-0.3c0,0,0-0.1,0-0.1c0-0.3,0.2-0.5,0.4-0.6c0.1-0.1,0.2-0.1,0.3,0C46,41.4,46,41.5,46,41.6
						L46,41.6C46,41.6,46,41.6,46,41.6z"/>
				</g>
			</g>
		{:else if  type === "vidrio"}
			<g id="vidrio">
				<g>
					<g>
						<path class="st54" d="M32.3,134.3L1,116.3c-1.5-0.9-1.3-2.4,0.4-3.4l27.4-15.8c1.7-1,4.4-1.1,5.9-0.2l31.2,18
							c1.5,0.9,1.3,2.4-0.4,3.4l-27.4,15.8C36.4,135.1,33.8,135.2,32.3,134.3z"/>
						<polygon class="st55" points="54.9,119.3 52.9,118.9 54.1,91.4 54.9,91.5 			"/>
						
							<linearGradient id="SVGID_12_" gradientUnits="userSpaceOnUse" x1="-67.1429" y1="53.3052" x2="-63.1972" y2="53.3052" gradientTransform="matrix(1 0 0 1 129.6298 0)">
							<stop  offset="8.675500e-02" style="stop-color:#EAEAEA"/>
							<stop  offset="0.8152" style="stop-color:#E9E9E9"/>
						</linearGradient>
						<polygon class="st56" points="66.4,50.8 66.4,55.8 64.6,54.9 62.5,51.9 			"/>
						<polygon class="st57" points="37.8,100.8 54.1,91.4 52.9,118.9 36.6,128.3 			"/>
						
							<linearGradient id="SVGID_13_" gradientUnits="userSpaceOnUse" x1="-71.3456" y1="114.7314" x2="-127.6616" y2="114.7314" gradientTransform="matrix(1 0 0 1 129.6298 0)">
							<stop  offset="0.3092" style="stop-color:#E7E7E7"/>
							<stop  offset="0.4153" style="stop-color:#E9E9E9"/>
							<stop  offset="0.4167" style="stop-color:#E9E9E9"/>
							<stop  offset="0.5216" style="stop-color:#ECECEC"/>
							<stop  offset="0.8752" style="stop-color:#EBEBEB"/>
							<stop  offset="0.9748" style="stop-color:#E7E7E7"/>
						</linearGradient>
						<path class="st58" d="M33.1,99.3l11,6.4v19.9l-8,4.6c-0.7,0.4-1.7,0.4-2.3,0.1L6.7,114.5c-0.3-0.2-0.4-0.4-0.4-0.6
							c0-0.3,0.2-0.6,0.6-0.8l24-13.9C31.5,99,32.5,98.9,33.1,99.3z"/>
						<path class="st59" d="M60.7,115.5L60.7,115.5c0,0.3-0.2,0.5-0.6,0.8l-5.2,3v-7.4l5.4,3.1C60.5,115.1,60.7,115.3,60.7,115.5z"/>
						
							<linearGradient id="SVGID_14_" gradientUnits="userSpaceOnUse" x1="-71.3455" y1="84.7844" x2="-127.6615" y2="84.7844" gradientTransform="matrix(1 0 0 1 129.6298 0)">
							<stop  offset="0.3092" style="stop-color:#E7E7E7"/>
							<stop  offset="0.4153" style="stop-color:#E9E9E9"/>
							<stop  offset="0.4167" style="stop-color:#E9E9E9"/>
							<stop  offset="0.5216" style="stop-color:#ECECEC"/>
							<stop  offset="0.8896" style="stop-color:#EBEBEB"/>
							<stop  offset="1" style="stop-color:#E7E7E7"/>
						</linearGradient>
						<polygon class="st60" points="63.2,55.6 60.7,115.5 60.7,115.5 54.9,115.4 54.9,91.5 44.1,97.7 44.1,115.1 6.3,114 3.8,54 			"/>
						<path class="st57" d="M62.9,60.9l-9.7-5.6l-40.5-1.1l-8.6,5l0.3,6.9l27.9,16.1c1.5,0.9,4.1,0.8,5.9-0.2l24.5-14.1L62.9,60.9z"/>
						
							<linearGradient id="SVGID_15_" gradientUnits="userSpaceOnUse" x1="-132.8677" y1="59.5911" x2="-68.4666" y2="59.5911" gradientTransform="matrix(1 0 0 1 129.6298 0)">
							<stop  offset="2.126530e-02" style="stop-color:#EAEAEA"/>
							<stop  offset="7.769930e-02" style="stop-color:#EBEBEB"/>
							<stop  offset="0.4784" style="stop-color:#ECECEC"/>
							<stop  offset="0.5833" style="stop-color:#E9E9E9"/>
							<stop  offset="0.5847" style="stop-color:#E9E9E9"/>
							<stop  offset="0.6908" style="stop-color:#E7E7E7"/>
						</linearGradient>
						<path class="st61" d="M67,55.5l-3.4-0.1L34.7,40.8c-1.5-0.9-4.1-0.8-5.9,0.2L6.2,54.2L0,54v4.8h0c0,0.6,0.3,1.1,1,1.5l31.2,18
							c1.5,0.9,4.1,0.8,5.9-0.2l4.2-2.4l1.4-3l21.8-12.6c1-0.6,1.4-1.3,1.4-1.9h0V55.5z"/>
						<g>
							<g>
								<g>
									<g>
										<path class="st59" d="M46.7,0.1l28.6,16.4c0.1,0.1,0.4,0.3,0.6,0.8c0.2,0.5,0.3,1.1,0.2,1.6L68,53.2
											c-0.1,0.6-1.1,3.1-1.6,2.8L37.9,37.5c-0.1-0.1-0.4-0.3-0.5-0.8c-0.2-0.5-0.3-1.1-0.2-1.6l7.9-34.4
											C45.3,0.2,46.1-0.2,46.7,0.1z"/>
										<path class="st62" d="M45,0.1l28.6,16.4c0.1,0.1,0.4,0.3,0.6,0.8c0.2,0.5,0.3,1.1,0.2,1.6l-7.9,34.4c-0.1,0.6-1,1-1.5,0.7
											L36.3,37.5c-0.1-0.1-0.4-0.3-0.5-0.8c-0.2-0.5-0.3-1.1-0.2-1.6l7.9-34.4C43.7,0.2,44.5-0.2,45,0.1z"/>
										<path class="st63" d="M1,55.5l31.2,18c1.5,0.9,4.1,0.8,5.9-0.2l27.4-15.8c1.7-1,1.9-2.5,0.4-3.4L65.8,54L34.9,36.1L34.7,36
											c-1.5-0.9-4.1-0.8-5.9,0.2L1.4,52.1C-0.3,53.1-0.5,54.6,1,55.5z"/>
										<path class="st64" d="M1.7,55.1l30.6,17.7c1.5,0.8,4.1,0.7,5.8-0.2L64.9,57c1.7-1,1.9-2.5,0.4-3.3l-0.2-0.1L34.9,36.1
											L34.7,36c-1.5-0.8-4.1-0.7-5.8,0.2L2.1,51.8C0.4,52.7,0.2,54.2,1.7,55.1z"/>
										
											<linearGradient id="SVGID_16_" gradientUnits="userSpaceOnUse" x1="2049.6353" y1="54.0276" x2="2108.4006" y2="54.0276" gradientTransform="matrix(-1 0 0 1 2114.4783 0)">
											<stop  offset="4.207150e-02" style="stop-color:#EBEBEB"/>
											<stop  offset="0.4632" style="stop-color:#EAEAEA"/>
											<stop  offset="0.5833" style="stop-color:#E6E6E6"/>
											<stop  offset="0.5985" style="stop-color:#E6E6E6"/>
											<stop  offset="0.6908" style="stop-color:#E6E6E6"/>
										</linearGradient>
										<path class="st65" d="M4.1,53.6c0,0.3,0.1,0.7,0.4,0.9l28.3,16.3C33,70.9,33.4,71,34,71c0.7,0,1.4-0.2,1.9-0.4l26.6-15.4
											c0.6-0.3,0.6-1.2,0-1.5L34.3,37.4c-0.9-0.5-2-0.5-2.9,0C25.5,40.9,4.1,53.4,4.1,53.6z"/>
										<path class="st63" d="M31.4,38.2c0.9-0.5,2-0.5,2.9,0l28.1,16.2c0.2,0.1,0.3,0.2,0.3,0.4c0.2-0.4,0.1-0.9-0.3-1.1L34.3,37.4
											c-0.9-0.5-2-0.5-2.9,0C25.5,40.9,4.1,53.4,4.1,53.6c0,0.2,0,0.4,0.2,0.6C6.3,52.8,25.8,41.4,31.4,38.2z"/>
										<path class="st57" d="M19.2,66l-5.9-3.4c-1.5-0.8-1.6-2.1-0.4-2.8l0.5-0.3L24.6,66l-0.5,0.3C22.8,66.9,20.6,66.8,19.2,66z"/>
									</g>
								</g>
							</g>
							<g>
								<path class="st66" d="M63.5,51.3L63.5,51.3l-0.2,0.3c0,0.2-0.2,0.5-0.4,0.6c0,0,0,0,0,0l-0.1,0.1l-0.1,0.1l0,0h0l0,0L56,48.6
									l-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.3v0c0-0.3,0.2-0.7,0.5-0.8c0.1-0.1,0.2-0.1,0.3,0l0,0c0,0,0,0,0,0L63.5,51.3L63.5,51.3z"/>
								<path class="st67" d="M63.6,51.6C63.6,51.6,63.6,51.6,63.6,51.6L63.6,51.6c0,0.3-0.2,0.6-0.4,0.7l0,0c0,0-0.1,0-0.1,0.1
									c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0h0l0,0c-0.1-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0.1-0.3,0.2-0.6,0.5-0.7
									c0.1-0.1,0.2-0.1,0.3,0c0,0,0,0,0.1,0C63.6,51.4,63.6,51.5,63.6,51.6z"/>
								<path class="st68" d="M63.6,51.6c0,0.3-0.2,0.6-0.4,0.7c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0
									c0,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.1-0.1-0.3c0,0,0-0.1,0-0.1c0-0.3,0.2-0.5,0.4-0.6c0.1-0.1,0.2-0.1,0.3,0
									C63.6,51.4,63.6,51.5,63.6,51.6L63.6,51.6C63.6,51.6,63.6,51.6,63.6,51.6z"/>
							</g>
							<g>
								<path class="st66" d="M45.9,41.3L45.9,41.3l-0.2,0.3c0,0.2-0.2,0.5-0.4,0.6c0,0,0,0,0,0l-0.1,0.1l-0.1,0.1l0,0h0l0,0l-6.8-3.8
									l-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.3v0c0-0.3,0.2-0.7,0.5-0.8c0.1-0.1,0.2-0.1,0.3,0l0,0c0,0,0,0,0,0L45.9,41.3L45.9,41.3z"/>
								<path class="st67" d="M46,41.6C46,41.6,46,41.6,46,41.6L46,41.6c0,0.3-0.2,0.6-0.4,0.7l0,0c0,0-0.1,0-0.1,0.1
									c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0h0l0,0c-0.1-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0.1-0.3,0.2-0.6,0.5-0.7
									c0.1-0.1,0.2-0.1,0.3,0c0,0,0,0,0.1,0C46,41.4,46,41.5,46,41.6z"/>
								<path class="st68" d="M46,41.6c0,0.3-0.2,0.6-0.4,0.7c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0
									c0,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.1-0.1-0.3c0,0,0-0.1,0-0.1c0-0.3,0.2-0.5,0.4-0.6c0.1-0.1,0.2-0.1,0.3,0
									C46,41.4,46,41.5,46,41.6L46,41.6C46,41.6,46,41.6,46,41.6z"/>
							</g>
						</g>
					</g>
					<g>
						<path class="st69" d="M14.5,95.6c-0.1,0.1-0.1,0.3,0,0.4c0,0.1,0,0.1,0.1,0.1l4.1,2.4l-0.2-3.4l-2.6-1.5L14.5,95.6z"/>
						<path class="st69" d="M22.8,97.3l2.8,1.6c0.2,0.1,0.4,0.1,0.5,0.1l-1.8-3.9L22,95.5L22.8,97.3z"/>
						<path class="st69" d="M19.3,91.7l3.6,3l0.6-3.7l-0.9,0.2l-1.6-3.6c-0.3-0.7-0.8-1.2-1.3-1.5L17,84.5l3.2,7L19.3,91.7z"/>
						<path class="st69" d="M18.8,88.9l-1.5-3.3c-0.1-0.3-0.3-0.5-0.5-0.6c0,0,0,0,0,0c0,0-0.1,0-0.1,0l-1.9,2.6l2.6,3.3L18.8,88.9z"/>
						<path class="st69" d="M16.9,94.1l-1-4.6l-3.5-1.1l1,1.2l-0.9,1.3c-0.3,0.4-0.2,1,0,1.7l1.3,3.2l2.1-2.9L16.9,94.1z"/>
						<path class="st69" d="M21.5,96.9l-0.1-1.3L19,97.1l2.8,4.5l-0.1-1.3l2.6,1.5c0.5,0.3,1,0.2,1.2-0.1l1.1-1.9L21.5,96.9z"/>
					</g>
				</g>
				<g>
					<g>
						<path class="st18" d="M57.3,116.3c0-2.5,1.8-5.7,4-6.9c1.1-0.6,2.1-0.7,2.9-0.3l0,0l1.7,1.1l-5.9,9.7l-1.5-1v0
							C57.8,118.5,57.3,117.6,57.3,116.3z"/>
						<path class="st19" d="M59,117.4c0,2.5,1.8,3.6,4,2.3c2.2-1.3,4-4.4,4-6.9c0-2.5-1.8-3.6-4-2.3C60.8,111.7,59,114.8,59,117.4z"/>
					</g>
					<path class="st20" d="M60.1,116.7c0,1.8,1.3,2.6,2.9,1.6c1.6-0.9,2.9-3.1,2.9-5c0-1.8-1.3-2.6-2.9-1.6
						C61.4,112.7,60.1,114.9,60.1,116.7z"/>
				</g>
			</g>
		{:else if  type === "peligrosos"}
			<g id="peligrosos">
				<g>
					<g>
						<path class="st0" d="M32.3,134.3L1,116.3c-1.5-0.9-1.3-2.4,0.4-3.4l27.4-15.8c1.7-1,4.4-1.1,5.9-0.2l31.2,18
							c1.5,0.9,1.3,2.4-0.4,3.4l-27.4,15.8C36.4,135.1,33.8,135.2,32.3,134.3z"/>
						<polygon class="st70" points="54.9,119.3 52.9,118.9 54.1,91.4 54.9,91.5 			"/>
						
							<linearGradient id="SVGID_17_" gradientUnits="userSpaceOnUse" x1="-67.1429" y1="53.3052" x2="-63.1972" y2="53.3052" gradientTransform="matrix(1 0 0 1 129.6298 0)">
							<stop  offset="8.675500e-02" style="stop-color:#D7142D"/>
							<stop  offset="0.8152" style="stop-color:#B1141D"/>
						</linearGradient>
						<polygon class="st71" points="66.4,50.8 66.4,55.8 64.6,54.9 62.5,51.9 			"/>
						<polygon class="st72" points="37.8,100.8 54.1,91.4 52.9,118.9 36.6,128.3 			"/>
						
							<linearGradient id="SVGID_18_" gradientUnits="userSpaceOnUse" x1="-71.3456" y1="114.7314" x2="-127.6616" y2="114.7314" gradientTransform="matrix(1 0 0 1 129.6298 0)">
							<stop  offset="0.3092" style="stop-color:#A6011C"/>
							<stop  offset="0.3767" style="stop-color:#A7031C"/>
							<stop  offset="0.4009" style="stop-color:#AB0A1C"/>
							<stop  offset="0.4167" style="stop-color:#B1141D"/>
							<stop  offset="0.4305" style="stop-color:#BD1921"/>
							<stop  offset="0.4615" style="stop-color:#D12129"/>
							<stop  offset="0.4921" style="stop-color:#DE252D"/>
							<stop  offset="0.5216" style="stop-color:#E2272F"/>
							<stop  offset="0.8752" style="stop-color:#DE202E"/>
							<stop  offset="0.9026" style="stop-color:#D41B2B"/>
							<stop  offset="0.949" style="stop-color:#BA0D22"/>
							<stop  offset="0.9748" style="stop-color:#A8041C"/>
						</linearGradient>
						<path class="st73" d="M33.1,99.3l11,6.4v19.9l-8,4.6c-0.7,0.4-1.7,0.4-2.3,0.1L6.7,114.5c-0.3-0.2-0.4-0.4-0.4-0.6
							c0-0.3,0.2-0.6,0.6-0.8l24-13.9C31.5,99,32.5,98.9,33.1,99.3z"/>
						<path class="st74" d="M60.7,115.5L60.7,115.5c0,0.3-0.2,0.5-0.6,0.8l-5.2,3v-7.4l5.4,3.1C60.5,115.1,60.7,115.3,60.7,115.5z"/>
						
							<linearGradient id="SVGID_19_" gradientUnits="userSpaceOnUse" x1="-71.3455" y1="84.7844" x2="-127.6615" y2="84.7844" gradientTransform="matrix(1 0 0 1 129.6298 0)">
							<stop  offset="0.3092" style="stop-color:#A6011C"/>
							<stop  offset="0.3767" style="stop-color:#A7031C"/>
							<stop  offset="0.4009" style="stop-color:#AB0A1C"/>
							<stop  offset="0.4167" style="stop-color:#B1141D"/>
							<stop  offset="0.4305" style="stop-color:#BD1921"/>
							<stop  offset="0.4615" style="stop-color:#D12129"/>
							<stop  offset="0.4921" style="stop-color:#DE252D"/>
							<stop  offset="0.5216" style="stop-color:#E2272F"/>
							<stop  offset="0.8896" style="stop-color:#DE202E"/>
							<stop  offset="0.92" style="stop-color:#D41B2B"/>
							<stop  offset="0.9714" style="stop-color:#BA0D22"/>
							<stop  offset="1" style="stop-color:#A8041C"/>
						</linearGradient>
						<polygon class="st75" points="63.2,55.6 60.7,115.5 60.7,115.5 54.9,115.4 54.9,91.5 44.1,97.7 44.1,115.1 6.3,114 3.8,54 			"/>
						<path class="st72" d="M62.9,60.9l-9.7-5.6l-40.5-1.1l-8.6,5l0.3,6.9l27.9,16.1c1.5,0.9,4.1,0.8,5.9-0.2l24.5-14.1L62.9,60.9z"/>
						
							<linearGradient id="SVGID_20_" gradientUnits="userSpaceOnUse" x1="-132.8677" y1="59.5911" x2="-68.4666" y2="59.5911" gradientTransform="matrix(1 0 0 1 129.6298 0)">
							<stop  offset="2.126530e-02" style="stop-color:#BB261E"/>
							<stop  offset="5.608831e-02" style="stop-color:#D42229"/>
							<stop  offset="7.769930e-02" style="stop-color:#DE202E"/>
							<stop  offset="0.4784" style="stop-color:#E2272F"/>
							<stop  offset="0.5079" style="stop-color:#DE252D"/>
							<stop  offset="0.5385" style="stop-color:#D12129"/>
							<stop  offset="0.5695" style="stop-color:#BD1921"/>
							<stop  offset="0.5833" style="stop-color:#B1141D"/>
							<stop  offset="0.5991" style="stop-color:#AB0A1C"/>
							<stop  offset="0.6233" style="stop-color:#A7031C"/>
							<stop  offset="0.6908" style="stop-color:#A6011C"/>
						</linearGradient>
						<path class="st76" d="M67,55.5l-3.4-0.1L34.7,40.8c-1.5-0.9-4.1-0.8-5.9,0.2L6.2,54.2L0,54v4.8h0c0,0.6,0.3,1.1,1,1.5l31.2,18
							c1.5,0.9,4.1,0.8,5.9-0.2l4.2-2.4l1.4-3l21.8-12.6c1-0.6,1.4-1.3,1.4-1.9h0V55.5z"/>
						<g>
							<g>
								<g>
									<g>
										<path class="st74" d="M46.7,0.1l28.6,16.4c0.1,0.1,0.4,0.3,0.6,0.8c0.2,0.5,0.3,1.1,0.2,1.6L68,53.2
											c-0.1,0.6-1.1,3.1-1.6,2.8L37.9,37.5c-0.1-0.1-0.4-0.3-0.5-0.8c-0.2-0.5-0.3-1.1-0.2-1.6l7.9-34.4
											C45.3,0.2,46.1-0.2,46.7,0.1z"/>
										<path class="st77" d="M45,0.1l28.6,16.4c0.1,0.1,0.4,0.3,0.6,0.8c0.2,0.5,0.3,1.1,0.2,1.6l-7.9,34.4c-0.1,0.6-1,1-1.5,0.7
											L36.3,37.5c-0.1-0.1-0.4-0.3-0.5-0.8c-0.2-0.5-0.3-1.1-0.2-1.6l7.9-34.4C43.7,0.2,44.5-0.2,45,0.1z"/>
										<path class="st78" d="M1,55.5l31.2,18c1.5,0.9,4.1,0.8,5.9-0.2l27.4-15.8c1.7-1,1.9-2.5,0.4-3.4L65.8,54L34.9,36.1L34.7,36
											c-1.5-0.9-4.1-0.8-5.9,0.2L1.4,52.1C-0.3,53.1-0.5,54.6,1,55.5z"/>
										<path class="st79" d="M1.7,55.1l30.6,17.7c1.5,0.8,4.1,0.7,5.8-0.2L64.9,57c1.7-1,1.9-2.5,0.4-3.3l-0.2-0.1L34.9,36.1
											L34.7,36c-1.5-0.8-4.1-0.7-5.8,0.2L2.1,51.8C0.4,52.7,0.2,54.2,1.7,55.1z"/>
										
											<linearGradient id="SVGID_21_" gradientUnits="userSpaceOnUse" x1="2049.6353" y1="54.0276" x2="2108.4006" y2="54.0276" gradientTransform="matrix(-1 0 0 1 2114.4783 0)">
											<stop  offset="4.207150e-02" style="stop-color:#CB1E27"/>
											<stop  offset="0.4632" style="stop-color:#C91D26"/>
											<stop  offset="0.5012" style="stop-color:#C51A24"/>
											<stop  offset="0.5406" style="stop-color:#B8111F"/>
											<stop  offset="0.5805" style="stop-color:#A40117"/>
											<stop  offset="0.5833" style="stop-color:#A20016"/>
											<stop  offset="0.5985" style="stop-color:#A00017"/>
											<stop  offset="0.6908" style="stop-color:#9E0017"/>
										</linearGradient>
										<path class="st80" d="M4.1,53.6c0,0.3,0.1,0.7,0.4,0.9l28.3,16.3C33,70.9,33.4,71,34,71c0.7,0,1.4-0.2,1.9-0.4l26.6-15.4
											c0.6-0.3,0.6-1.2,0-1.5L34.3,37.4c-0.9-0.5-2-0.5-2.9,0C25.5,40.9,4.1,53.4,4.1,53.6z"/>
										<path class="st78" d="M31.4,38.2c0.9-0.5,2-0.5,2.9,0l28.1,16.2c0.2,0.1,0.3,0.2,0.3,0.4c0.2-0.4,0.1-0.9-0.3-1.1L34.3,37.4
											c-0.9-0.5-2-0.5-2.9,0C25.5,40.9,4.1,53.4,4.1,53.6c0,0.2,0,0.4,0.2,0.6C6.3,52.8,25.8,41.4,31.4,38.2z"/>
										<path class="st72" d="M19.2,66l-5.9-3.4c-1.5-0.8-1.6-2.1-0.4-2.8l0.5-0.3L24.6,66l-0.5,0.3C22.8,66.9,20.6,66.8,19.2,66z"/>
									</g>
								</g>
							</g>
							<g>
								<path class="st81" d="M63.5,51.3L63.5,51.3l-0.2,0.3c0,0.2-0.2,0.5-0.4,0.6c0,0,0,0,0,0l-0.1,0.1l-0.1,0.1l0,0h0l0,0L56,48.6
									l-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.3v0c0-0.3,0.2-0.7,0.5-0.8c0.1-0.1,0.2-0.1,0.3,0l0,0c0,0,0,0,0,0L63.5,51.3L63.5,51.3z"/>
								<path class="st82" d="M63.6,51.6C63.6,51.6,63.6,51.6,63.6,51.6L63.6,51.6c0,0.3-0.2,0.6-0.4,0.7l0,0c0,0-0.1,0-0.1,0.1
									c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0h0l0,0c-0.1-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0.1-0.3,0.2-0.6,0.5-0.7
									c0.1-0.1,0.2-0.1,0.3,0c0,0,0,0,0.1,0C63.6,51.4,63.6,51.5,63.6,51.6z"/>
								<path class="st83" d="M63.6,51.6c0,0.3-0.2,0.6-0.4,0.7c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0
									c0,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.1-0.1-0.3c0,0,0-0.1,0-0.1c0-0.3,0.2-0.5,0.4-0.6c0.1-0.1,0.2-0.1,0.3,0
									C63.6,51.4,63.6,51.5,63.6,51.6L63.6,51.6C63.6,51.6,63.6,51.6,63.6,51.6z"/>
							</g>
							<g>
								<path class="st81" d="M45.9,41.3L45.9,41.3l-0.2,0.3c0,0.2-0.2,0.5-0.4,0.6c0,0,0,0,0,0l-0.1,0.1l-0.1,0.1l0,0h0l0,0l-6.8-3.8
									l-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.3v0c0-0.3,0.2-0.7,0.5-0.8c0.1-0.1,0.2-0.1,0.3,0l0,0c0,0,0,0,0,0L45.9,41.3L45.9,41.3z"/>
								<path class="st82" d="M46,41.6C46,41.6,46,41.6,46,41.6L46,41.6c0,0.3-0.2,0.6-0.4,0.7l0,0c0,0-0.1,0-0.1,0.1
									c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0h0l0,0c-0.1-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0.1-0.3,0.2-0.6,0.5-0.7
									c0.1-0.1,0.2-0.1,0.3,0c0,0,0,0,0.1,0C46,41.4,46,41.5,46,41.6z"/>
								<path class="st83" d="M46,41.6c0,0.3-0.2,0.6-0.4,0.7c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0
									c0,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.1-0.1-0.3c0,0,0-0.1,0-0.1c0-0.3,0.2-0.5,0.4-0.6c0.1-0.1,0.2-0.1,0.3,0
									C46,41.4,46,41.5,46,41.6L46,41.6C46,41.6,46,41.6,46,41.6z"/>
							</g>
						</g>
					</g>
					<polygon class="st84" points="60.8,62.8 58.1,66.3 56.7,65.2 		"/>
					<polygon class="st84" points="53.1,67.3 50.4,70.8 49,69.6 		"/>
					<polygon class="st85" points="61.9,62.2 59.2,65.7 58.1,66.3 60.8,62.8 		"/>
					<polygon class="st85" points="54.2,66.6 51.5,70.1 50.4,70.8 53.1,67.3 		"/>
					<g>
						<path class="st86" d="M25.6,100.6c-1.9,1.2-4.8-0.1-6-1.1c-0.4-0.3-0.8-0.8-1.1-1.1c-0.2,0.1-0.5,0.3-0.8,0.4
							c-2,0.5-4.5-0.6-6.1-2.5c-0.3-0.4-0.2-0.3,0.2,0.1c1.3,1.2,3,1.9,4.3,1.5c0.6-0.1,1-0.4,1.3-0.8c0.6-0.7,0.7-1.9,0.3-3.1
							c-0.1-0.2-0.2-0.4-0.3-0.7c0,0,0.4-0.1,0.4-0.1c0.1,0.2,0.3,0.4,0.6,0.5c0.2,0.1,0.4,0,0.5-0.1c0.1,0.1,0.3,0.3,0.4,0.3
							c0,0,0,0,0,0c-0.1,0.1-0.2,0.3-0.3,0.5c-0.4,0.9-0.2,2.1,0.4,3.3c0.4,0.6,0.9,1.3,1.5,1.8C22,100.3,24,100.9,25.6,100.6z"/>
						<path class="st86" d="M26.8,98.6c-0.1,0.4-0.1,0.5-0.1,0.2c0.3-1.4-0.5-3.3-2.1-4.5c-0.5-0.4-1.1-0.8-1.6-1
							c-1.3-0.5-2.5-0.4-3.3,0.2c-0.1,0.1-0.2,0.2-0.3,0.3c0,0-0.3-0.3-0.4-0.3c0-0.1,0-0.1,0-0.2c0-0.3-0.3-0.7-0.6-0.9
							c0,0,0-0.2,0-0.3l0,0c0.2,0.1,0.4,0.1,0.6,0.2c1.3,0.2,2.4-0.1,2.9-1c0.3-0.4,0.4-0.9,0.4-1.5c0-1.5-1-3.2-2.5-4.3
							c-0.4-0.3-0.3-0.2,0.2,0.1c2,1.3,3.4,3.6,3.4,5.6c0,0.3,0,0.6-0.1,0.9c0.2,0.2,0.5,0.3,0.7,0.5C26.2,94.3,27.2,96.7,26.8,98.6z"
							/>
						<path class="st86" d="M18.3,92.4c-0.3-0.1-0.6,0.1-0.6,0.4c0,0.1,0,0.2,0.1,0.3c0,0-0.4,0-0.4,0c-0.1-0.2-0.2-0.3-0.3-0.5
							c-0.8-1.1-1.9-1.9-3-2.3c-0.7-0.2-1.4-0.3-2.1-0.1c-1.4,0.3-2,1.5-1.8,2.9c0.1,0.5,0.1,0.7,0,0.2c-0.6-2.1,0.3-4,2.2-4.5
							c0.4-0.1,0.8-0.1,1.1-0.1c-0.1-0.3-0.1-0.7-0.1-1c0-1.9,1.2-3.1,3-3.3c0.1,0,0.2,0,0.3,0c0.5,0,0.5,0,0,0.1
							c-1.2,0.2-2.1,1.1-2.1,2.5c0,0.6,0.2,1.3,0.5,1.9c0.6,1.1,1.5,2.1,2.7,2.7c0.2,0.1,0.4,0.2,0.7,0.3
							C18.3,92.1,18.3,92.3,18.3,92.4z"/>
						<path class="st86" d="M18.4,89.1c-2.4-0.8-4.3,0.3-4.3,2.5c0,2.2,1.9,4.6,4.3,5.5c2.4,0.8,4.3-0.3,4.3-2.5
							C22.7,92.3,20.8,89.9,18.4,89.1z M18.4,95.9c-1.7-0.6-3-2.3-3-3.8c0-1.5,1.3-2.3,3-1.8c1.7,0.6,3,2.3,3,3.8
							C21.4,95.6,20.1,96.4,18.4,95.9z"/>
					</g>
				</g>
				<g>
					<g>
						<path class="st18" d="M57.3,116.3c0-2.5,1.8-5.7,4-6.9c1.1-0.6,2.1-0.7,2.9-0.3l0,0l1.7,1.1l-5.9,9.7l-1.5-1v0
							C57.8,118.5,57.3,117.6,57.3,116.3z"/>
						<path class="st19" d="M59,117.4c0,2.5,1.8,3.6,4,2.3c2.2-1.3,4-4.4,4-6.9c0-2.5-1.8-3.6-4-2.3C60.8,111.7,59,114.8,59,117.4z"/>
					</g>
					<path class="st20" d="M60.1,116.7c0,1.8,1.3,2.6,2.9,1.6c1.6-0.9,2.9-3.1,2.9-5c0-1.8-1.3-2.6-2.9-1.6
						C61.4,112.7,60.1,114.9,60.1,116.7z"/>
				</g>
			</g>
		{:else if  type === "organicos"}
			<g id="organicos">
				<g>
					<g>
						<g>
							<path class="st87" d="M46.7,0.1l28.6,16.4c0.1,0.1,0.4,0.3,0.6,0.8c0.2,0.5,0.3,1.1,0.2,1.6L68,53.2c-0.1,0.6-1.1,3.1-1.6,2.8
								L37.9,37.5c-0.1-0.1-0.4-0.3-0.5-0.8c-0.2-0.5-0.3-1.1-0.2-1.6l7.9-34.4C45.3,0.2,46.1-0.2,46.7,0.1z"/>
							<path class="st88" d="M45,0.1l28.6,16.4c0.1,0.1,0.4,0.3,0.6,0.8c0.2,0.5,0.3,1.1,0.2,1.6l-7.9,34.4c-0.1,0.6-1,1-1.5,0.7
								L36.3,37.5c-0.1-0.1-0.4-0.3-0.5-0.8c-0.2-0.5-0.3-1.1-0.2-1.6l7.9-34.4C43.7,0.2,44.5-0.2,45,0.1z"/>
							<path class="st89" d="M32.3,134.3L1,116.3c-1.5-0.9-1.3-2.4,0.4-3.4l27.4-15.8c1.7-1,4.4-1.1,5.9-0.2l31.2,18
								c1.5,0.9,1.3,2.4-0.4,3.4l-27.4,15.8C36.4,135.1,33.8,135.2,32.3,134.3z"/>
							<polygon class="st90" points="54.9,119.3 52.9,118.9 54.1,91.4 54.9,91.5 				"/>
							<polygon class="st91" points="37.8,100.8 54.1,91.4 52.9,118.9 36.6,128.3 				"/>
							<path class="st92" d="M60.7,115.5L60.7,115.5c0,0.3-0.2,0.5-0.6,0.8l-5.2,3v-7.4l5.4,3.1C60.5,115.1,60.7,115.3,60.7,115.5z"/>
							
								<linearGradient id="SVGID_22_" gradientUnits="userSpaceOnUse" x1="-43.8351" y1="92.2266" x2="-96.831" y2="92.2266" gradientTransform="matrix(-1 0 0 1 -31.3006 0)">
								<stop  offset="0.3092" style="stop-color:#998F80"/>
								<stop  offset="0.3753" style="stop-color:#9B9182"/>
								<stop  offset="0.3991" style="stop-color:#A09887"/>
								<stop  offset="0.416" style="stop-color:#AAA391"/>
								<stop  offset="0.4167" style="stop-color:#ABA492"/>
								<stop  offset="0.4512" style="stop-color:#BCB7A2"/>
								<stop  offset="0.487" style="stop-color:#C7C4AD"/>
								<stop  offset="0.5216" style="stop-color:#CBC8B0"/>
								<stop  offset="0.8896" style="stop-color:#C6C1AB"/>
								<stop  offset="1" style="stop-color:#C6BCAB"/>
							</linearGradient>
							<path class="st93" d="M63.2,55.6l-2.5,59.9v0l-5.8-0.2V91.5l-10.8,6.2v7.9v9.4v10.4l-8,4.6c-0.7,0.4-1.7,0.4-2.3,0.1L6.7,114.5
								c-0.3-0.2-0.4-0.4-0.4-0.6L3.8,54L63.2,55.6z"/>
							<path class="st94" d="M62.9,60.9l-9.7-5.6l-40.5-1.1l-8.6,5l0.3,6.9l27.9,16.1c1.5,0.9,4.1,0.8,5.9-0.2l24.5-14.1L62.9,60.9z"/>
							
								<linearGradient id="SVGID_23_" gradientUnits="userSpaceOnUse" x1="1844.2083" y1="59.5911" x2="1908.6094" y2="59.5911" gradientTransform="matrix(1 0 0 1 -1836.5171 0)">
								<stop  offset="0.3092" style="stop-color:#998F80"/>
								<stop  offset="0.3753" style="stop-color:#9B9182"/>
								<stop  offset="0.3991" style="stop-color:#A09887"/>
								<stop  offset="0.416" style="stop-color:#AAA391"/>
								<stop  offset="0.4167" style="stop-color:#ABA492"/>
								<stop  offset="0.4512" style="stop-color:#BCB7A2"/>
								<stop  offset="0.487" style="stop-color:#C7C4AD"/>
								<stop  offset="0.5216" style="stop-color:#CBC8B0"/>
								<stop  offset="0.8896" style="stop-color:#C6C1AB"/>
								<stop  offset="1" style="stop-color:#C6BCAB"/>
							</linearGradient>
							<path class="st95" d="M67,55.5l-3.4-0.1L34.7,40.8c-1.5-0.9-4.1-0.8-5.9,0.2L6.2,54.2L0,54l0,4.8h0c0,0.6,0.3,1.1,1,1.5l31.2,18
								c1.5,0.9,4.1,0.8,5.9-0.2l4.2-2.4l1.4-3l21.8-12.6c1-0.6,1.4-1.3,1.4-1.9h0V55.5z"/>
							<path class="st96" d="M1,55.5l31.2,18c1.5,0.9,4.1,0.8,5.9-0.2l27.4-15.8c1.7-1,1.9-2.5,0.4-3.4L65.8,54L34.9,36.1L34.7,36
								c-1.5-0.9-4.1-0.8-5.9,0.2L1.4,52.1C-0.3,53.1-0.5,54.6,1,55.5z"/>
							<path class="st97" d="M1.7,55.1l30.6,17.7c1.5,0.8,4.1,0.7,5.8-0.2L64.9,57c1.7-1,1.9-2.5,0.4-3.3l-0.2-0.1L34.9,36.1L34.7,36
								c-1.5-0.8-4.1-0.7-5.8,0.2L2.1,51.8C0.4,52.7,0.2,54.2,1.7,55.1z"/>
							
								<linearGradient id="SVGID_24_" gradientUnits="userSpaceOnUse" x1="-89.1861" y1="54.2733" x2="-30.4208" y2="54.2733" gradientTransform="matrix(-1 0 0 1 -31.3006 0)">
								<stop  offset="0.3092" style="stop-color:#83796A"/>
								<stop  offset="0.3782" style="stop-color:#857B6C"/>
								<stop  offset="0.403" style="stop-color:#8B8273"/>
								<stop  offset="0.4167" style="stop-color:#938A7B"/>
								<stop  offset="0.4278" style="stop-color:#968D7E"/>
								<stop  offset="0.4832" style="stop-color:#A19A89"/>
								<stop  offset="0.5368" style="stop-color:#A59E8D"/>
								<stop  offset="0.9579" style="stop-color:#B0A997"/>
							</linearGradient>
							<path class="st98" d="M4.4,53.9c0,0.3,0.1,0.7,0.4,0.9L33.1,71c0.1,0.1,0.5,0.2,1.1,0.2c0.7,0,1.4-0.2,1.9-0.4l26.6-15.4
								c0.6-0.3,0.6-1.2,0-1.5L34.6,37.7c-0.9-0.5-2-0.5-2.9,0C25.8,41.1,4.4,53.6,4.4,53.9z"/>
							<path class="st88" d="M62.7,54.7L34.6,38.4c-0.9-0.5-2-0.5-2.9,0c-5.6,3.2-25.1,14.7-27.1,16c-0.1-0.2-0.2-0.4-0.2-0.6
								c0-0.2,21.4-12.7,27.3-16.2c0.9-0.5,2-0.5,2.9,0l28.1,16.2c0.4,0.2,0.5,0.7,0.4,1.1C63,54.9,62.9,54.8,62.7,54.7z"/>
							<path class="st94" d="M19.2,66l-5.9-3.4c-1.5-0.8-1.6-2.1-0.4-2.8l0.5-0.3L24.6,66l-0.5,0.3C22.8,66.9,20.6,66.8,19.2,66z"/>
						</g>
						<g>
							<path class="st99" d="M14.5,95.6c-0.1,0.1-0.1,0.3,0,0.4c0,0.1,0,0.1,0.1,0.1l4.1,2.4l-0.2-3.4l-2.6-1.5L14.5,95.6z"/>
							<path class="st99" d="M22.8,97.3l2.8,1.6c0.2,0.1,0.4,0.1,0.5,0.1l-1.8-3.9L22,95.5L22.8,97.3z"/>
							<path class="st99" d="M19.3,91.7l3.6,3l0.6-3.7l-0.9,0.2l-1.6-3.6c-0.3-0.7-0.8-1.2-1.3-1.5L17,84.5l3.2,7L19.3,91.7z"/>
							<path class="st99" d="M18.8,88.9l-1.5-3.3c-0.1-0.3-0.3-0.5-0.5-0.6c0,0,0,0,0,0c0,0-0.1,0-0.1,0l-1.9,2.6l2.6,3.3L18.8,88.9z"
								/>
							<path class="st99" d="M16.9,94.1l-1-4.6l-3.5-1.1l1,1.2l-0.9,1.3c-0.3,0.4-0.2,1,0,1.7l1.3,3.2l2.1-2.9L16.9,94.1z"/>
							<path class="st99" d="M21.5,96.9l-0.1-1.3L19,97.1l2.8,4.5l-0.1-1.3l2.6,1.5c0.5,0.3,1,0.2,1.2-0.1l1.1-1.9L21.5,96.9z"/>
						</g>
					</g>
					<g>
						<g>
							<path class="st18" d="M57.3,116.3c0-2.5,1.8-5.7,4-6.9c1.1-0.6,2.1-0.7,2.9-0.3l0,0l1.7,1.1l-5.9,9.7l-1.5-1v0
								C57.8,118.5,57.3,117.6,57.3,116.3z"/>
							<path class="st19" d="M59,117.4c0,2.5,1.8,3.6,4,2.3c2.2-1.3,4-4.4,4-6.9c0-2.5-1.8-3.6-4-2.3C60.8,111.7,59,114.8,59,117.4z"/>
						</g>
						<path class="st33" d="M60.1,116.7c0,1.8,1.3,2.6,2.9,1.6c1.6-0.9,2.9-3.1,2.9-5c0-1.8-1.3-2.6-2.9-1.6
							C61.4,112.7,60.1,114.9,60.1,116.7z"/>
					</g>
				</g>
				<g>
					<path class="st100" d="M63.5,51.3L63.5,51.3l-0.2,0.3c0,0.2-0.2,0.5-0.4,0.6c0,0,0,0,0,0l-0.1,0.1l-0.1,0.1l0,0h0l0,0L56,48.6
						l-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.3v0c0-0.3,0.2-0.7,0.5-0.8c0.1-0.1,0.2-0.1,0.3,0l0,0c0,0,0,0,0,0L63.5,51.3L63.5,51.3z"/>
					<path class="st101" d="M63.6,51.6C63.6,51.6,63.6,51.6,63.6,51.6L63.6,51.6c0,0.3-0.2,0.6-0.4,0.7l0,0c0,0-0.1,0-0.1,0.1
						c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0h0l0,0c-0.1-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0.1-0.3,0.2-0.6,0.5-0.7
						c0.1-0.1,0.2-0.1,0.3,0c0,0,0,0,0.1,0C63.6,51.4,63.6,51.5,63.6,51.6z"/>
					<path class="st102" d="M63.6,51.6c0,0.3-0.2,0.6-0.4,0.7c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0
						c0,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.1-0.1-0.3c0,0,0-0.1,0-0.1c0-0.3,0.2-0.5,0.4-0.6c0.1-0.1,0.2-0.1,0.3,0
						C63.6,51.4,63.6,51.5,63.6,51.6L63.6,51.6C63.6,51.6,63.6,51.6,63.6,51.6z"/>
				</g>
				<g>
					<path class="st100" d="M45.9,41.3L45.9,41.3l-0.2,0.3c0,0.2-0.2,0.5-0.4,0.6c0,0,0,0,0,0l-0.1,0.1l-0.1,0.1l0,0h0l0,0l-6.8-3.8
						l-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.3v0c0-0.3,0.2-0.7,0.5-0.8c0.1-0.1,0.2-0.1,0.3,0l0,0c0,0,0,0,0,0L45.9,41.3L45.9,41.3z"/>
					<path class="st101" d="M46,41.6C46,41.6,46,41.6,46,41.6L46,41.6c0,0.3-0.2,0.6-0.4,0.7l0,0c0,0-0.1,0-0.1,0.1
						c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0h0l0,0c-0.1-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0.1-0.3,0.2-0.6,0.5-0.7
						c0.1-0.1,0.2-0.1,0.3,0c0,0,0,0,0.1,0C46,41.4,46,41.5,46,41.6z"/>
					<path class="st102" d="M46,41.6c0,0.3-0.2,0.6-0.4,0.7c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0
						c0,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.1-0.1-0.3c0,0,0-0.1,0-0.1c0-0.3,0.2-0.5,0.4-0.6c0.1-0.1,0.2-0.1,0.3,0C46,41.4,46,41.5,46,41.6
						L46,41.6C46,41.6,46,41.6,46,41.6z"/>
				</g>
			</g>
		{:else if  type === "aluminio"}
			<g id="aluminio">
				<g>
					<g>
						<g>
							<path class="st103" d="M46.7,0.1l28.6,16.4c0.1,0.1,0.4,0.3,0.6,0.8c0.2,0.5,0.3,1.1,0.2,1.6L68,53.2c-0.1,0.6-1.1,3.1-1.6,2.8
								L37.9,37.5c-0.1-0.1-0.4-0.3-0.5-0.8c-0.2-0.5-0.3-1.1-0.2-1.6l7.9-34.4C45.3,0.2,46.1-0.2,46.7,0.1z"/>
							<path class="st104" d="M45,0.1l28.6,16.4c0.1,0.1,0.4,0.3,0.6,0.8c0.2,0.5,0.3,1.1,0.2,1.6l-7.9,34.4c-0.1,0.6-1,1-1.5,0.7
								L36.3,37.5c-0.1-0.1-0.4-0.3-0.5-0.8c-0.2-0.5-0.3-1.1-0.2-1.6l7.9-34.4C43.7,0.2,44.5-0.2,45,0.1z"/>
							<path class="st0" d="M32.3,134.3L1,116.3c-1.5-0.9-1.3-2.4,0.4-3.4l27.4-15.8c1.7-1,4.4-1.1,5.9-0.2l31.2,18
								c1.5,0.9,1.3,2.4-0.4,3.4l-27.4,15.8C36.4,135.1,33.8,135.2,32.3,134.3z"/>
							<polygon class="st105" points="54.9,119.3 52.9,118.9 54.1,91.4 54.9,91.5 				"/>
							<polygon class="st106" points="37.8,100.8 54.1,91.4 52.9,118.9 36.6,128.3 				"/>
							<path class="st107" d="M60.7,115.5L60.7,115.5c0,0.3-0.2,0.5-0.6,0.8l-5.2,3v-7.4l5.4,3.1C60.5,115.1,60.7,115.3,60.7,115.5z"/>
							
								<linearGradient id="SVGID_25_" gradientUnits="userSpaceOnUse" x1="459.1201" y1="92.2266" x2="406.1242" y2="92.2266" gradientTransform="matrix(-1 0 0 1 471.6545 0)">
								<stop  offset="0.3092" style="stop-color:#CC8625"/>
								<stop  offset="0.3712" style="stop-color:#CC8826"/>
								<stop  offset="0.3935" style="stop-color:#CE8F28"/>
								<stop  offset="0.4093" style="stop-color:#D09A2C"/>
								<stop  offset="0.4167" style="stop-color:#D2A32F"/>
								<stop  offset="0.4265" style="stop-color:#D6AB30"/>
								<stop  offset="0.4588" style="stop-color:#E1BF32"/>
								<stop  offset="0.4908" style="stop-color:#E7CC34"/>
								<stop  offset="0.5216" style="stop-color:#E9D034"/>
								<stop  offset="0.8896" style="stop-color:#E5C833"/>
								<stop  offset="0.9595" style="stop-color:#EFBE3C"/>
								<stop  offset="1" style="stop-color:#F7B643"/>
							</linearGradient>
							<path class="st108" d="M63.2,55.6l-2.5,59.9v0l-5.8-0.2V91.5l-10.8,6.2v7.9v9.4v10.4l-8,4.6c-0.7,0.4-1.7,0.4-2.3,0.1L6.7,114.5
								c-0.3-0.2-0.4-0.4-0.4-0.6L3.8,54L63.2,55.6z"/>
							<path class="st109" d="M62.9,60.9l-9.7-5.6l-40.5-1.1l-8.6,5l0.3,6.9l27.9,16.1c1.5,0.9,4.1,0.8,5.9-0.2l24.5-14.1L62.9,60.9z"
								/>
							
								<linearGradient id="SVGID_26_" gradientUnits="userSpaceOnUse" x1="1341.2532" y1="59.5911" x2="1405.6543" y2="59.5911" gradientTransform="matrix(1 0 0 1 -1333.562 0)">
								<stop  offset="0.3092" style="stop-color:#CC8625"/>
								<stop  offset="0.3712" style="stop-color:#CC8826"/>
								<stop  offset="0.3935" style="stop-color:#CE8F28"/>
								<stop  offset="0.4093" style="stop-color:#D09A2C"/>
								<stop  offset="0.4167" style="stop-color:#D2A32F"/>
								<stop  offset="0.4265" style="stop-color:#D6AB30"/>
								<stop  offset="0.4588" style="stop-color:#E1BF32"/>
								<stop  offset="0.4908" style="stop-color:#E7CC34"/>
								<stop  offset="0.5216" style="stop-color:#E9D034"/>
								<stop  offset="0.8896" style="stop-color:#E5C833"/>
								<stop  offset="0.9595" style="stop-color:#EFBE3C"/>
								<stop  offset="1" style="stop-color:#F7B643"/>
							</linearGradient>
							<path class="st110" d="M67,55.5l-3.4-0.1L34.7,40.8c-1.5-0.9-4.1-0.8-5.9,0.2L6.2,54.2L0,54l0,4.8h0c0,0.6,0.3,1.1,1,1.5
								l31.2,18c1.5,0.9,4.1,0.8,5.9-0.2l4.2-2.4l1.4-3l21.8-12.6c1-0.6,1.4-1.3,1.4-1.9h0V55.5z"/>
							<path class="st111" d="M1,55.5l31.2,18c1.5,0.9,4.1,0.8,5.9-0.2l27.4-15.8c1.7-1,1.9-2.5,0.4-3.4L65.8,54L34.9,36.1L34.7,36
								c-1.5-0.9-4.1-0.8-5.9,0.2L1.4,52.1C-0.3,53.1-0.5,54.6,1,55.5z"/>
							<path class="st112" d="M1.7,55.1l30.6,17.7c1.5,0.8,4.1,0.7,5.8-0.2L64.9,57c1.7-1,1.9-2.5,0.4-3.3l-0.2-0.1L34.9,36.1L34.7,36
								c-1.5-0.8-4.1-0.7-5.8,0.2L2.1,51.8C0.4,52.7,0.2,54.2,1.7,55.1z"/>
							
								<linearGradient id="SVGID_27_" gradientUnits="userSpaceOnUse" x1="413.769" y1="54.2733" x2="472.5343" y2="54.2733" gradientTransform="matrix(-1 0 0 1 471.6545 0)">
								<stop  offset="0.3092" style="stop-color:#B37012"/>
								<stop  offset="0.3767" style="stop-color:#B47213"/>
								<stop  offset="0.4009" style="stop-color:#BA7917"/>
								<stop  offset="0.4167" style="stop-color:#C2831D"/>
								<stop  offset="0.4375" style="stop-color:#C68A22"/>
								<stop  offset="0.488" style="stop-color:#CC972B"/>
								<stop  offset="0.5368" style="stop-color:#CE9B2E"/>
								<stop  offset="0.9579" style="stop-color:#D5A930"/>
							</linearGradient>
							<path class="st113" d="M4.4,53.9c0,0.3,0.1,0.7,0.4,0.9L33.1,71c0.1,0.1,0.5,0.2,1.1,0.2c0.7,0,1.4-0.2,1.9-0.4l26.6-15.4
								c0.6-0.3,0.6-1.2,0-1.5L34.6,37.7c-0.9-0.5-2-0.5-2.9,0C25.8,41.1,4.4,53.6,4.4,53.9z"/>
							<path class="st104" d="M62.7,54.7L34.6,38.4c-0.9-0.5-2-0.5-2.9,0c-5.6,3.2-25.1,14.7-27.1,16c-0.1-0.2-0.2-0.4-0.2-0.6
								c0-0.2,21.4-12.7,27.3-16.2c0.9-0.5,2-0.5,2.9,0l28.1,16.2c0.4,0.2,0.5,0.7,0.4,1.1C63,54.9,62.9,54.8,62.7,54.7z"/>
							<path class="st109" d="M19.2,66l-5.9-3.4c-1.5-0.8-1.6-2.1-0.4-2.8l0.5-0.3L24.6,66l-0.5,0.3C22.8,66.9,20.6,66.8,19.2,66z"/>
						</g>
						<g>
							<path class="st114" d="M14.5,95.6c-0.1,0.1-0.1,0.3,0,0.4c0,0.1,0,0.1,0.1,0.1l4.1,2.4l-0.2-3.4l-2.6-1.5L14.5,95.6z"/>
							<path class="st114" d="M22.8,97.3l2.8,1.6c0.2,0.1,0.4,0.1,0.5,0.1l-1.8-3.9L22,95.5L22.8,97.3z"/>
							<path class="st114" d="M19.3,91.7l3.6,3l0.6-3.7l-0.9,0.2l-1.6-3.6c-0.3-0.7-0.8-1.2-1.3-1.5L17,84.5l3.2,7L19.3,91.7z"/>
							<path class="st114" d="M18.8,88.9l-1.5-3.3c-0.1-0.3-0.3-0.5-0.5-0.6c0,0,0,0,0,0c0,0-0.1,0-0.1,0l-1.9,2.6l2.6,3.3L18.8,88.9z"
								/>
							<path class="st114" d="M16.9,94.1l-1-4.6l-3.5-1.1l1,1.2l-0.9,1.3c-0.3,0.4-0.2,1,0,1.7l1.3,3.2l2.1-2.9L16.9,94.1z"/>
							<path class="st114" d="M21.5,96.9l-0.1-1.3L19,97.1l2.8,4.5l-0.1-1.3l2.6,1.5c0.5,0.3,1,0.2,1.2-0.1l1.1-1.9L21.5,96.9z"/>
						</g>
						<polygon class="st115" points="60.8,62.8 58.1,66.3 56.7,65.2 			"/>
						<polygon class="st115" points="53.1,67.3 50.4,70.8 49,69.6 			"/>
						<polygon class="st116" points="61.9,62.2 59.2,65.7 58.1,66.3 60.8,62.8 			"/>
						<polygon class="st116" points="54.2,66.6 51.5,70.1 50.4,70.8 53.1,67.3 			"/>
					</g>
					<g>
						<g>
							<path class="st18" d="M57.3,116.3c0-2.5,1.8-5.7,4-6.9c1.1-0.6,2.1-0.7,2.9-0.3l0,0l1.7,1.1l-5.9,9.7l-1.5-1v0
								C57.8,118.5,57.3,117.6,57.3,116.3z"/>
							<path class="st19" d="M59,117.4c0,2.5,1.8,3.6,4,2.3c2.2-1.3,4-4.4,4-6.9c0-2.5-1.8-3.6-4-2.3C60.8,111.7,59,114.8,59,117.4z"/>
						</g>
						<path class="st33" d="M60.1,116.7c0,1.8,1.3,2.6,2.9,1.6c1.6-0.9,2.9-3.1,2.9-5c0-1.8-1.3-2.6-2.9-1.6
							C61.4,112.7,60.1,114.9,60.1,116.7z"/>
					</g>
				</g>
				<g>
					<path class="st117" d="M63.5,51.3L63.5,51.3l-0.2,0.3c0,0.2-0.2,0.5-0.4,0.6c0,0,0,0,0,0l-0.1,0.1l-0.1,0.1l0,0h0l0,0L56,48.6
						l-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.3v0c0-0.3,0.2-0.7,0.5-0.8c0.1-0.1,0.2-0.1,0.3,0l0,0c0,0,0,0,0,0L63.5,51.3L63.5,51.3z"/>
					<path class="st118" d="M63.6,51.6C63.6,51.6,63.6,51.6,63.6,51.6L63.6,51.6c0,0.3-0.2,0.6-0.4,0.7l0,0c0,0-0.1,0-0.1,0.1
						c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0h0l0,0c-0.1-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0.1-0.3,0.2-0.6,0.5-0.7
						c0.1-0.1,0.2-0.1,0.3,0c0,0,0,0,0.1,0C63.6,51.4,63.6,51.5,63.6,51.6z"/>
					<path class="st119" d="M63.6,51.6c0,0.3-0.2,0.6-0.4,0.7c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0
						c0,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.1-0.1-0.3c0,0,0-0.1,0-0.1c0-0.3,0.2-0.5,0.4-0.6c0.1-0.1,0.2-0.1,0.3,0
						C63.6,51.4,63.6,51.5,63.6,51.6L63.6,51.6C63.6,51.6,63.6,51.6,63.6,51.6z"/>
				</g>
				<g>
					<path class="st117" d="M45.9,41.3L45.9,41.3l-0.2,0.3c0,0.2-0.2,0.5-0.4,0.6c0,0,0,0,0,0l-0.1,0.1l-0.1,0.1l0,0h0l0,0l-6.8-3.8
						l-0.1-0.1c-0.1,0-0.1-0.1-0.1-0.3v0c0-0.3,0.2-0.7,0.5-0.8c0.1-0.1,0.2-0.1,0.3,0l0,0c0,0,0,0,0,0L45.9,41.3L45.9,41.3z"/>
					<path class="st118" d="M46,41.6C46,41.6,46,41.6,46,41.6L46,41.6c0,0.3-0.2,0.6-0.4,0.7l0,0c0,0-0.1,0-0.1,0.1
						c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0h0l0,0c-0.1-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0.1-0.3,0.2-0.6,0.5-0.7
						c0.1-0.1,0.2-0.1,0.3,0c0,0,0,0,0.1,0C46,41.4,46,41.5,46,41.6z"/>
					<path class="st119" d="M46,41.6c0,0.3-0.2,0.6-0.4,0.7c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0
						c0,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.1-0.1-0.3c0,0,0-0.1,0-0.1c0-0.3,0.2-0.5,0.4-0.6c0.1-0.1,0.2-0.1,0.3,0C46,41.4,46,41.5,46,41.6
						L46,41.6C46,41.6,46,41.6,46,41.6z"/>
				</g>
			</g>
		{:else}
			<!-- else content here -->
		{/if}
	</svg>
</div>