import { Login } from "@/pages/login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    }
]);

export default router;