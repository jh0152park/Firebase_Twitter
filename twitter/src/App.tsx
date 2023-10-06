import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create_account";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "",
                element: <Home></Home>,
            },
            {
                path: "profile",
                element: <Profile></Profile>,
            },
        ],
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/create-account",
        element: <CreateAccount></CreateAccount>,
    },
]);

function App() {
    const [isLoading, setIsLoading] = useState(true);

    async function init() {
        setIsLoading(false);
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <RouterProvider router={router}></RouterProvider>
            )}
        </>
    );
}

export default App;
