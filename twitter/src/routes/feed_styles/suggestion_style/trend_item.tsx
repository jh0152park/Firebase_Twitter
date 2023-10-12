import { Center, Text, VStack } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

interface ITrendItems {
    title: string;
    keyword: string;
    post: number;
}

export default function TrendItem({ title, keyword, post }: ITrendItems) {
    return (
        <VStack
            alignItems="flex-start"
            w="100%"
            h="80px"
            p="15px"
            position="relative"
            _hover={{ bgColor: "#18191C", cursor: "pointer" }}
        >
            <Text color="rgba(255, 255, 255, 0.5)" fontSize="13px">
                {title}
            </Text>
            <Text fontWeight="bold" fontSize="15px">
                {keyword}
            </Text>
            <Text color="rgba(255, 255, 255, 0.5)" fontSize="13px">
                {post.toLocaleString("ko-KR")} posts
            </Text>

            <Center
                w="30px"
                h="30px"
                borderRadius="50%"
                top="10px"
                right="10px"
                position="absolute"
                color="rgba(255, 255, 255, 0.5)"
                _hover={{
                    bgColor: "rgba(28, 141, 238, 0.3)",
                    color: "twitter.600",
                }}
            >
                <BsThreeDots />
            </Center>
        </VStack>
    );
}
