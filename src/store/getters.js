export default {
	powerCounter(state){
		return state.counter*state.counter
	},
	compute(state,getters){
		return getters.powerCounter/30
	},
	compute1(state){
		return (age)=>{
			return state.counter * age
		}
	}
}