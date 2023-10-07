import {
    AbsoluteCenter,
    Box,
    Button,
    Divider,
    HStack,
    Heading,
    Image,
    Text,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import styled from "styled-components";
import CreateAccount from "./create_account";
import { useNavigate } from "react-router-dom";
import LoginAccount from "./login";

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
    const createAccount = useDisclosure();
    const loginAccount = useDisclosure();

    return (
        <>
            <Helmet>
                <title>X. 무슨 일이 일어나고 있나요? / X</title>
            </Helmet>
            <Box w="100%" h="100vh" position={"relative"}>
                <HStack pt="200px">
                    <Box
                        w="50%"
                        pl={"200px"}
                        minWidth={"320px"}
                        minHeight={"300px"}
                    >
                        <Image
                            // src="https://static.toiimg.com/thumb/msid-102075304,width-1280,height-720,resizemode-4/.jpg"
                            src="https://user-images.githubusercontent.com/118165975/273274005-628987c8-01e9-4c77-98b6-c22d7f938459.png"
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
                            w="300px"
                            h="40px"
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
                            w="300px"
                            h="40px"
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

                        <HStack w="300px" my={2}>
                            <Divider></Divider>
                            <Text as={"b"}>or</Text>
                            <Divider></Divider>
                        </HStack>

                        <Button
                            w="300px"
                            h="40px"
                            bgColor={"twitter.500"}
                            borderRadius="50px"
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            _hover={{ bgColor: "twitter.600" }}
                            onClick={createAccount.onOpen}
                        >
                            <Text fontWeight={"bold"} color={"white"}>
                                계정 만들기
                            </Text>
                        </Button>

                        <Box w="300px" fontSize={"12.1px"} opacity={"0.6"}>
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

                        <Button
                            w="300px"
                            h="40px"
                            colorScheme="none"
                            color={"whitesmoke"}
                            border="1px"
                            borderRadius="50px"
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            _hover={{ bgColor: "rgba(255,255,255,0.1)" }}
                            onClick={loginAccount.onOpen}
                        >
                            <Text fontWeight={"bold"} color={"twitter.500"}>
                                로그인
                            </Text>
                        </Button>
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

                <CreateAccount
                    isOpen={createAccount.isOpen}
                    onClose={createAccount.onClose}
                ></CreateAccount>
                <LoginAccount
                    isOpen={loginAccount.isOpen}
                    onClose={loginAccount.onClose}
                ></LoginAccount>
            </Box>
        </>
    );
}
