import { injectReducer } from '../../../store/reducers'
import { fetchCompetition } from './player.module'

export default (store) => ({
  path: 'competitions/:competition_id/players',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const PlayerIndex = require('./player-index.component').default
      const reducer = require('./player.module').default
      injectReducer(store, {key: 'adminPlayers', reducer})
      fetchCompetition(nextState.params.competition_id)(store.dispatch)
        .then(() => cb(null, PlayerIndex))
    }, 'admin/competitions/:competition_id/players')
  }
})
