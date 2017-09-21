import PlayersRoute from './player'
import BaseLayout from '../../layouts/base-layout.component'

export const createRoutes = (store) => ({
  path        : 'admin',
  component   : BaseLayout,
  childRoutes : [
    PlayersRoute(store)
  ]
})

export default createRoutes
