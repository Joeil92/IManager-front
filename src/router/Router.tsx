import { Login } from "@/pages/login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
        loader: () => document.title = "IManager - Se connecter"
    }
]);

export default router;