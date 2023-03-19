<template>	
	<textarea v-bind="$attrs" v-model="searchPredictionsDetails" placeholder="Provide additional details (optional)" 
	class="border rounded-sm pt-2 pb-5 px-2 resize-none w-full focus:outline-none"/>		
</template>
<script>
export default {
	props: {
		modelValue: String,
	},
	data(){
		return {
			searchPredictionsDetails: this.modelValue
		}
	}
}
</script>