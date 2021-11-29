<script lang="ts">
	import { Langs, getLangs } from '../../utils/langs.utils';
	import './lang-buttons.scss';
	import LangButton from './langbutton.svelte';
	let langs: Langs[] = getLangs();
	export let currentLang: string = 'All';
	function onLangClick(lang: string) {
		currentLang = lang;
	}
</script>

<div class="lang__buttons">
	{#each langs as lang}
		<LangButton
			className = {lang.name === currentLang ? 'active' : ''}
			onClick={(lang) => onLangClick(lang)}
			lang={lang.name}
		/>
	{/each}
</div>
