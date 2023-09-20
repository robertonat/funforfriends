import './TicTacToeStyles.css';
import { Link } from 'react-router-dom';

const TicTacToeView = () => {
  document.title = "TicTacToe";
  return (
    <div>
      <h2>Welcome to TicTacToe</h2>
      <b>Would you like to play via online play or offline on the same screen?</b>
      <br />
      <button>Play with online friend</button>
      <b>                        </b>
      <button>Play offline</button>

      <div>
        <table>
          <tr>
            <td></td>
            <td class="vert"> O </td>
            <td></td>
          </tr>
          <tr>
            <td class="hori"> x </td>
            <td class="vert hori"></td>
            <td class="hori"></td>
          </tr>
          <tr>
            <td></td>
            <td class="vert"></td>
            <td></td>
          </tr>
        </table>
      </div>
      <br/>
      <Link to = "../">return home</Link>
    </div>
  );
};


export default TicTacToeView;
