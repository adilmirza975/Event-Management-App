// routes/routes.js
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/about';
import Contact from '../pages/Contact/Contact';
import Events from '../pages/Events/Events';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path:'/', element: <Home /> }, 
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'events', element: <Events /> },
    ],
  },
]);

export default router;
