<template>
	<div id="app">
		<tool-bar></tool-bar>
		<transition name="page">
			<router-view></router-view>
		</transition>
		<spinner :loading="LoadingStatus"></spinner>
	</div>
</template>

<script>
	import ToolBar from "./components/ToolBar";
	import Spinner from "./components/Spinner";
	import bus from "./utils/bus";
	export default {
		components: {
			ToolBar,
			Spinner,
		},
		data() {
			return {
				LoadingStatus: false,
			};
		},
		methods: {
			startSpinner() {
				this.LoadingStatus = true;
			},
			endSpinner() {
				this.LoadingStatus = false;
			},
		},
		created() {
			bus.$on("start:spinner", this.startSpinner);
			bus.$on("end:spinner", this.endSpinner);
		},
		beforeDestroy() {
			bus.$off("start:spinner", this.startSpinner);
			bus.$off("end:spinner", this.endSpinner);
		},
	};
</script>
<style>
	body {
		padding: 0;
		margin: 0;
	}
	a {
		color: #34495e;
		text-decoration: none;
	}
	a:hover {
		color: #42b883;
		text-decoration: underline;
	}
	a.router-link-exact-active {
		text-decoration: underline;
	}
	/* 라우터 트랜지션 */
	.page-enter-active,
	.page-leave-active {
		transition: opacity 0.5s;
	}
	.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>
