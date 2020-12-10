<template>
	<div>
		<user-profile :userInfo="userInfo">
			<div slot="username">{{ userInfo.id }}</div>
			<span slot="karma">{{ userInfo.karma }} karma</span>
		</user-profile>
	</div>
</template>

<script>
	import UserProfile from "../components/UserProfile.vue";

	export default {
		components: {
			UserProfile,
		},
		created() {
			const username = this.$route.params.id;
			this.$store.dispatch("FETCH_USER", username);
		},
		computed: {
			userInfo() {
				return this.$store.state.user;
			},
		},
	};
</script>

<style>
</style>