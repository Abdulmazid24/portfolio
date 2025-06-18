import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';

import Contact from '../pages/Contact';
import PricingPage from '../pages/Pricing';
import Services from '../pages/Services';
import Portfolio from '../pages/portfolio';
import ViewAllProjects from '../pages/ViewAllProjects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/pricing', element: <PricingPage /> },
      { path: '/services', element: <Services /> },
      { path: '/view-all-projects', element: <ViewAllProjects /> },
    ],
  },
]);

export default router;
