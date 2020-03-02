import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Player from './Player';

class App extends Component{
  constructor(){
    super();
    this.state = {
      players: [
        {
          name: 'Rocha',
          score: 0,
          id: 1
        },
        {
          name: 'Treasure',
          score: 0,
          id: 2
        },
        {
          name: 'Ashley',
          score: 0,
          id: 3
        },
        {
          name: 'James',
          score: 0,
          id: 4
        }
      ]
    }
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    })
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header
          title='Scoreboard'
          totalPlayers={this.state.players.length}
        />
        {/* Players List */}
        {this.state.players.map((player, index) =>
          <Player
            playerName={player.name}
            score={player.score}
            id={player.id}
            index={index}
            key={player.id.toString()}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
