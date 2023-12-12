import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from '@/pages/Root';
import { Join } from '@/pages/Join';

import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
	},
	{
		path: 'join',
		element: <Join />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
