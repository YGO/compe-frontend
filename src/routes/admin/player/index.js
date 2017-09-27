import { injectReducer } from '../../../store/reducers'

export default (store) => ({
  path: 'players',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const PlayerIndex = require('./player-index.component').default
      const reducer = require('./player.module').default
      injectReducer(store, {key: 'adminPlayers', reducer})
      cb(null, PlayerIndex)
    }, 'admin/players')
  }
})
