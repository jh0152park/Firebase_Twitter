import {
    Avatar,
    Button,
    Center,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { auth, db } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useRecoilValue } from "recoil";
import { EntireTweets } from "../../global/common";
import { doc, updateDoc } from "firebase/firestore";

interface IInput {
    isOpen: boolean;
    onClose: () => void;
    name: string;
}

// 2023.10.23 twitter challenge for user profile

export default function ProfileNameEditModal({
    isOpen,
    onClose,
    name,
}: IInput) {
    const user = auth.currentUser;
    const toast = useToast();
    const navigate = useNavigate();

    const [username, setUsername] = useState<string>(name);
    const [update, setUpdate] = useState<boolean>(false);
    const entireTweets = useRecoilValue(EntireTweets);

    function onModalClose() {
        onClose();
        setUsername(name);
    }

    async function onNameChageSubmit() {
        if (!username) {
            toast({
                status: "error",
                title: "Can't change username",
                description:
                    "Username is required, Have to enter username what you want",
            });
            return;
        } else if (username === name) {
            onModalClose();
            return;
        }

        if (
            window.confirm(
                `Do you really want to change your name to ${username}?`
            ) &&
            user
        ) {
            try {
                setUpdate(true);

                updateProfile(user, { displayName: username });
                for (var tweet of entireTweets) {
                    if (user.uid === tweet.userId) {
                        const tweetRef = doc(db, "tweets", tweet.id);
                        await updateDoc(tweetRef, {
                            username: username,
                        });
                    }
                }

                navigate("/feed");
                toast({
                    status: "success",
                    title: "Change username done 🫡",
                });
            } catch (e) {
                console.log("occurred error when tried to change username");
                console.log(e);
            } finally {
                setUpdate(false);
            }
            onModalClose();
        } else {
            onModalClose();
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onModalClose} isCentered>
            <ModalOverlay bgColor="rgba(32, 39, 52, 0.5)" />
            <ModalContent
                bgColor="black"
                minW="600px"
                maxW="600px"
                minH="650px"
                maxH="650px"
                borderRadius="30px"
            >
                <ModalHeader>
                    <Center w="100%">
                        <Heading fontSize="40px">𝕏</Heading>
                    </Center>
                </ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <VStack alignItems="flex-start" ml="60px">
                        <Heading>이름 변경하기</Heading>
                        <Text
                            fontSize="15px"
                            fontWeight="bold"
                            color="rgba(255, 255, 255, 0.4)"
                        >
                            마음에 드는 이름이 있나요? 지금 업데이트하세요.
                        </Text>
                    </VStack>

                    <Center w="100%" h="200px" mt="40px">
                        <Avatar
                            w="190px"
                            h="190px"
                            border="3px solid rgb(255,255,255)"
                            src={user?.photoURL as string}
                            name={user?.displayName as string}
                            fontWeight="bold"
                        />
                    </Center>
                    <Center w="100%" h="50px">
                        <Heading
                            fontSize="30px"
                            color={username ? "whitesmoke" : "red.500"}
                        >
                            {username ? username : "Name is required ⚠️"}
                        </Heading>
                    </Center>

                    <Center w="100%" mt="10px">
                        <Input
                            w="80%"
                            h="50px"
                            type="text"
                            required
                            borderRadius="30px"
                            placeholder="What's new name?"
                            color="rgba(255,255,255,0.5)"
                            borderColor="twitter.500"
                            fontWeight="bold"
                            _placeholder={{
                                color: "rgba(255,255,255,0.3)",
                                fontWeight: "bold",
                            }}
                            value={username}
                            onChange={(e: any) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </Center>
                    <VStack mt="10px">
                        <Center
                            w="440px"
                            h="50px"
                            borderRadius="30px"
                            border="1px"
                            borderColor="rgba(255, 255, 255, 0.3)"
                            bgColor="black"
                            fontWeight="bold"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "rgba(255, 255, 255, 0.1)",
                                transition: "all 0.1s linear",
                            }}
                            onClick={onModalClose}
                        >
                            지금은 넘어가기
                        </Center>
                        <Button
                            w="440px"
                            h="50px"
                            borderRadius="30px"
                            border="none"
                            bgColor="twitter.500"
                            fontWeight="bold"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "twitter.600",
                                transition: "all 0.1s linear",
                            }}
                            onClick={onNameChageSubmit}
                            isLoading={update}
                        >
                            변경하기
                        </Button>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
