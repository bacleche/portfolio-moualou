<template>
    <div>
            <main class="flex-shrink-0">
                <NavBar />
                <SectionProjects />
            </main>
            <MyFooter />
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import MyFooter from '@/components/Footer.vue';
  import SectionProjects from '@/components/SectionProjects.vue';


  
  export default {
    name: 'ProjectView',
    components: {
      NavBar,
      MyFooter,
      SectionProjects,
    },
  };
  </script>
  
  
  <style scoped>
  /* Styles spécifiques au composant, ajoutés avec l'option "scoped" */
  </style>
  