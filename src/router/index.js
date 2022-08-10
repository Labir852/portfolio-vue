import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../components/AboutPage.vue'
import HelloWorld from '../components/HelloWorld.vue'
import ProjectPage from '../components/ProjectPage.vue'
const routes = [
    { 
     path: '/',
     name:'HelloWorld',
     component: HelloWorld 
    },
    { 
     path: '/about',
     name:'AboutPage',
     component: AboutPage,
    },
    { 
     path: '/project',
     name: 'ProjectPage',
     component: ProjectPage 
    },
  ]
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router 
  
  