import { Box, Container, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function Header() {
    const [recommend, setRecommend] = useState(true);

    return (
        <Box
            w="598px"
            h="105px"
            position="fixed"
            top="0"
            borderBottom="1px"
            borderColor="rgba(255, 255, 255, 0.5)"
            bgColor="rgba(0, 0, 0, 0.8)"
        >
            <VStack alignItems="flex-start" h="100%">
                <Box
                    h="50%"
                    w="100%"
                    fontSize="20px"
                    fontWeight="bold"
                    color="white"
                    pt="10px"
                    pl="10px"
                >
                    홈
                </Box>
                <HStack h="50%" w="100%" spacing="0" mb="0" pb="0">
                    <Container
                        h="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        _hover={{
                            bgColor: "rgba(255, 255, 255, 0.1)",
                            cursor: "pointer",
                        }}
                        fontSize="15px"
                        fontWeight="bold"
                    >
                        <Box
                            p="15px"
                            borderBottom="4px"
                            borderColor={
                                recommend
                                    ? "twitter.500"
                                    : "rgba(255, 255, 255, 0)"
                            }
                            color={
                                recommend ? "white" : "rgba(255, 255, 255, 0.4)"
                            }
                            onClick={() => {
                                setRecommend(true);
                            }}
                        >
                            추천
                        </Box>
                    </Container>
                    <Container
                        h="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        _hover={{
                            bgColor: "rgba(255, 255, 255, 0.1)",
                            cursor: "pointer",
                        }}
                        fontSize="15px"
                        fontWeight="bold"
                    >
                        <Box
                            p="15px"
                            borderBottom="4px"
                            borderColor={
                                !recommend
                                    ? "twitter.500"
                                    : "rgba(255, 255, 255, 0)"
                            }
                            color={
                                !recommend
                                    ? "white"
                                    : "rgba(255, 255, 255, 0.4)"
                            }
                            onClick={() => {
                                setRecommend(false);
                            }}
                        >
                            팔로우 중
                        </Box>
                    </Container>
                </HStack>
            </VStack>
        </Box>
    );
}
