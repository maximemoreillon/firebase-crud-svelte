<script lang="ts">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import Button, { Label, Icon as BtnIcon } from '@smui/button';

	import '$lib/firebase';
	import { signInWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';

	let email = '';
	let password = '';

	const login = async () => {
		try {
			const auth = getAuth();
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.error(error);
			alert(error);
		}
	};
</script>

<h1>Login</h1>

<form on:submit|preventDefault={login}>
	<Textfield bind:value={email} label="E-mail">
		<Icon class="material-icons" slot="leadingIcon">person</Icon>
	</Textfield>

	<Textfield bind:value={password} label="Password" type="password">
		<Icon class="material-icons" slot="leadingIcon">key</Icon>
	</Textfield>

	<Button>
		<BtnIcon class="material-icons">login</BtnIcon>
		<Label>Login</Label>
	</Button>
</form>
