import BaseLayout from '../layouts/base-layout.component'
import AdminRoute from './admin'
import LeaderBoardsRoute from './leaderboards'

export const createRoutes = (store) => ({
  path        : '/',
  component   : BaseLayout,
  // TODO leaders board wil be added index
  indexRoute  : LeaderBoardsRoute(store),
  childRoutes : [
    AdminRoute(store),
    LeaderBoardsRoute(store)
  ]
})

export default createRoutes
