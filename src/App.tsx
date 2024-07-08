import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />
            // loader: rootLoader,
            // children: [
            //   {
            //     path: "team",
            //     element: <Team />,
            //     loader: teamLoader,
            //   },
            // ],
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
