import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { useToast } from "@chakra-ui/react";

export default function ProtectedRoute({ children }: { children: any }) {
    const user = auth.currentUser;
    const toast = useToast();

    if (children) {
        if (!user) {
            toast({
                status: "warning",
                title: "Ain't logged in ⚠️",
                description: "Please login or sign in to 𝕏",
            });
            return <Navigate to="/" />;
        }

        return children;
    }
}
