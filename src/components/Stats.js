import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {

  const totalPlayer=props.players.length;
  const totalPoints= props.players.reduce((total, totalScore) => {
    return total + totalScore.score
  }, 0);
  
  return (
    <table>
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayer}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
}

export default Stats;
