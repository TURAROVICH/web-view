<template>
    <div class="h-screen    left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"  id="modal-id">
   	<div class="absolute  inset-0 z-0"></div>
<div class="relative min-h-screen flex flex-col items-center justify-center "> 
    <div class="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div class="flex flex-col">
            <div class="bg-white shadow-md  rounded-3xl p-4">
                <div class="flex-none lg:flex">
                    <div class=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                        <img :src="task.get('img')"
                            alt="Just a flower" class=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl">
                    </div>
                    <div class="flex-auto ml-3 justify-evenly py-2">
                        <div class="flex flex-wrap ">
                            <h2 class="flex-auto text-lg font-medium">{{task.get('title')}}</h2>
                        </div>
                        <p class="mt-3"></p>
                        <div class="flex py-4  text-sm text-gray-600">
                           
                            <div class="flex-1 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <p class="">{{task.get('time').getDay()}}-{{task.get('time').getDate()}}-{{task.get('time').getFullYear()}}</p>
                            </div>

                            <div class="mb-2 md:mb-0 
                            px-5 py-2 shadow-sm tracking-wider border rounded-full
                            inline-flex items-center space-x-2 

                            "
                            :class="{'bg-red-500':task.get('complexity')=='Hard',
                            'bg-green-500':task.get('complexity')=='Middle',
                            'bg-white':task.get('complexity')=='Simple'
                            }"
                            >
                            <span class="text-white" :class="{'text-green-500':task.get('complexity')=='Simple'}">{{task.get('complexity')}}</span></div>

    
                        </div>
                                   	<p class="text-gray-500 text-base my-8 w-4/5">{{task.get('des')}}</p>
			
                        <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div class="flex space-x-3 text-sm font-medium">
                            <div class="flex-auto flex space-x-3">
                                <button 
                                    @click="del"
                                    class="mb-2 md:mb-0 bg-red-500  px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                    <span class="text-gray-50">remove</span>
                                </button>
                            </div>
                            <!-- edit button -->
                            <!-- <button
                                class="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                type="button" aria-label="like">Edit task</button> -->

                           <!-- end edit button -->
                        </div>
                    </div>
                </div>
     
            </div>
        </div>
    </div>
</div>
</div>
</template>


<script>
export default {
     middleware:['auth'],
    layout:'task',
    data:()=>({
      task:''
    }),
    created(){
        this.task =this.$store.getters['tasks/Tasks'][this.$route.params.id]
    },
    methods:{
        del(){
            this.$router.push('/')
            this.$store.dispatch('tasks/removeTask',this.$route.params.id)
        }
    }
}
</script>