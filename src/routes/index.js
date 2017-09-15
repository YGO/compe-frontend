import BaseLayout from '../layouts/BaseLayout'
import AdminRoute from './Admin'

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
