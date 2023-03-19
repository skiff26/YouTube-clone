<template>
	<BaseModal class="md:w-4/5 max-w-2xl">	
		<p class="text-base text-black tracking-wide">Report search predictions</p>
		<TheSearchPredictionsList v-model="selectedSearchPredictions" :search-predictions="searchPredictions"/>
		<p class="text-xs text-gray-600 mt-5">The selected predictions are:</p>
		<TheSearchPredictionsCategories v-model="selectedSearchPredictionsCategory" :categories="searchPredictionsCategories"/>
		<div class="text-black text-sm mt-6">
		<BaseTextarea v-model="searchPredictionsDetails" />
		</div>
		<template #footer="{ close }">
			<BaseButton @click="close" class="ml-auto">
			Cancel
			</BaseButton>
			<BaseButton class="ml-1 text-gray-400 cursor-auto" disabled>
			Report
			</BaseButton>
		</template>
	</BaseModal>
</template>
<script>
import BaseModal from './BaseModal.vue'
import BaseButton from './BaseButton.vue'
import BaseTextarea from './BaseTextarea.vue'
import TheSearchPredictionsList from './TheSearchPredictionsList.vue'
import TheSearchPredictionsCategories from './TheSearchPredictionsCategories.vue'

export default {
	components: { BaseModal, BaseButton, BaseTextarea, TheSearchPredictionsList, TheSearchPredictionsCategories },
	props: {
		searchPredictions: Array
	},
	data(){
		return {
			selectedSearchPredictions: [],
			selectedSearchPredictionsCategory: null,
			searchPredictionsDetails: '',
			searchPredictionsCategories: [
				'Hateful',
				'Sexually Explicit',
				'Violent',
				'Dangerous and harmful activity',
				'Other',
			]
		}
	}
}
</script>