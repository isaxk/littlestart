<script lang="ts">
	import Group from "./Group.svelte";

	import { bookmarks, editMode } from "$lib/stores";
	import { crossfade, fade, slide } from "svelte/transition";

</script>

{#key $editMode}
	<div class="bookmarks">
		{#each $bookmarks as group}
			<Group bind:data={group} />
		{/each}
	</div>
{/key}

<style>
	.bookmarks {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 20px;
		margin-top: 50px;
	}
</style>
