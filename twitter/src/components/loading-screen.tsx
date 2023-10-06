import { Box, Container, Text, VStack } from "@chakra-ui/react";

export default function LoadingScreen() {
    return (
        <Box
            w="100%"
            h="100vh"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Text fontSize={20}>Loading...</Text>
        </Box>
    );
}
