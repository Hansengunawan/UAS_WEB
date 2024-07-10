import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsLayout from '../components/User/DetailBerita'
import News from '../components/User/Berita'

const router = createBrowserRouter([
    {
    element: <News/>,
    children: [
        {
        path: "/detail-berita",
        element: <NewsLayout />,
        }
    ],
    },
]);

const NewsRoute = () => {
    return (
    <div>
        <RouterProvider router={router} />
    </div>
    );
};

export default NewsRoute;
