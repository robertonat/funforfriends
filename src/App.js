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
      <RouterProvider router={router}>
      
      </RouterProvider> 
    </div>
  
  );
}

const Root = () => {
  return(
    <>
    <Header></Header>
    <div>
      <Outlet/>
    </div>
    </>
    
  )
  
}



export default App;
