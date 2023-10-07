import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { RiHome7Fill } from "react-icons/ri";

export default function Sidebar() {
    const navigate = useNavigate();

    return (
        <VStack alignItems={"flex-start"}>
            <Box
                fontSize="40px"
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

            <HStack
                fontSize="30px"
                pl="10px"
                pr="20px"
                py="5px"
                borderRadius="20px"
                _hover={{ cursor: "pointer", bgColor: "whiteAlpha.300" }}
            >
                <RiHome7Fill />
                <Text fontSize="25px" fontWeight="bold" ml="10px">
                    홈
                </Text>
            </HStack>
        </VStack>
    );
}
