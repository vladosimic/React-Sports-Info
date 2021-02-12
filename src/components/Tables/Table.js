import React from "react";
import "./css/table.css";

const Table = ({ table }) => {
  return (
    <div>
      <h2>League Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gp</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>Sc</th>
            <th>P</th>
          </tr>
        </thead>
        <tbody>
          {table.map((item) => {
            const {
              strTeam,
              intWin,
              intDraw,
              intGoalsFor,
              intGoalsAgainst,
              intPlayed,
              intPoints,
              idTeam,
              intLoss,
            } = item;
            return (
              <tr key={idTeam}>
                <td>{strTeam}</td>
                <td>{intPlayed}</td>
                <td>{intWin}</td>
                <td>{intDraw}</td>
                <td>{intLoss}</td>
                <td>
                  {intGoalsFor}:{intGoalsAgainst}
                </td>
                <td>{intPoints}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
