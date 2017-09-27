import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'pgateaching_201709',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const CompetitionShow = require('./competition-show.component').default
      const reducer = require('./competition.module').default
      injectReducer(store, {key: 'competition', reducer})
      cb(null, CompetitionShow)
    }, 'pgateaching_201709')
  }
})
