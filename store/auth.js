export const state = () => ( {
    password:null,
    login:null,
    img:null
})

export const getters = {
    isAuth(state){
        if(state.login && state.password){
            return true
        }else{
            return false
        }
    },
    name(s){
       return s.login
    },
    img:s=>s.img
    

}


export const actions = {
    fetchAuth({commit},data){

            commit('setAuth',data)        
    },
    logout({commit}){
        commit('logout')   
    }

}

export const mutations = {
    setAuth(state,data){
        state.login = data[0]
        state.password = data[1] 
        state.img = data[2]
    },
    logout:s=>{
        s.login=null
        s.password=null
        s.img = null
    }
    

}