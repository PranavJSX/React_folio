// import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes,Route, createBrowserRouter, RouterProvider} from "react-router-dom"
import { Main } from './Custom Components/Material/Shared/Main';


const router = createBrowserRouter([
  {
    path : "/",
    element : <Main/>
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
