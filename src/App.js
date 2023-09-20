import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from "react-router-dom";

import { Header } from './components/Views'

import {
  TicTacToeContainer,
  HomePageContainer
} from './components/Containers'



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<HomePageContainer/>}/>
        <Route path="/TTT" element = {<TicTacToeContainer/>} />

      </Route>
    )

  );
  return (
    <div className="App">
      <Header/>
      <RouterProvider router={router} /> 
    </div>
  );
}

const Root = () => {
  return(
    <>
    <diu>
      <Outlet/>
    </diu>
    </>
    
  )
  
}



export default App;
