import BaseLayout from '../layouts/base-layout.component'
import AdminRoute from './admin'
import CompetitionRoute from './competition'

export const createRoutes = (store) => ({
  path        : '/',
  component   : BaseLayout,
  childRoutes : [
    AdminRoute(store),
    CompetitionRoute(store)
  ]
})

export default createRoutes
