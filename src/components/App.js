import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

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

  // prevPlayerID = 4;

  handleAddPlayer = (name) => {

    this.setState(prevState => {
      const playerNum = prevState.players.length.toString();
      console.log(playerNum);
      return {
        players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: this.playerNum += 1
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header
          title='Scoreboard'
          players={this.state.players}
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

        <AddPlayerForm 
          addPlayer = {this.handleAddPlayer}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
