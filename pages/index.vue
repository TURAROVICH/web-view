<template>
      <!-- <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-lg"> -->
          <div class="md:flex">
              <div class="w-full">
                <div class="h-14"></div>
                 
                <ul>
                     
                      <li v-for="(task,k) in tasks" key="k" @click="$router.push('/task/'+k)" class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                          <div class="flex ml-2"> <img :src="task.get('img')" width="40" height="40" class="rounded-full">
                              <div class="flex flex-col ml-2"> <span class="font-medium text-black truncate">{{task.get('title')}}</span>
                             <span class="text-sm text-gray-400 truncate w-32">{{task.get('des')}}</span> </div>
                          </div>
                          <div class="flex flex-col items-center"> <span class="text-gray-300">{{task.get('time').getHours()}}:{{task.get('time').getMinutes()}}</span> <i class="fa fa-star text-green-400"></i> </div>
                      </li>
             
                  </ul>
              </div>
          </div>
      <!-- </div> -->
</template>

<script>
export default {
  middleware:['auth'],
  asyncData({store}){
    return {tasks:store.getters['tasks/Tasks']}
  }
}
</script>

<style>
  /* width */
::-webkit-scrollbar {
  display: none;

}

/* Track */
::-webkit-scrollbar-track { 
   display: none;

}

/* Handle */
::-webkit-scrollbar-thumb {
  display: none;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  display: none;
}
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}


</style>
