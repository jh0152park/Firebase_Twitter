import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

export default function User() {
    return (
        <Box
            w="100%"
            mt="230px"
            pl="10px"
            pr="10px"
            py="5px"
            borderRadius="20px"
            _hover={{ cursor: "pointer", bgColor: "whiteAlpha.300" }}
        >
            <HStack w="100%" justifyContent="space-between">
                <HStack>
                    <Avatar w="40px" h="40px"></Avatar>
                    <VStack alignItems="flex-start" spacing="1">
                        <Text fontSize="15px" fontWeight="bold">
                            test
                        </Text>
                        <Text fontSize="15px" textColor="gray">
                            @testuser
                        </Text>
                    </VStack>
                </HStack>

                <Box>
                    <BsThreeDots />
                </Box>
            </HStack>
        </Box>
    );
}
