import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";

// 2023.10.23 twitter challenge for user profile

export default function Media() {
    return (
        <Center
            w="600px"
            h="100vh"
            bgColor="black"
            alignItems="flex-start"
            borderLeft="1px"
            borderRight="1px"
            borderColor="rgba(255, 255, 255, 0.2)"
            pt="40px"
        >
            <Box w="340px" h="210px">
                <Text fontSize="32px" fontWeight="extrabold">
                    조명, 카메라... 첨부!
                </Text>
                <Text
                    color="rgba(255, 255, 255, 0.4)"
                    fontSize="15px"
                    mt="15px"
                >
                    사진이나 동영상을 게시하면 여기에 나타납니다.
                </Text>
            </Box>
        </Center>
    );
}
