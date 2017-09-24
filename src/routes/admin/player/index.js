import { injectReducer } from '../../../store/reducers'
import { fetchPlayers } from './player.module'

export default (store) => ({
  path: 'players',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const PlayerIndex = require('./player-index.component').default
      const reducer = require('./player.module').default
      injectReducer(store, {key: 'adminPlayers', reducer})
      fetchPlayers()(store.dispatch)
      cb(null, PlayerIndex)
    }, 'admin/players')
  }
})
