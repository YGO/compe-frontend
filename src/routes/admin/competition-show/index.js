import { injectReducer } from '../../../store/reducers'
import { fetchCompetition } from './competition-show.module'

export default (store) => ({
  path: 'competitions/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const CompetitionShow = require('./competition-show.component').default
      const reducer = require('./competition-show.module').default
      injectReducer(store, {key: 'adminApp', reducer})
      fetchCompetition(nextState.params.id)(store.dispatch)
        .then(() => cb(null, CompetitionShow))
    }, 'admin/competitions/:id')
  }
})
