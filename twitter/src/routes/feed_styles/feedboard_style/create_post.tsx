import { Box, HStack, VStack } from "@chakra-ui/react";

export default function CreatePost() {
    return (
        <VStack
            w="100%"
            h="105px"
            borderBottom="1px"
            borderColor="rgba(255, 255, 255, 0.5)"
        >
            <HStack h="50%" w="100%" bgColor="pink"></HStack>
            <Box h="50%" w="100%" bgColor="yellow"></Box>
        </VStack>
    );
}
