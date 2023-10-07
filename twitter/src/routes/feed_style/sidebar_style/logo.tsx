import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Logo() {
    const navigate = useNavigate();

    return (
        <Box
            fontSize="35px"
            mt="5px"
            pl="10px"
            onClick={() => {
                navigate("/feed");
            }}
            _hover={{ cursor: "pointer" }}
            mb="30px"
        >
            𝕏
        </Box>
    );
}
