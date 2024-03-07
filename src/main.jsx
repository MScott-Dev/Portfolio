// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DashboardPage from './pages/Dashboard.jsx';
import AboutPage from './pages/About.jsx';
import ProjectsPage from './pages/Projects.jsx';
import ContactPage from './pages/Contact.jsx';
import ResumePage from './pages/Resume.jsx';
import ErrorPage from './pages/Error.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '/About',
        element: <AboutPage />,
      },
      {
        path: '/Projects',
        element: <ProjectsPage />,
      },
      {
        path: '/Contact',
        element: <ContactPage />,
      },
      {
        path: '/Resume',
        element: <ResumePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
