import { Avatar, Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { auth } from "../../../firebase";

export default function User() {
    const user = auth.currentUser;

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
                    <Avatar
                        w="40px"
                        h="40px"
                        src={user?.photoURL as string}
                        name={user?.displayName as string}
                    />
                    <VStack alignItems="flex-start" spacing="1">
                        <Text fontSize="15px" fontWeight="bold">
                            {user?.displayName}
                        </Text>
                        <Text fontSize="15px" textColor="gray">
                            @{user?.uid.slice(0, 10)}
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
