import Index from './App'
import games from './games'

export default [{

  path: '/',
  component: Index,
  children: [{
	    path: 'getGames',
	    component: games
	}]

}]