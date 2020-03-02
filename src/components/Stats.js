import React from 'react';

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

export default Stats;
