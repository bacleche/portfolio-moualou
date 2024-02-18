<template>
    <div>
            <main class="flex-shrink-0">
                <NavBar />
                <BodyResume />
            </main>
            <MyFooter />
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import MyFooter from '@/components/Footer.vue';
  import BodyResume from '@/components/BodyResume.vue';

  
  export default {
    name: 'ResumeView',
    components: {
      NavBar,
      MyFooter,
      BodyResume,
    },
  };
  </script>
  
  
  <style scoped>
  /* Styles spécifiques au composant, ajoutés avec l'option "scoped" */
  </style>
  