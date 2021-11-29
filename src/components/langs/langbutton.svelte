<script lang="ts">
	export let lang: string;
	export let onClick: (lang: string) => void;
    export let className: string;
</script>

<button on:click={() => onClick(lang)} class={`lang__button ${className} ${lang}`}>
	{lang}
</button>
