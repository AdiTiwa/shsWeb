<script>
    import { form, field } from 'svelte-forms';
    import {required} from 'svelte-forms/validators'

    const username = field('username', '', [required()])
    const loginForm = form(username)
</script>

<section>
  <input type="text" bind:value={$name.value} />

  <button disabled={!$loginForm.valid}>Send form</button>
</section>