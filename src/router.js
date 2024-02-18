import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ResumeView from './views/ResumeView.vue';
import ProjectView from './views/ProjectView.vue';
import ContactView from './views/ContactView.vue';



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/resume',
      name: 'ResumeView',
      component: ResumeView,
    },
    {
      path: '/projects',
      name: 'ProjectView',
      component: ProjectView,
    },
    {
      path: '/contact',
      name: 'ContactView',
      component: ContactView,
    },
  ],
});

export default router;
