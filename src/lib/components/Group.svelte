<script lang="ts">
	import Link from "./Link.svelte";

    export let data:any;
</script>

<div class="group">
    <div class="title">{data.name}</div>
    <div class="links">
        {#each data.links as link}
            <Link data={link}/>
        {/each}
    </div>
</div>

<style>
    .title {
        font-size: 20px;
        font-weight: 500;
        padding-bottom: 5px;
        border-bottom: 2px solid rgba(44, 48, 72, 0.639);
        color: var(--heading-font-color);
    }
    .links {
        margin-top: 20px;
        font-size: 18px;
    }
</style>