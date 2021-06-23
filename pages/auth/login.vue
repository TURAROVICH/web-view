<template>
            <div class="w-full max-w-xs">
  <form @submit.prevent="set" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input v-model="login" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input v-model="password" class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
   
    </div>
                   <label
  class="my-8 w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
  <i class="fas fa-cloud-upload-alt fa-3x"></i>
  <span class="mt-2 text-base leading-normal">Select a file</span>
  <input ref="img" type='file' class="hidden" accept=".jpg, .jpeg, .png"/>
</label>

    <div class="flex items-center justify-between">
      <button type="submit" class="bg-blue-500 w-full focus:ring-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
         login
      </button>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>

</template>


<script>
export default {
    layout:'empty',
    data:()=>({
      login:'',
      password:'',
      img:null
    }),
    mounted(){
       this.img = this.$refs.img
    },
    methods:{
        set(){
          ///read a file
            const url = new Promise((res)=>{
            const file = this.img.files[0];
            const fileReader = new FileReader();
            fileReader.onload = function(progressEvent) {
                res(fileReader.result)
            }
            fileReader.readAsDataURL(file);      
            })
            ///end read a file
          url.then((u)=>{
            this.$store.dispatch('auth/fetchAuth',[this.login,this.password,u])

            
          this.login=''
          this.password =''
          this.$router.push('/')
          })
        }
    }
}
</script>