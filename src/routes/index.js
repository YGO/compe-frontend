import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import CounterRoute from './Counter'
import PlayersRoute from './Players'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    CounterRoute(store),
    PlayersRoute(store),
  ]
})

export default createRoutes
