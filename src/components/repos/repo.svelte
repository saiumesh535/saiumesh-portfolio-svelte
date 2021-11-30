<script lang="ts">
	import type { Repo } from 'src/utils/app.utils';
	export let options: Repo;
</script>

<div style="background-image: {options.titleBackground};" class="repo">
	<p>{options.title}</p>
	<div class="lang__tags">
		{#each options.langs as lang}
			<div title={lang} class={`lang__tag ${lang}`}>{lang}</div>
		{/each}
	</div>
</div>
