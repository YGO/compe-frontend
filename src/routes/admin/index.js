import PlayersRoute from './players'
import BaseLayout from '../../layouts/BaseLayout'

export const createRoutes = (store) => ({
  path        : 'admin',
  component   : BaseLayout,
  childRoutes : [
    PlayersRoute(store)
  ]
})

export default createRoutes
