<script lang="ts">
	import { page } from '$app/stores';
	const { id } = $page.params;
</script>

<h1>Item</h1>
<p>This is a single item</p>
<p>{id}</p>
