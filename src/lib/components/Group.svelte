<script lang="ts">
	import { editMode } from "$lib/stores";
	import { fade, slide } from "svelte/transition";
	import { flip } from "svelte/animate";
	import Link from "./Link.svelte";

	export let data: any;

	let forceUpdateLinks: number = 0;

	function addBookmark() {
		data.links.push({
			id: data.links.length + 1,
			name: "New Bookmark",
			href: "https://",
		});
		forceUpdateLinks++;
	}

	function deleteBookmark(i: number) {
		data.links.splice(i, 1);
		forceUpdateLinks++;
	}
</script>

<div class="group">
	<div class="title">
		{#if $editMode}
			<input bind:value={data.name} />
			<button on:click={addBookmark}>
				<span class="material-symbols-outlined"> add </span>
			</button>
		{:else}
			<div class="text">{data.name}</div>
		{/if}
	</div>

	{#key forceUpdateLinks}
		<div class="links">
			{#each data.links as link, i}
				<Link
					name={link.name}
					href={link.href}
					on:delete={() => deleteBookmark(i)}
				/>
			{/each}
		</div>
	{/key}
</div>

<style>
	.title {
		font-size: 20px;
		font-weight: 500;
		padding-bottom: 5px;
		border-bottom: 2px solid rgba(44, 48, 72, 0.639);
		color: var(--heading-font-color);
		display: grid;
		grid-template-columns: 1fr max-content;
		gap: 5px;
	}
	.links {
		margin-top: 20px;
		font-size: 18px;
	}
	input {
		width: 100%;
		display: block;
		font-size: 20px;
		font-weight: 500;
		padding: 7px;
	}
	button {
		display: grid;
		place-items: center;
	}
</style>
