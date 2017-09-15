import PlayersRoute from './Players'
import BaseLayout from '../../layouts/BaseLayout'

export const createRoutes = (store) => ({
  path        : 'admin',
  component   : BaseLayout,
  // indexRoute  : PlayersRoute(store),
  childRoutes : [
    PlayersRoute(store)
  ]
})

export default createRoutes
