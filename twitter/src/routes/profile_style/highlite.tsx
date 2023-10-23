import { Box, Center, Heading, Text, VStack, useToast } from "@chakra-ui/react";

// 2023.10.23 twitter challenge for user profile

export default function Highlight() {
    const toast = useToast();

    function NotSupport() {
        toast({
            status: "info",
            title: "Not supported",
            description: "Opps! we don't support this yet 🥹",
        });
    }

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
                <Heading fontSize="30px">
                    프로필에 하이라이트를 추가 하세요
                </Heading>
                <Text
                    color="rgba(255, 255, 255, 0.4)"
                    fontSize="15px"
                    mt="10px"
                >
                    프로필에 게시물을 하이라이트하려면 Premium을 구독해야
                    합니다.
                </Text>
                <Center
                    w="200px"
                    h="50px"
                    color="black"
                    bgColor="white"
                    fontWeight="bold"
                    borderRadius="30px"
                    mt="30px"
                    _hover={{
                        cursor: "pointer",
                        bgColor: "rgba(255, 255, 255, 0.9)",
                        transition: "all 0.1s linear",
                    }}
                    onClick={NotSupport}
                >
                    Premium 구독하기
                </Center>
            </Box>
        </Center>
    );
}
