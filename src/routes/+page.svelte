<script lang="ts">
	import "$lib/css/index.css";

	import Dashboard from "$lib/components/Dashboard.svelte";
	import Bookmarks from "$lib/components/Bookmarks.svelte";
	import Toolbar from "$lib/components/Toolbar.svelte";
	import { editMode } from "$lib/stores";
</script>

<svelte:head>
	<title>LittleStart</title>
</svelte:head>

<div class="container">
	<main class:editMode={$editMode}>
		{#if !$editMode}
			<Dashboard />
        {:else}
            <h1>Edit Bookmarks</h1>
		{/if}
		<Bookmarks />
	</main>
</div>

<Toolbar />

<style>
	.container {
		display: grid;
		align-items: center;
		min-height: 100vh;
		background-color: #121212;
		color: var(--text-font-color);
		padding-top: 50px;
		box-sizing: border-box;
	}
	main {
		width: 100%;
		max-width: 1000px;
		margin: auto;
		min-height: 550px;
		padding: 20px;
		box-sizing: border-box;
	}
    main.editMode {
        min-height: 100%;
    }
</style>
