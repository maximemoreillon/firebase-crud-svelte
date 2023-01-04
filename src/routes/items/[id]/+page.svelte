<script lang="ts">
	import { currentUser } from '$lib/firebase';

	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';
	import { getFirestore, collection, doc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore';

	import Textfield from '@smui/textfield';
	import Button, { Label, Icon } from '@smui/button';

	let loading = false;
	let deleting = false;
	let updating = false;
	const { id } = $page.params;
	const firestore = getFirestore();

	let item: any;

	onMount(() => {
		getItem();
	});

	const getItem = async () => {
		loading = true;
		try {
			const collectionRef = collection(firestore, 'items');
			const docRef = doc(collectionRef, id);
			const docSnap = await getDoc(docRef);
			item = docSnap.data();
		} catch (error) {
			alert(error);
			console.error(error);
		} finally {
			loading = false;
		}
	};

	const deleteItem = async () => {
		if (!confirm('Delete item?')) return;
		deleting = true;
		try {
			const collectionRef = collection(firestore, 'items');
			const docRef = doc(collectionRef, id);
			await deleteDoc(docRef);
			goto('/items');
		} catch (error) {
			alert(error);
			console.error(error);
		} finally {
			deleting = false;
		}
	};

	const updateItem = async () => {
		updating = true;
		try {
			const collectionRef = collection(firestore, 'items');
			const docRef = doc(collectionRef, id);
			await updateDoc(docRef, item);
			alert('Item updated successfully');
		} catch (error) {
			alert(error);
			console.error(error);
		} finally {
			updating = false;
		}
	};
</script>

<h2>Item</h2>
{#if $currentUser}
	{#if item}
		<Textfield bind:value={item.name} label="Name" input$emptyValueUndefined />
		<Textfield bind:value={item.description} label="Description" input$emptyValueUndefined />
		<Button type="submit" on:click={updateItem}>
			<Icon class="material-icons">save</Icon>
			<Label>Update item</Label>
		</Button>
		<Button type="submit" on:click={deleteItem}>
			<Icon class="material-icons">delete</Icon>
			<Label>Delete item</Label>
		</Button>
	{/if}
{:else}
	<p>Only authenticated users can see this resource</p>
{/if}
