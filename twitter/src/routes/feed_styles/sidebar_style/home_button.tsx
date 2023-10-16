import { HStack, Text } from "@chakra-ui/react";
import { RiHome7Fill } from "react-icons/ri";

export default function HomeButton() {
    return (
        <HStack
            fontSize="30px"
            pl="10px"
            pr="20px"
            py="10px"
            borderRadius="30px"
            _hover={{ cursor: "pointer", bgColor: "whiteAlpha.300" }}
            mb="10px"
        >
            <RiHome7Fill />
            <Text fontSize="20px" fontWeight="bold" ml="10px">
                홈
            </Text>
        </HStack>
    );
}
