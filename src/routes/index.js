import BaseLayout from '../layouts/base-layout.component'
import AdminRoute from './admin'

export const createRoutes = (store) => ({
  path        : '/',
  component   : BaseLayout,
  // TODO leaders board wil be added index
  // indexRoute  : PlayersRoute(store),
  childRoutes : [
    AdminRoute(store)
  ]
})

export default createRoutes
