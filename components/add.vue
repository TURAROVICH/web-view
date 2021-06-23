<template>
        <nav style="margin-top:0px;" class="fixed w-full min-h-8 z-50 font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
      <div class="mb-2 sm:mb-0 inner flex items-center justify-between">
    
        <img @click="$router.go(-1)" src="../assets/arrow-left.png" class="rounded-full">
        <span class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold ">{{title}}</span>
    
      </div>
    </nav>
</template>

<script>
export default {
    props:['title']
}
</script>