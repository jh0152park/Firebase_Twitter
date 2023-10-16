import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import OptionButton from "./option_button";

export default function Option() {
    return (
        <HStack
            w="100%"
            h="50px"
            mt="20px"
            spacing="0"
            justifyContent="space-evenly"
            color="rgba(255, 255, 255, 0.4)"
            fontSize="15px"
            fontWeight="bold"
        >
            <OptionButton option="게시물" width={60} />
            <OptionButton option="답글" width={60} />
            <OptionButton option="하이라이트" width={65} />
            <OptionButton option="미디어" width={60} />
            <OptionButton option="마음에 들어요" width={80} />
            {/* <VStack
                h="100%"
                w="100%"
                _hover={{
                    cursor: "pointer",
                    bgColor: "rgba(255, 255, 255, 0.1)",
                    transition: "all 0.1s linear",
                }}
                justifyContent="center"
                alignItems="center"
                spacing="0"
            >
                <Text py="10px" mt="5px">
                    게시물
                </Text>
                <Box
                    w="50px"
                    h="5px"
                    bgColor="twitter.500"
                    borderRadius="10px"
                />
            </VStack>
            <Center
                h="100%"
                w="100%"
                _hover={{
                    cursor: "pointer",
                    bgColor: "rgba(255, 255, 255, 0.1)",
                    transition: "all 0.1s linear",
                }}
            >
                답글
            </Center>
            <Center
                h="100%"
                w="100%"
                _hover={{
                    cursor: "pointer",
                    bgColor: "rgba(255, 255, 255, 0.1)",
                    transition: "all 0.1s linear",
                }}
            >
                하이라이트
            </Center>
            <Center
                h="100%"
                w="100%"
                _hover={{
                    cursor: "pointer",
                    bgColor: "rgba(255, 255, 255, 0.1)",
                    transition: "all 0.1s linear",
                }}
            >
                미디어
            </Center>
            <Center
                h="100%"
                w="100%"
                _hover={{
                    cursor: "pointer",
                    bgColor: "rgba(255, 255, 255, 0.1)",
                    transition: "all 0.1s linear",
                }}
            >
                마음에 들어요
            </Center> */}
        </HStack>
    );
}
