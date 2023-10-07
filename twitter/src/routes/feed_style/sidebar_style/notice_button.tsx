import { HStack, Text } from "@chakra-ui/react";
import { GoBell } from "react-icons/go";

export default function NoticeButton() {
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
            <GoBell />
            <Text fontSize="20px" fontWeight="bold" ml="10px">
                알림
            </Text>
        </HStack>
    );
}
