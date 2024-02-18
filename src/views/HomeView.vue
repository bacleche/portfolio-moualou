<template>
    <div>
            <main class="flex-shrink-0">
                <NavBar />
                <HeaderVue />
                <AboutMe />
            </main>
        
            <MyFooter />
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import MyFooter from '@/components/Footer.vue';
  import AboutMe from '@/components/AboutMe.vue';
  import HeaderVue from '@/components/HeaderVue.vue';

  
  export default {
    name: 'HomeView',
    components: {
      NavBar,
      MyFooter,
      AboutMe,
      HeaderVue,
    },
  };
  </script>
  
  
  <style scoped>
  /* Styles spécifiques au composant, ajoutés avec l'option "scoped" */
  </style>
  