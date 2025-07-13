import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';

// Components
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';
import Cart from './Components/Cart';
import ErrorPage from './Components/ErrorPage';
import Profile from './Components/Profile';
import RestaurantMenu from './Components/RestaurantMenu';

// Lazy-loaded components
const Grocery = lazy(() => import('./Components/Grocery'));

// App Layout
const AppLayout = () => (
  <div id="App">
    <Header />
    <Outlet />
  </div>
);

// Router Configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Body /> },
      { path: 'home', element: <Body /> },
      { 
        path: 'grocery', 
        element: (
          <Suspense fallback={<div>Loading Grocery...</div>}>
            <Grocery />
          </Suspense>
        ) 
      },
      { path: 'about', element: <About /> },
      { path: 'cart', element: <Cart /> },
      { path: 'profile', element: <Profile /> },
      { path: 'restaurant/:id', element: <RestaurantMenu /> }
    ]
  }
]);

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);