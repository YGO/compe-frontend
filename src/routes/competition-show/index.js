import { injectReducer } from '../../store/reducers'
import { fetchCompetition } from './competition-show.module'

export default (store) => ({
  path: ':id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const CompetitionShow = require('./competition-show.component').default
      const reducer = require('./competition-show.module').default
      injectReducer(store, {key: 'mainApp', reducer})
      fetchCompetition(nextState.params.id)(store.dispatch)
      cb(null, CompetitionShow)
    }, ':id')
  }
})
