<template>
    <div>
            <main class="flex-shrink-0">
                <NavBar />
                <ContactComponents />
            </main>
        
            <MyFooter />
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import MyFooter from '@/components/Footer.vue';
  import ContactComponents from '@/components/ContactComponents.vue';
  export default {
    name: 'ContactView',
    components: {
      NavBar,
      MyFooter,
      ContactComponents,
    },
  };
  </script>
  
  
  <style scoped>
  /* Styles spécifiques au composant, ajoutés avec l'option "scoped" */
  </style>
  