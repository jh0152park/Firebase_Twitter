import { Box, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Logo() {
    const navigate = useNavigate();

    return (
        <Center
            fontSize="35px"
            mt="10px"
            pb="5px"
            onClick={() => {
                navigate("/feed");
            }}
            _hover={{ cursor: "pointer", bgColor: "whiteAlpha.300" }}
            mb="30px"
            w="50px"
            h="50px"
            borderRadius="50%"
        >
            𝕏
        </Center>
    );
}
