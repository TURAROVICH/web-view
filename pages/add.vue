<template>
    <div style="position:absolute;margin-top:30px;" class="main w-full">
       <div class="mt-10 sm:mt-0 w-full">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Task Information</h3>
          <p class="mt-1 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form @submit.prevent="addTask" action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first_name" class="block text-sm font-medium text-gray-700">Title</label>
                  <input v-model="title" type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="last_name" class="block text-sm font-medium text-gray-700">Description</label>
                  <textarea v-model="des" type="text" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                  </textarea>
                
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">Complexity</label>
                  <select v-model="complexity" id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Simple</option>
                    <option>Middle</option>
                    <option>Hard</option>
                  </select>
                </div>
             
                <label
  class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
  <i class="fas fa-cloud-upload-alt fa-3x"></i>
  <span class="mt-2 text-base leading-normal">Select a file</span>
  <input ref="img" type='file' class="hidden" accept=".jpg, .jpeg, .png"/>
</label>

              </div>
            </div>
            <div class="px-4 py-3 my-12 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
</template>


<script>
export default {
   middleware:['auth'],
    layout:'add',
    data:()=>({
        title:'',
        des:'',
        complexity:'',
        img:''
    }),
    mounted(){
        this.img = this.$refs.img
    },
    methods:{
        addTask(){

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
            
            url.then(u => {
            const data= new Map()
            data.set('title',this.title)
            data.set('des',this.des)
            data.set('complexity',this.complexity)
            
            data.set('img',u)
            data.set('time',new Date())
            console.log(u);
            this.$store.dispatch('tasks/fetchData',data)



                  this.title=''
                  this.des=''
                  this.complexity=''
                  this.data=null
            })

        }
    },
    destroyed(){
        this.img=null
        this.title=''
        this.des=''
        this.complexity=''
        this.data=null
    },

}
</script>