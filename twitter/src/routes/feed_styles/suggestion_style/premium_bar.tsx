import { Box, Heading, Text, VStack, useToast } from "@chakra-ui/react";

export default function PremiumBar() {
    const toast = useToast();

    function NotSupport() {
        toast({
            status: "info",
            title: "Not supported",
            description: "Opps! we don't support this yet 🥹",
        });
    }

    return (
        <VStack
            w="350px"
            h="150px"
            bgColor="#121215"
            borderRadius="20px"
            p="15px"
            mt="-50px"
            alignItems="flex-start"
        >
            <Text fontWeight="bold" fontSize="20px">
                Premium 구독하기
            </Text>
            <Text fontWeight="bold" fontSize="15px" lineHeight="1.3" pt="5px">
                구독하여 새로운 기능을 이용해 보세요. 자격을 충족하는 경우 광고
                수익 배분금도 받을 수 있습니다.
            </Text>
            <Box
                mt="5px"
                w="90px"
                h="35px"
                bgColor="twitter.500"
                borderRadius="60px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontWeight="bold"
                _hover={{
                    cursor: "pointer",
                    bgColor: "twitter.600",
                    transition: "all 0.1s linear",
                }}
                onClick={NotSupport}
            >
                게시하기
            </Box>
        </VStack>
    );
}
