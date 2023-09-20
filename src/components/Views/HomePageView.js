import { Link } from "react-router-dom";

const HomePageView = () => {
  document.title = "Home";
  return (
    <div>
      <h2>Welcome to FunForFriends</h2>
        <br/>
        <Link to={"/TTT"}>TicTacToe</Link>    
      
    </div>
  );
};


export default HomePageView;
