import { Box, Text, VStack } from "@chakra-ui/react";
import TrendItem from "./trend_item";

export default function TrendBar() {
    const items = [
        {
            title: "뮤직 ∙ 실시간 트렌드",
            keyword: "DJ Khaled",
            post: 123927,
        },
        {
            title: "대한민국에서 트렌드 중",
            keyword: "허니콤보",
            post: 2832,
        },
        {
            title: "뉴스 ∙ 실시간 트렌드",
            keyword: "이스라엘",
            post: 23888,
        },
        {
            title: "노마드코더에서 트렌드 중",
            keyword: "트위터 업데이트 강의",
            post: 1228312,
        },
        {
            title: "노마드코더 스페셜 챌린지",
            keyword: "플러터 10주 스터디",
            post: 9172,
        },
    ];
    return (
        <VStack
            mt="20px"
            w="350px"
            bgColor="#121215"
            borderRadius="20px"
            alignItems="flex-start"
            spacing="0"
        >
            <Text fontWeight="bold" fontSize="20px" m="15px">
                나를 위한 트렌드
            </Text>
            {items.map((item, index) => (
                <TrendItem
                    key={index}
                    title={item.title}
                    keyword={item.keyword}
                    post={item.post}
                />
            ))}
            <Box h="20px"></Box>
        </VStack>
    );
}
