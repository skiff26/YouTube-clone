<!-- <template>
	<input
	  type="checkbox"
	  class="h-5 w-5 cursor-pointer"
	  v-model="selectedSearchPredictions"
	/>
	<label v-if="$slots.default" :for="id" class="pl-4 cursor-pointer flex-grow">
	  <slot />
	</label>
 </template>
 
 <script>
 export default {
	props: {
	  id: Number,
	  modelValue: Array
	},
	data () {
		return {
			selectedSearchPredictions: this.modelValue
		}
	},
	watch: {
		selectedSearchPredicitions(){
			this.$emit('update:modelValue', this.selectedSearchPredictions)
		}
	}
 }
 </script> -->