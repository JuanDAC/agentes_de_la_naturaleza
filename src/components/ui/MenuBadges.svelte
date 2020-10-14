<script>
	import {menuBadges} from "../../store";
	import Badges from "./badges.svelte";
	import ButtonClose from "./buttons/ButtonClose.svelte";
	import WrapperBadges from "./WrapperBadges.svelte";
	import {levels, badgesURL} from "../../store";

</script>
<style>
	
	.shadow {
		display: grid;
		place-items: center;
		top: 0px;
		background-color: rgba(0, 26, 2, 0.7);
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 10;
	}
	nav {
		--padding: calc(var(--vh-main) * 20); 
		display: flex;
		width: calc(var(--vh-main) * 83);
		flex-flow: row wrap;
		gap: calc(var(--vh-main) * 4);
		background-color: #003804;
		padding: calc(var(--padding) * 0.2) var(--padding) calc(var(--padding) * 0.5) var(--padding);
		border-radius: calc(var(--vh-main) * 2);
		box-shadow: 0px 0px 0px calc(var(--vh-main) * 1) rgb(246, 250, 240);
		position: relative;
	}
	button {
		position: absolute;
		transition: all 100ms;
		left: calc(var(--vh-main) * -4);
		bottom: calc(var(--vh-main) * -4);
		transform: scale(1.5);
	}
	button:hover {
		transform-origin: center center;
		transform: scale(1.7);
	}
</style>
{#if $menuBadges}
	<div
		class="shadow"
		on:click|stopPropagation={menuBadges.set.bind(null, false)}
	>
		<nav on:click|stopPropagation={()=>{}}>
			{#each levels as level}
				<WrapperBadges type={level}>
					<Badges type={level} src={badgesURL.get(level)} ></Badges>
				</WrapperBadges>
			{/each}
			<button
				on:click={menuBadges.set.bind(null, false)}
			>
				<ButtonClose/>
			</button>
		</nav>
	</div>
{/if}