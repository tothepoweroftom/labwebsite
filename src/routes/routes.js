import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

import Projects from 'src/components/Dashboard/Views/Projects.vue'

const routes = [

  {
    path: '/',
    component: DashboardLayout,
    redirect: '/projects',
    children: [
      {
        path: 'projects',
        name: 'projects',
        component: Projects
      }
    ]
  },
  { path: '*', component: NotFound }
]

export default routes
