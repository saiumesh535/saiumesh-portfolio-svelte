<script lang="ts">
	import { onMount } from 'svelte';
	import { getReps } from '../../utils/app.utils';
	import Repo from './repo.svelte';
	export let repos = getReps();
	import { currentSelectedLang } from '../../store/store';

	onMount(() => {
		currentSelectedLang.subscribe((repo) => {
			if (repo === 'All') {
				repos = getReps();
			} else {
				repos = getReps().filter((rep) => rep.langs.includes(repo));
			}
		});
	});
</script>

<div class="repos">
	<div class="displaced">
		{#each repos as repo}
			<Repo options={repo} />
		{/each}
	</div>
</div>

<style global lang="scss">
	@import './repo.scss';
</style>
