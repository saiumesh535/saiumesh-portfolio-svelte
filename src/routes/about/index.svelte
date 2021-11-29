<script lang="ts">
    import './about.scss';
    import Header from '../../components/header/header.svelte';
</script>

<Header />

<div class="about">
	<h1>About me</h1>
	<div class="about__me__card">
		<img src="./profile.jpg" alt="profile" />
		<div class="about__me__meta">
			<h1>Hello, I'm Umesh</h1>
			<span
				>I work on creating and improving the performance of web apps from Back-end to Front-end.
				CSS is one of my worst nightmares. I speak Typescript. Lately, I am having a love hate
				relationship with rust. Working on tech is the most satisfying job for me.</span
			>
		</div>
	</div>
	<div class="about__me__text">
		<p>
			Starting as an Android and Node developer at VDeliver, loved the late night discussions and
			brainstorming. To challenge my self I decided to work with a much bigger company, so i decided
			to join Accenture.
		</p>
		<p>
			Working as a fullstack and Android developer, i experienced how tech giants work. It was a
			great experience. After a year at Accenture i decided to work with some of the new
			technologies like Express, React, Angular. So i Joined letzNav now called apty.
		</p>
		<p>
			It has been an exciting journey. Loads of new challenges and still being challenged. From
			creating optimized CI/CD processes, Migrating from Node to Go. Focussing on build times bundle
			sizes etc.
		</p>
	</div>
</div>
