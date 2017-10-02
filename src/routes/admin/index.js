import CompetitionShowRoute from './competition-show'
import BaseLayout from '../../layouts/base-layout.component'

export const createRoutes = (store) => ({
  path: 'admin',
  component: BaseLayout,
  childRoutes: [
    CompetitionShowRoute(store),
  ]
})

export default createRoutes
