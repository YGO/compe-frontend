import { injectReducer } from '../../store/reducers'
import { fetchPlayers } from './competition.module'

export default (store) => ({
  path: 'pgateaching_201709',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const PlayerIndex = require('./competition-show.component').default
      const reducer = require('./competition.module').default
      injectReducer(store, {key: 'competition', reducer})
      fetchPlayers()(store.dispatch)
      cb(null, PlayerIndex)
    }, 'pgateaching_201709')
  }
})
