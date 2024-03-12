<script lang="ts">
    import "$lib/css/index.css";

    import Dashboard from "$lib/components/Dashboard.svelte";
    import Bookmarks from "$lib/components/Bookmarks.svelte";
</script>


<div class="container">
    <main>
            <Dashboard />
            <Bookmarks />
    </main>
</div>

<style>
    .container {
        display: grid;
        align-items: center;
        min-height: 100vh;
        background-color: #121212;
        color: var(--text-font-color)
    }
    main {
        width: 100%;
        max-width: 1000px;
        margin: auto;
        min-height: 550px;
        padding: 20px;
        box-sizing: border-box;
    }
</style>
