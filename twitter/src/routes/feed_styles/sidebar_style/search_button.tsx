import { HStack, Text } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

export default function SearchButton() {
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
            <BiSearch />
            <Text fontSize="20px" fontWeight="bold" ml="10px">
                탐색하기
            </Text>
        </HStack>
    );
}
