import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/route';


const API_KEY = '08996e49-95b0-4812-baa0-2690ac8ec0e1'

const App = () => {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
