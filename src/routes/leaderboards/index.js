import { injectReducer } from '../../store/reducers'
import { fetchPlayers } from './modules/leaderboard.module'

export default (store) => ({
  path: 'leaderboards',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const PlayerIndex = require('./components/player-index.component').default
      const reducer = require('./modules/leaderboard.module').default
      injectReducer(store, {key: 'leaderBoards', reducer})
      fetchPlayers()(store.dispatch)
      cb(null, PlayerIndex)
    }, 'players')
  }
})
