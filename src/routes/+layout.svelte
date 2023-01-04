<script lang="ts">
	import '$lib/firebase';

	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';

	let topAppBar: TopAppBar;
</script>

<TopAppBar bind:this={topAppBar} variant="fixed">
	<Row>
		<Section>
			<Title>Firebase + Svelte</Title>
		</Section>
		<Section>
			<a href="/login">Login</a>
		</Section>
	</Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
	<main>
		<slot />
	</main>
</AutoAdjust>
