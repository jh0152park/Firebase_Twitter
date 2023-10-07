import { HStack, Text } from "@chakra-ui/react";
import { BsBookmark } from "react-icons/bs";

export default function BookmarkButton() {
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
            <BsBookmark />
            <Text fontSize="20px" fontWeight="bold" ml="10px">
                북마크
            </Text>
        </HStack>
    );
}
