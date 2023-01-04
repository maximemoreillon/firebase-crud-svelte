<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

	import { onMount } from 'svelte';

	import { collection, getDocs, getFirestore } from 'firebase/firestore';

	import NewItemDialog from '$lib/NewItemDialog.svelte';

	let items: any = [];

	onMount(() => {
		getitems();
	});

	const getitems = async () => {
		try {
			const firestore = getFirestore();
			const collectionRef = collection(firestore, 'items');
			const querySnapshot = await getDocs(collectionRef);
			items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
		} catch (error) {}
	};
</script>

<h1>Items</h1>
<p>
	<NewItemDialog />
</p>

<DataTable>
	<Head>
		<Row>
			<Cell>Name</Cell>
			<Cell>Description</Cell>
		</Row>
	</Head>
	<Body>
		{#each items as item}
			<Row>
				<Cell>{item.name}</Cell>
				<Cell>{item.description}</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>
