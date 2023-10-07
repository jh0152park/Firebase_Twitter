import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login_modal/login";
import CreateAccount from "./routes/login_modal/create_account";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase";
import Feed from "./routes/feed";
import ProtectedRoute from "./components/protected-route";

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
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                ),
            },
        ],
    },
    // {
    //     path: "/login",
    //     element: <Login></Login>,
    // },
    {
        path: "/feed",
        element: (
            <ProtectedRoute>
                <Feed />
            </ProtectedRoute>
        ),
    },
]);

function App() {
    const [isLoading, setIsLoading] = useState(true);

    async function init() {
        await auth.authStateReady();
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
