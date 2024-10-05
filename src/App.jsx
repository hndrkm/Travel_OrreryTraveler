import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom';

import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>

  </Route>
  )
);


export default function App() {
  return (
<RouterProvider router={router} />
  );
}
