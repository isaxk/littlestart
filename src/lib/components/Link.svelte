<script lang="ts">
    export let data:any;
</script>

<div class="link">
    <a href={data.href}>{data.name}</a>
</div>

<style>
    .link {
        margin: 0px 0px;
    }
    a {
        padding: 7.5px 0px;
        color: currentColor;
        text-decoration: none;
        display: inline-block;
        width: 100%;
    }
    a:hover {
        text-decoration: underline;
    }
</style>