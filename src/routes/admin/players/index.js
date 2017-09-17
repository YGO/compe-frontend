import { injectReducer } from '../../../store/reducers'
import { fetchPlayers } from './modules/player.module'

export default (store) => ({
  path: 'players',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const PlayersView = require('./components/player-index.component').default
      const reducer = require('./modules/player.module').default
      injectReducer(store, {key: 'playersApp', reducer})
      fetchPlayers()(store.dispatch)
      cb(null, PlayersView)
    }, 'players')
  }
})
