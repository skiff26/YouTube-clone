<template>
	<div class="space-y-3 text-black text-sm mt-3">
			<div v-for="(label, index) in categories" :key="label" class="flex items-center">
			<input type="radio" class="h-5 w-5 cursor-pointer" :id="`search-prediction-category-${index}`" :value="label" v-model="selectedSearchPredictionsCategory">
			<label for="`search-prediction-category-${index}`" class="pl-4 cursor-pointer flex-grow">{{ label }}</label>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		categories: Array,
		modelValue: String,
	},
	data(){
		return {
			selectedSearchPredictionsCategory: this.modelValue
		}
	},
	watch: {
		selectedSearchPredictionsCategory(){
			this.$emit('update:modelValue', this.selectedSearchPredictionsCategory)
		}
	}
}
</script>