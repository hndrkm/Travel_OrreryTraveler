import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom';

import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import LearnMore from './pages/LearnMore';
import Info from './pages/Info';
import OurModel from './pages/OurModel';
import MecanicModel from './pages/MecanicModel';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/learnmore' element={<LearnMore/>}/>
    <Route path='/learnmore/info' element={<Info/>}/>
    <Route path='/learnmore/ourmodel' element={<OurModel/>}/>
    <Route path='/learnmore/mecanic' element={<MecanicModel/>}/>

  </Route>
  )
);


export default function App() {
  return (
<RouterProvider router={router} />
  );
}
