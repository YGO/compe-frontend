import { injectReducer } from '../../../store/reducers'
import { fetchPlayers } from './modules/player.module'

export default (store) => ({
  path: 'players',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const PlayerIndex = require('./components/player-index.component').default
      const reducer = require('./modules/player.module').default
      injectReducer(store, {key: 'adminPlayers', reducer})
      fetchPlayers()(store.dispatch)
      cb(null, PlayerIndex)
    }, 'players')
  }
})
