<template>
<div>
        <nav class="fixed w-full min-h-8 z-50 font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
      <div class="mb-2 sm:mb-0 inner flex items-center justify-between">
    
        <img @click="modal" :src="$store.getters['auth/img']" width="40" height="40" class="rounded-full">
        <span class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold ">{{title}}</span>
    
      </div>
    </nav>

     <transition name="slide-fade">
 
         <div style="z-index:51;top:66px;backdrop-filter: blur(8px);" v-if="fade" class=" py-8 px-8 fixed w-full h-full  flex justify-start items-start">
            <div class="text-gray-800 flex flex-col gap-4 text-2xl">
                <h1 class="text-3xl">{{$store.getters['auth/name']}}</h1>
                <h1 @click="$router.push('/add')">add</h1>
                <h1 @click="fade=false">all</h1>
                <h1 @click="$store.dispatch('auth/logout');$router.push('/auth/login')">logout</h1>

            </div>
         </div>

     </transition>
    </div>
</template>

<script>
export default {
    props:['title'],
    data:()=>({fade:false}),
    methods:{
      modal(){
         this.fade = !this.fade
      }
    }
}
</script>


<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100px);
  opacity: 0;
}
</style>