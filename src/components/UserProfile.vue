<template>
	<div class="user-container">
		<div>
			<i class="far fa-user"></i>
		</div>

		<div class="user-description">
			<slot name="username">
				<!-- 상위컴포넌트에서 정의할 영역 -->
			</slot>

			<div class="time">
				{{ userInfo.time_ago || "Joined " + userInfo.created + "," }}
				<span v-if="userInfo.points">, {{ userInfo.points }} points</span>
				<slot name="userKarma"></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			userInfo: Object,
		},
	};
</script>

<style scoped>
	.user-container {
		display: flex;
		align-items: center;
		padding: 0.5rem;
	}
	.fa-user {
		font-size: 2.5rem;
	}
	.user-description {
		padding-left: 8px;
	}
</style>

