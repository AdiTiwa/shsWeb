<script>
    import { startWith } from 'rxjs';
    import { form, field } from 'svelte-forms';
    import {required} from 'svelte-forms/validators'
    import { get } from 'svelte/store'
    import { db } from '../firebase';
    import {collectionData} from "rxfire/firestore";

    const username = field('username', '', [required()])
    const loginForm = form(username)

    function onSubmit(e) {
        console.log(get(username).value);

        const users = db.collection("users").get();
        console.log(users)
    }
</script>

<section>
    <form on:submit|preventDefault = {onSubmit}>
        <input type="text" bind:value={$username.value} />

        <button type="submit" disabled={!$loginForm.valid}>Send form</button>
    </form>
</section>