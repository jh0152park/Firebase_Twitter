import {
    AbsoluteCenter,
    Box,
    Divider,
    HStack,
    Heading,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import styled from "styled-components";

const Hightlighter = styled.span`
    color: "#61b1fd";
    font-weight: "bolder";
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const FooterStyle = styled.div`
    opacity: 0.6;
    font-size: 13px;
    margin-left: 4px;
    margin-right: 4px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const footer = [
    "소개",
    "고객센터",
    "이용약관",
    "개인정보 처리방침",
    "쿠키 정책",
    "접근성",
    "광고 정보",
    "블로그",
    "상태",
    "채용",
    "브랜드 리소스",
    "광고",
    "마케팅",
    "비즈니스용 X",
    "개발자",
    "디렉터리",
    "설정",
    "© 2023 X Corp.",
];

export default function Home() {
    return (
        <>
            <Helmet>
                <title>X. 무슨 일이 일어나고 있나요? / X</title>
            </Helmet>
            <Box w="100%" h="100vh" position={"relative"}>
                <HStack pt="200px">
                    <Box w="50%" pl={20}>
                        <Image
                            src="https://static.toiimg.com/thumb/msid-102075304,width-1280,height-720,resizemode-4/.jpg"
                            objectFit={"cover"}
                        />
                    </Box>
                    <VStack w="50%" alignItems={"flex-start"}>
                        <Heading color={"whitesmoke"} fontSize={70}>
                            지금 일어나고 있는 일
                        </Heading>

                        <Heading
                            color={"whitesmoke"}
                            fontSize={35}
                            mt={10}
                            mb={5}
                        >
                            지금 가입하세요
                        </Heading>

                        <Box
                            w="35%"
                            h="45px"
                            mb={2}
                            bgColor={"white"}
                            borderRadius="50px"
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <HStack>
                                <FcGoogle size={"25px"} />
                                <Text color={"black"}>
                                    Google 계정으로 가입하기
                                </Text>
                            </HStack>
                        </Box>

                        <Box
                            w="35%"
                            h="45px"
                            bgColor={"white"}
                            borderRadius="50px"
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <HStack>
                                <FaApple color="black" size={"25px"} />
                                <Text fontWeight={"bold"} color={"black"}>
                                    Apple에서 가입하기
                                </Text>
                            </HStack>
                        </Box>

                        <HStack w="35%" my={2}>
                            <Divider></Divider>
                            <Text as={"b"}>or</Text>
                            <Divider></Divider>
                        </HStack>

                        <Box
                            w="35%"
                            h="45px"
                            bgColor={"twitter.500"}
                            borderRadius="50px"
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Text fontWeight={"bold"} color={"white"}>
                                계정 만들기
                            </Text>
                        </Box>

                        <Box w="35%" fontSize={"12.1px"} opacity={"0.6"}>
                            <span>
                                가입하시려면{" "}
                                <Hightlighter
                                    style={{
                                        color: "#61b1fd",
                                        fontWeight: "bolder",
                                    }}
                                >
                                    쿠키 사용
                                </Hightlighter>
                                을 포함해{" "}
                                <Hightlighter
                                    style={{
                                        color: "#61b1fd",
                                        fontWeight: "bolder",
                                    }}
                                >
                                    이용약관
                                </Hightlighter>
                                과{" "}
                                <Hightlighter
                                    style={{
                                        color: "#61b1fd",
                                        fontWeight: "bolder",
                                    }}
                                >
                                    개인정보 처리방침
                                </Hightlighter>
                                에 동의해야 합니다.
                            </span>
                        </Box>

                        <Heading fontSize={20} mt="55px" mb="15px">
                            이미 트위터에 가입하셨나요?
                        </Heading>

                        <Box
                            w="35%"
                            h="45px"
                            color={"whitesmoke"}
                            border="1px"
                            borderRadius="50px"
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Text fontWeight={"bold"} color={"twitter.500"}>
                                로그인
                            </Text>
                        </Box>
                    </VStack>
                </HStack>

                <HStack
                    position={"absolute"}
                    bottom={5}
                    w="100%"
                    justifyContent={"center"}
                >
                    {footer.map((str, index) => (
                        <FooterStyle key={index}>{str}</FooterStyle>
                    ))}
                </HStack>
            </Box>
        </>
    );
}
