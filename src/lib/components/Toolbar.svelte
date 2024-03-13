<script lang="ts">
	import { editMode } from "$lib/stores";



    function edit() {
        editMode.set(!$editMode)
    }
</script>

<div class="toolbar">
    <button class="edit-btn" on:click={edit}>
        <span class="material-symbols-outlined"> edit </span>
    </button>
    <button class="edit-btn">
        <span class="material-symbols-outlined"> settings </span>
    </button>
</div>

<style>
    .toolbar {
        position: fixed;
        right: 10px;
        bottom: 10px;
        color: white;
    }
    .toolbar button {
        display: inline-block;
        margin: 5px;
    }
</style>