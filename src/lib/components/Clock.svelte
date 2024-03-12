<script lang="ts">
	export let hour:string;
    export let minute:string;
</script>

<div class="clock">
	<div class="hour">{hour}</div>
    <div class="divider"><span>:</span></div>
    <div class="minute">{minute}</div>
</div>

<style>
    .clock {
        font-size: 120px;
        font-weight: 500;
        color: var(--heading-font-color);
        display: grid;
        grid-template-columns: max-content max-content max-content;
        gap: 0px;
        width: max-content;
    }
    .divider {
        color: var(--text-font-color);
        font-weight: 400;
        transform: translateY(-5px);
    }
</style>
