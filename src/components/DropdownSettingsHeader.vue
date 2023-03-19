<template>
	<section class="flex border-b border-gray-200 text-black">
		<button class="px-3">
			<BaseIcon @click.stop="$emit('back')" name="arrowLeft" />
		</button>
		<span class="py-3 focus:outline-none">{{ title }}</span>
	</section>
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
	components: {
		BaseIcon
	},
	props: ['title'],
	emits: ['back'],
}
</script>