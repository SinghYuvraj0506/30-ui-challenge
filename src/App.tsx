import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import { Toaster } from 'react-hot-toast';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />
        }
    ]);

    return (
        <>
            <RouterProvider router={router} />;
            <Toaster position='top-right' reverseOrder={true} />
        </>
    );
}

export default App;
