<template>
  <li>
    <a href="#" class="flex items-center pl-5 pr-8 py-2 text-sm hover:bg-gray-200">
      <BaseIcon :name="icon" class="w-6 h-6 mr-3 text-gray-400" />
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script lang="ts">
import BaseIcon from './BaseIcon.vue'

export default {
	components: {
		BaseIcon
	}, 
	props: {
		label: String,
		icon: String,
	}
}
</script>