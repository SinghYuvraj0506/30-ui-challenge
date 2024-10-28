import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import { Toaster } from 'react-hot-toast';
import Typography from './pages/Typography/Index';
import Color from './pages/Color/Index';
import Navbar from './components/Navbar';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/typography',
            element: <Typography />
        },
        {
            path: '/color-palette',
            element: <Color />
        }
    ])

    return (
        <div className='w-full relative'>
            <Navbar />
            <RouterProvider router={router} />
            <Toaster position="top-right" reverseOrder={true} />
        </div>
    )
}

export default App;
