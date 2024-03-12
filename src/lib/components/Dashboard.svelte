<script lang="ts">
	import moment from "moment";

	import Clock from "./Clock.svelte";
	import Date from "./Date.svelte";

	let hour: string;
	let minute: string;
	let date: string;

	function updateClock() {
		hour = moment().format("HH");
		minute = moment().format("mm");
		date = moment().format("dddd D MMM");
	}

	updateClock();
	setInterval(updateClock, 10);
</script>

<div class="dashboard-container">
	<div class="dashboard">
		<Clock {hour} {minute} />
		<div class="stats">
			<Date {date} />
		</div>
	</div>
</div>

<style>
	.dashboard-container {
		display: grid;
		align-items: center;
	}
	.dashboard {
		display: grid;
		grid-template-rows: 2fr 1fr;
		gap: 0px;
	}
	.stats {
		font-size: 20px;
		text-align: left;
	}
</style>
