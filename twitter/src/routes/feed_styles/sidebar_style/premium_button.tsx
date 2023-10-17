import { HStack, Text, useToast } from "@chakra-ui/react";
import { RiTwitterXFill } from "react-icons/ri";

export default function PremiumButton() {
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
            <RiTwitterXFill />
            <Text fontSize="20px" fontWeight="bold" ml="10px">
                Premium
            </Text>
        </HStack>
    );
}
