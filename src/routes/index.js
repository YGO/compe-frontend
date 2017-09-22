import BaseLayout from '../layouts/base-layout.component'
import AdminRoute from './admin'
import LeadersBoardRoute from './leadersboard'

export const createRoutes = (store) => ({
  path        : '/',
  component   : BaseLayout,
  childRoutes : [
    AdminRoute(store),
    LeadersBoardRoute(store)
  ]
})

export default createRoutes
