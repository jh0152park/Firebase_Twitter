import { HStack, Text, useToast } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

export default function SearchButton() {
    const toast = useToast();

    function NotSupport() {
        toast({
            status: "info",
            title: "Not supported",
            description: "Opps! we don't support this yet 🥹",
        });
    }

    return (
        <HStack
            fontSize="30px"
            pl="10px"
            pr="20px"
            py="10px"
            borderRadius="30px"
            _hover={{ cursor: "pointer", bgColor: "whiteAlpha.300" }}
            mb="10px"
            onClick={NotSupport}
        >
            <BiSearch />
            <Text fontSize="20px" fontWeight="bold" ml="10px">
                탐색하기
            </Text>
        </HStack>
    );
}
