import { HStack, Text } from "@chakra-ui/react";
import { RiHome7Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function HomeButton() {
    const navigate = useNavigate();

    return (
        <HStack
            fontSize="30px"
            pl="10px"
            pr="20px"
            py="10px"
            borderRadius="30px"
            _hover={{ cursor: "pointer", bgColor: "whiteAlpha.300" }}
            mb="10px"
            onClick={() => {
                navigate("/feed");
            }}
        >
            <RiHome7Fill />
            <Text fontSize="20px" fontWeight="bold" ml="10px">
                홈
            </Text>
        </HStack>
    );
}
