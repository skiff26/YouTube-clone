import DropdownSettingsListItem from "../components/DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "../components/DropdownSettingsHeader.vue";

export default {
	components: {
		DropdownSettingsListItem, DropdownSettingsHeader
	 },
	props: ['selectedOptions'], 
	emits: ['close', 'select-option'],
	data(){
		return {
			optionName: null
		}
	},
	methods: {
		selectOption(option){
			this.$emit('select-option', { name: this.optionName, value: option })
		}
	  },
}