import { HStack, Text } from "@chakra-ui/react";
import { RiTwitterXFill } from "react-icons/ri";

export default function PremiumButton() {
    return (
        <HStack
            fontSize="30px"
            pl="10px"
            pr="20px"
            py="5px"
            borderRadius="20px"
            _hover={{ cursor: "pointer", bgColor: "whiteAlpha.300" }}
            mb="10px"
        >
            <RiTwitterXFill />
            <Text fontSize="20px" fontWeight="bold" ml="10px">
                Premium
            </Text>
        </HStack>
    );
}
