import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import {
  TicTacToeContainer
} from './components/Containers'



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<TicTacToeContainer/>}>
        <Route element = {<TicTacToeContainer/>} />

      </Route>
    )

  );
  return (
    <div className="App">
      <RouterProvider router={router} /> 
    </div>
  );
}



export default App;
