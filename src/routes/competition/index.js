import { injectReducer } from '../../store/reducers'
import { fetchCompetition } from './competition.module'

export default (store) => ({
  path: ':id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      console.log(nextState.params)
      const CompetitionShow = require('./competition-show.component').default
      const reducer = require('./competition.module').default
      injectReducer(store, {key: 'competition', reducer})
      fetchCompetition(nextState.params.id)(store.dispatch)
        .then(() => cb(null, CompetitionShow))
    }, ':id')
  }
})
