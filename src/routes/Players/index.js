import { injectReducer } from '../../store/reducers'
import { initPlayers } from './modules/players'

export default (store) => ({
  path: 'players',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const PlayersView = require('./components/PlayersView').default
      const reducer = require('./modules/players').default

      injectReducer(store, { key: 'playersApp', reducer })

      fetch('https://lyywnpoayb.execute-api.ap-northeast-1.amazonaws.com/staging/players')
        .then(res => res.json())
        .then(players => {
          store.dispatch(initPlayers(players))
          // If you want to wait for getting data to show page
          // cb(null, PlayersView)
        })


      cb(null, PlayersView)
    }, 'players')
  }
})
