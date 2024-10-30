import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Pages from './components/Pages'
import Pages2 from './components/Pages2'
import Pages3 from './components/Pages3'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/artikel",
    element: <Pages/>
  },
  {
    path: "/artikel2",
    element: <Pages2/>
  },
  {
    path: "/artikel3",
    element: <Pages3/>
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App