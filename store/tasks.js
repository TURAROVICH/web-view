export const state = () => ( {
   tasks:[]
})

export const getters = {
    Tasks(state){
       return state.tasks
    }
}


export const actions = {
    fetchData({commit},data){
        commit('addTask',data)
    },
    removeTask({commit},data){
        commit('removeTask',data)
    }
}

export const mutations = {
    addTask(state,data){
       state.tasks.push(data)
    },
    removeTask(state,id){
        state.tasks.splice(id,1)
    }
}