<template>
	<div class="space-y-3 text-black text-sm mt-5">
		<div class="flex items-center" v-for="(label, index) in searchPredictions" :key="label">
			<input
			type="checkbox"
			class="h-5 w-5 cursor-pointer"
			:id="`search-prediction-${index}`" :value="label" v-model="selectedSearchPredictions"
			/>
			<label :for="index" class="pl-4 cursor-pointer flex-grow">
				{{ label }}
			</label>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		searchPredictions: Array,
		modelValue: Array
	},
	data () {
    return {
      selectedSearchPredictions: this.modelValue
    }
   },
	watch: {
		selectedSearchPredictions(){
			this.$emit('update:modelValue', this.selectedSearchPredictions)
		}
	}
}
</script>