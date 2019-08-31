import adminLayout from 'layouts/adminLayout'
import signinLayout from 'layouts/signinLayout'
import dashboardLayout from 'layouts/dashboardLayout'
import signinc from 'pages/signin'
import dashboardp from 'pages/dashboardp'
import dashboardt from 'pages/dashboardt'
import admin from 'pages/admin'
import err404 from 'pages/Error404'

const routes = [
  {
    path: '/',
    component: signinLayout,
    children: [{ path: '', component: signinc }]
  },
  {
    path: '/dashboard',
    component: dashboardLayout,
    children: [{ path: 'p', component: dashboardp }, { path: 't', component: dashboardt }],
    meta: { requiresAuth: true }
  },
  {
    path: '/admin',
    component: adminLayout,
    children: [{ path: '', component: admin, meta: { requiresAuth: true } }]
  }
]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: err404
  })
}
export default routes
