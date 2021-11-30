<script lang="ts">
	import { currentSelectedLang } from '../../store/store';
	import { Langs, getLangs } from '../../utils/app.utils';
	import LangButton from './langbutton.svelte';
	let langs: Langs[] = getLangs();
	export let currentLang: string = 'All';
	function onLangClick(lang: string) {
		currentLang = lang;
		currentSelectedLang.set(lang);
	}
</script>

<div class="lang__buttons">
	{#each langs as lang}
		<LangButton
			className={lang.name === currentLang ? 'active' : ''}
			onClick={(lang) => onLangClick(lang)}
			lang={lang.name}
		/>
	{/each}
</div>

<style global lang="scss">
	@import './lang-buttons.scss';
</style>