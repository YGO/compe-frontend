import BaseLayout from '../layouts/base-layout.component'
import AdminRoute from './admin'
import CompetitionShowRoute from './competition-show'

export const createRoutes = (store) => ({
  path        : '/',
  component   : BaseLayout,
  childRoutes : [
    AdminRoute(store),
    CompetitionShowRoute(store)
  ]
})

export default createRoutes
