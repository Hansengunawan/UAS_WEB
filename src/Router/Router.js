import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavigationBar from '../components/Navbar/NavigationBar';
import Login from '../components/Login/Login'
import LandingPage from '../components/User/LandingPageUser'

const router = createBrowserRouter([
    {
    element: <NavigationBar />,
    children: [
        {
        path: "/",
        element: <LandingPage />,
        },
        {
        path: "/data-insiden",
        // element:</>
        },
        {
        path: "/login-admin",
        element: <Login />,
        },
    ],
    },
]);

const NavbarRoute = () => {
    return (
    <div>
        <RouterProvider router={router} />
    </div>
    );
};

export default NavbarRoute;
