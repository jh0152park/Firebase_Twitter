import {
    Box,
    Button,
    Divider,
    FormControl,
    HStack,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Select,
    Spinner,
    Text,
    useToast,
} from "@chakra-ui/react";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { auth, db } from "../../firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { addDoc, collection } from "firebase/firestore";

interface IModalForm {
    isOpen: boolean;
    onClose: () => void;
}

interface ICreateAccountForm {
    name: string;
    nickname: string;
    email: string;
    password: string;
}

// 2023. 10. 15
// twitter challenge for SNS login & sign in
export default function LoginAccount({ isOpen, onClose }: IModalForm) {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<ICreateAccountForm>();

    const toast = useToast();

    const [tryLogin, setTryLogin] = useState<boolean>(false);
    const [passwordMessage, setPasswordMessage] = useState<boolean>(false);

    const navigate = useNavigate();

    async function onFormSubmit() {
        try {
            setTryLogin(true);
            await signInWithEmailAndPassword(
                auth,
                watch("email"),
                watch("password")
            );

            toast({
                title: "Welcome to 𝕏",
                status: "success",
                isClosable: true,
                colorScheme: "twitter",
            });

            reset();
            onClose();
            setTryLogin(false);
            navigate("/feed");
        } catch (e) {
            if (e instanceof FirebaseError) {
                console.log("some error occurred when tired to create user");
                console.log(e);
                toast({
                    title: "Logged in failed",
                    status: "error",
                    isClosable: true,
                    description: e.message,
                });
                setTryLogin(false);
            }
        }
    }

    async function GithubLogin() {
        console.log("Github login button clicked");

        try {
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth, provider);

            if (auth.currentUser) {
                await addDoc(collection(db, auth.currentUser.uid), {
                    following: [],
                    like: [],
                });
            }

            toast({
                status: "success",
                title: "Github login successful",
                description: "Enjoy your time with 𝕏",
            });
            navigate("/feed");
        } catch (e) {
            toast({
                status: "error",
                title: "Github login failed",
                description: `Something went wrong, its might be helpful to you.\n${e}`,
            });
        }
    }

    async function GoogleLogin() {
        console.log("Google login button clicked");

        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);

            if (auth.currentUser) {
                await addDoc(collection(db, auth.currentUser.uid), {
                    following: [],
                    like: [],
                });
            }

            toast({
                status: "success",
                title: "Google login successful",
                description: "Enjoy your time with 𝕏",
            });
            navigate("/feed");
        } catch (e) {
            toast({
                status: "error",
                title: "Google login failed",
                description: `Something went wrong, its might be helpful to you.\n${e}`,
            });
        }
    }

    useEffect(() => {
        if (passwordMessage) {
            setTimeout(() => {
                setPasswordMessage(false);
            }, 2000);
        }
    }, [passwordMessage]);

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={() => {
                    reset();
                    onClose();
                }}
                isCentered
                size={"lg"}
            >
                <ModalOverlay bgColor={"rgba(27, 34, 41, 0.8)"}></ModalOverlay>
                <ModalContent bgColor={"black"} position={"relative"}>
                    <ModalHeader fontSize={"30px"} my={5} px={"60px"}>
                        𝕏에 로그인하세요
                    </ModalHeader>
                    <ModalCloseButton my={5} px={"60px"} />

                    <ModalBody
                        px={"60px"}
                        as={"form"}
                        onSubmit={handleSubmit(onFormSubmit)}
                    >
                        <FormControl>
                            <Input
                                type="email"
                                placeholder="이메일"
                                border={"1px"}
                                mb={7}
                                {...register("email", {
                                    required: true,
                                })}
                                isInvalid={Boolean(errors.email?.message)}
                            ></Input>
                            <Input
                                type="password"
                                placeholder="비밀번호"
                                border={"1px"}
                                mb={7}
                                {...register("password", {
                                    required: true,
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Password must be longer than 8 characters",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message:
                                            "Password must be shorter than 20 characters",
                                    },
                                })}
                                isInvalid={Boolean(errors.password?.message)}
                            ></Input>
                        </FormControl>

                        <Text fontSize={"sm"} color={"red.500"} mt={"10px"}>
                            {errors.email?.message ? (
                                <p>⚠️ {errors.email?.message}</p>
                            ) : null}
                            {errors.password?.message ? (
                                <p>⚠️ {errors.password?.message}</p>
                            ) : null}
                        </Text>

                        <Button
                            w="100%"
                            h="40px"
                            mb={2}
                            bgColor={"white"}
                            borderRadius="50px"
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            onClick={GoogleLogin}
                        >
                            <HStack>
                                <FcGoogle size={"25px"} />
                                <Text fontWeight={"bold"} color={"black"}>
                                    Google 계정으로 로그인
                                </Text>
                            </HStack>
                        </Button>

                        <Button
                            w="100%"
                            h="40px"
                            bgColor={"white"}
                            borderRadius="50px"
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            onClick={GithubLogin}
                        >
                            <HStack>
                                <FaGithub color="black" size={"25px"} />
                                <Text fontWeight={"bold"} color={"black"}>
                                    Github에서 로그인하기
                                </Text>
                            </HStack>
                        </Button>

                        <HStack w="100%" my={2}>
                            <Divider></Divider>
                            <Text as={"b"}>or</Text>
                            <Divider></Divider>
                        </HStack>

                        <Box>
                            <Button
                                w="100%"
                                type="submit"
                                bgColor="twitter.500"
                                borderRadius={"40px"}
                                _hover={{ bgColor: "twitter.600" }}
                            >
                                로그인하기
                            </Button>
                        </Box>
                        <Box mt={"10px"} mb={"30px"}>
                            <Button
                                w="100%"
                                border={"1px"}
                                bgColor="black"
                                borderRadius={"40px"}
                                onClick={() => {
                                    setPasswordMessage(true);
                                }}
                            >
                                비밀번호를 잊으셨나요?
                            </Button>
                        </Box>
                        {passwordMessage ? (
                            <Box
                                justifyContent={"center"}
                                display={"flex"}
                                mt={"-15px"}
                            >
                                <Text color={"red.300"}>
                                    비밀번호는 소중하답니다! 잊어버리지 마세요!
                                    😉
                                </Text>
                            </Box>
                        ) : null}

                        {tryLogin ? (
                            <Spinner
                                position={"absolute"}
                                top={"58%"}
                                left="0"
                                right="0"
                                margin={"auto"}
                            />
                        ) : null}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
