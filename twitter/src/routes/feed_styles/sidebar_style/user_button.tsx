import { Avatar, Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

export default function User() {
    return (
        <Center
            w="100%"
            h="60px"
            mt="210px"
            pl="10px"
            pr="10px"
            py="5px"
            borderRadius="50px"
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
        </Center>
    );
}
