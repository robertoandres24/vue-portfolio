<template>
	<div class="home">
		<transition name="fade">
			<img v-show="heroLoaded" ref="heroBg" src="../assets/images/hero-bg.jpg" class="hero" />
		</transition>
		<div class="bg-overlay"></div>
		<transition name="fade">
			<div v-show="!heroLoaded" class="preloader">
				<img src="../assets/images/html-tag.svg" alt />
			</div>
		</transition>
		<div class="container">
			<transition name="fade">
				<div v-show="heroLoaded" class="welcome">
					<h1>
						Hi, I'm
						<span class="name">Roberto Obando</span>
					</h1>
					<h3 class="wrapper-element">
						<span class="element"></span>
					</h3>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Typed from 'typed.js'

export default {
	name: 'home',
	data() {
		return {
			heroLoaded: false
		}
	},
	methods: {
		initTyped() {
			let options = {
				strings: [
					'A Full-stack developer',
					'Working remotely from Osorno, Chile'
				],
				typeSpeed: 50,
				backSpeed: 20,
				backDelay: 1000,
				onComplete: self => {
					// console.log(self)
				}
			}

			new Typed('.element', options)
		},
		delay(ms) {
			return new Promise(resolve => {
				setTimeout(() => {
					resolve()
				}, ms)
			})
		},
		handlePreloader() {
			let heroBg = this.$refs.heroBg
			heroBg.onload = async () => {
				this.heroLoaded = true
				await this.delay(500)
				this.initTyped()
			}
		}
	},
	mounted() {
		this.handlePreloader()
	}
}
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.preloader {
	position: absolute;
	display: block;
	width: 64px;
	height: 64px;
	margin: auto;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	animation: spin 2s linear infinite;
	animation-delay: 0.5s;
}
@keyframes spin {
	100% {
		transform: rotate(360deg);
	}
}
.container {
	padding: 6rem;
	width: 100%;
	height: 100%;
}
.home {
	height: 100vh;
	width: 100%;
	color: white;
	position: relative;
}
.hero {
	background-color: black;
	object-fit: cover;
	height: 100%;
	width: 100%;
	background-position: center;
	position: absolute;
}
.bg-overlay {
	position: absolute;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
}
.welcome {
	position: absolute;
	top: 39%;
	@include media('>phone', '<=tablet') {
		top: 30%;
	}

	.name {
		color: $blue;
	}
}
// typed.js things
.wrapper-element {
	display: inline-block;
	margin: 0.5rem 0;
	min-height: 52px;
}
</style>
