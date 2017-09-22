import { injectReducer } from '../../store/reducers'
import { fetchPlayers } from './modules/leadersboard.module'

export default (store) => ({
  path: 'pgateaching_201709',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const PlayerIndex = require('./components/leadersboard-index.component').default
      const reducer = require('./modules/leadersboard.module').default
      injectReducer(store, {key: 'leadersBoard', reducer})
      fetchPlayers()(store.dispatch)
      cb(null, PlayerIndex)
    }, 'pgateaching_201709')
  }
})
