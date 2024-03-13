<script lang="ts">
	import { editMode } from "$lib/stores";
	import { slide } from "svelte/transition";
    import { createEventDispatcher } from 'svelte'

	export let name:string;
	export let href:string;

    const dispatch = createEventDispatcher()

    function deleteSelf() {
        dispatch("delete");
    }
</script>

<div class="link" class:edit={$editMode} transition:slide|local>
	{#if $editMode}
		<input class="name" bind:value={name} />
		<div class="bottom">
			<input class="href" bind:value={href} />
			<button class="delete-btn" on:click={deleteSelf}>
				<span class="material-symbols-outlined"> delete </span>
            </button>
		</div>
	{:else}
		<a href={href}>{name}</a>
	{/if}
</div>

<style>
	.link {
		margin: 0px 0px;
		display: grid;
	}
	.link.edit {
		margin: 20px 0px;
	}
	a {
		padding: 7.5px 0px;
		color: currentColor;
		text-decoration: none;
		display: inline-block;
		width: 100%;
	}
	input {
		display: block;
		width: 100%;
	}
	input.href {
		font-size: 12px;
		margin: 0px;
	}
	a:hover {
		text-decoration: underline;
	}
	.bottom {
		display: grid;
		grid-template-columns: 1fr max-content;
		align-items: center;
		gap: 5px;
        width: 100%;
	}
	.delete-btn {
		text-align: center;
        display: grid;
        place-items: center;
        font-size: 10px;
        cursor: pointer;
	}
	.delete-btn span {
		font-size: 18px;
	}
    button {
        all: unset;
    }
</style>
