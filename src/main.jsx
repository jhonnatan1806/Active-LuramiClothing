import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Join } from '@/pages/Join';
import { Home } from '@/pages/Home';
import { Root } from '@/pages/v1/Root';

import './index.css';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
	},
  {
    path: 'demo',
    element: <Home />,
  },
	{
		path: 'join',
		element: <Join />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
