import { HStack, Text, VStack } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

export default function SideFooter() {
    return (
        <VStack
            mt="20px"
            w="350px"
            h="100px"
            // bgColor="#121215"
            borderRadius="20px"
            alignItems="flex-start"
            spacing="0"
            fontSize="13px"
            color="rgba(255,255,255,0.4)"
            px="15px"
            gap="2"
        >
            <HStack spacing="3">
                <Text
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                    이용약관
                </Text>
                <Text
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                    개인정보 처리방침
                </Text>
                <Text
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                    쿠키 정책
                </Text>
                <Text
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                    접근성
                </Text>
            </HStack>
            <HStack spacing="3">
                <Text
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                    광고 정보
                </Text>
                <Text
                    _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                    더 보기
                </Text>
                <Text ml="-10px">
                    <BsThreeDots />
                </Text>
                <Text>ⓒ 2023 X Corp.</Text>
            </HStack>
        </VStack>
    );
}
