import React, {PureComponent} from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import Icon from './Icon';

class Player extends PureComponent {

  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    playerName: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  };

  render() {
    const {
      removePlayer,
      playerName,
      score,
      index,
      id,
      changeScore
    } = this.props;
    
    return (
      <div className='player'>
        <span className='player-name'>
          <button
            className='remove-player'
            onClick={() => removePlayer(id)}
            >x
          </button>
          <Icon isHighScore={this.props.isHighScore}/>
          {playerName}
        </span>
        <Counter 
          score={score}
          index={index}
          changeScore={changeScore}
        />
      </div>
    );
  }
};

export default Player;