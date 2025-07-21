// App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';

import './index.css'


import { Home } from './pages/Home';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { Contact } from './pages/Contact';
import { ErrorPage } from './pages/ErrorPage';
import { EventDetails } from './components/layout/EventDetails';

const router = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[

      {
        path:'/',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'events',
        element:<Events/>
      },
      {
        path:'Contact',
        element:<Contact/>
      },

      // using ":" after a forward slash make your route dynamic ,which here we are using in EventCard.jsx with the read more button functionality
      {
    path:"events/:id",
    element:<EventDetails/>
  }  
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
