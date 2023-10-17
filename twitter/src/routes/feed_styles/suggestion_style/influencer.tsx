import {
    Avatar,
    Box,
    Center,
    HStack,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";

interface IProfile {
    name: string;
    src: string;
    id: string;
    followings: string[];
    dbId: string;
}

export default function Influencer({
    name,
    src,
    id,
    followings,
    dbId,
}: IProfile) {
    console.log(`input following list: ${followings}`);

    const user = auth.currentUser;
    const [following, setFollowing] = useState<boolean>(
        followings.includes(name)
    );
    const [tryUnfollow, setTryUnfollow] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    async function onFollowButtonClick() {
        if (following) {
            onOpen();
        } else {
            if (user) {
                setFollowing((prev) => !prev);
                const follow = doc(db, user.uid, dbId);
                await updateDoc(follow, {
                    following: [...followings, name],
                });
            }
        }
    }

    async function onUnFollowButtonClick() {
        setFollowing(false);
        onClose();
        if (user) {
            const follow = doc(db, user.uid, dbId);
            await updateDoc(follow, {
                following: followings.filter((f) => f != name),
            });
        }
    }

    function isUnfollowCondition() {
        if (following) setTryUnfollow(true);
    }

    return (
        <HStack
            w="100%"
            h="80px"
            p="15px"
            _hover={{ bgColor: "#18191C", cursor: "pointer" }}
            justifyContent="space-between"
        >
            <HStack>
                <Avatar src={src}></Avatar>
                <VStack alignItems="flex-start">
                    <HStack spacing="0">
                        <Text fontWeight="bold">{name}</Text>
                        <Image
                            ml="2px"
                            boxSize="15px"
                            objectFit="cover"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1024px-Twitter_Verified_Badge.svg.png"
                        />
                    </HStack>
                    <Text fontSize="16px" color="rgba(255, 255, 255, 0.4)">
                        {id}
                    </Text>
                </VStack>
            </HStack>
            <Center
                w={following ? "70px" : "70px"}
                h="30px"
                border="1px"
                borderRadius="50px"
                borderColor={tryUnfollow ? "red" : "rgba(255, 255, 255, 0.3)"}
                bgColor={
                    tryUnfollow
                        ? "rgba(214, 47, 55, 0.1)"
                        : following
                        ? "rgba(0,0,0,0.8)"
                        : "whitesmoke"
                }
                color={
                    tryUnfollow ? "red" : !following ? "black" : "whitesmoke"
                }
                fontSize="13px"
                fontWeight="bold"
                _hover={{ opacity: 0.9 }}
                onClick={onFollowButtonClick}
                onMouseOver={isUnfollowCondition}
                onMouseOut={() => {
                    setTryUnfollow(false);
                }}
            >
                {tryUnfollow ? "언팔로우" : following ? "팔로잉" : "팔로우"}
            </Center>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay bgColor="rgba(32, 39, 52, 0.5)" />
                <ModalContent
                    bgColor="black"
                    borderRadius="20px"
                    minW="300px"
                    minH="310px"
                    maxW="300px"
                    maxH="310px"
                >
                    <ModalHeader mt="10px">
                        {id} 님을 언팔로우할까요?
                    </ModalHeader>
                    <ModalBody>
                        <Box
                            mt="-10px"
                            mb="40px"
                            w="260px"
                            fontSize="15px"
                            lineHeight="1.2"
                            color="rgba(255, 255, 255, 0.5)"
                        >
                            이 사용자들의 게시물을 더 이상 추천 타임라인에
                            표시되지 않습니다. 이러한 사용자의 프로필은 게시물이
                            비공개로 설정되지 않는 한 계속 볼 수 있습니다.
                        </Box>
                        <Center
                            w="100%"
                            h="40px"
                            borderRadius="30px"
                            bgColor="rgba(255,255,255,0.9)"
                            color="black"
                            fontSize="15px"
                            fontWeight="bold"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "rgba(255,255,255,0.8)",
                            }}
                            onClick={onUnFollowButtonClick}
                        >
                            언팔로우
                        </Center>
                        <Center
                            mt="10px"
                            w="100%"
                            h="40px"
                            border="1px"
                            borderRadius="30px"
                            borderColor="rgba(255,255,255,0.4)"
                            bgColor="black"
                            color="whitesmoke"
                            fontSize="15px"
                            fontWeight="bold"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "rgba(255,255,255,0.1)",
                            }}
                            onClick={onClose}
                        >
                            취소
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </HStack>
    );
}
