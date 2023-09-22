import './TicTacToeStyles.css';
import { Link } from 'react-router-dom';

const TicTacToeView = (props) => {
  const { playOffline } = props;
  document.title = "TicTacToe";
  return (
    <div>
      <h2>Welcome to TicTacToe</h2>
      <b id="instructions">Would you like to play via online play or offline on the same screen?</b>
      <br />
      <button id="playOnlineButton">Play with online friend</button>
      <b>                        </b>
      <button onClick={playOffline} id="playOfflineButton">Play offline</button>

      <div>
        <table className='gameBoard'>
          <tbody>
            <tr >
              <td></td>
              <td className="vert"> O </td>
              <td></td>
            </tr>
            <tr>
              <td className="hori"> x </td>
              <td className="vert hori"></td>
              <td className="hori"></td>
            </tr>
            <tr>
              <td></td>
              <td className="vert"></td>
              <td></td>
            </tr>
          </tbody>

        </table>
      </div>
      <br />
      <Link to="../">return home</Link>
    </div>
  );
};


export default TicTacToeView;
