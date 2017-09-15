import CoreLayout from '../layouts/PageLayout/PageLayout'
import PlayersRoute from './Players'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : PlayersRoute(store),
  childRoutes : [
    PlayersRoute(store)
  ]
})

export default createRoutes
