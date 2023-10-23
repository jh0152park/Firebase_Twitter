import {
    Center,
    HStack,
    Heading,
    Text,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import { auth } from "../../firebase";
import { BsCalendar3 } from "react-icons/bs";
import { ComputeMonth } from "../../global/util";
import { useRecoilValue } from "recoil";
import { TotalFollowing } from "../../global/common";
import { FaPencil } from "react-icons/fa6";
import ProfileNameEditModal from "./profile_name_edit_modal";

// 2023.10.23 twitter challenge for user profile

export default function ProfileInfo() {
    const user = auth.currentUser;
    let year = 2023;
    let month = 10;
    let time = user?.metadata.creationTime;
    const following = useRecoilValue(TotalFollowing);
    const { isOpen, onOpen, onClose } = useDisclosure();

    if (time) {
        year = +time.split(" ")[3];
        month = ComputeMonth(time.split(" ")[2]);
    }

    return (
        <>
            <VStack
                w="300px"
                h="110px"
                mt="15px"
                ml="20px"
                alignItems="flex-start"
            >
                <VStack id="name" alignItems="flex-start" spacing="0" w="100%">
                    <HStack alignItems="center" w="100%">
                        <Heading fontWeight="bold" fontSize="20px" mb="5px">
                            {user?.displayName}
                        </Heading>
                        <Center
                            w="25px"
                            h="25px"
                            borderRadius="50%"
                            color="twitter.500"
                            ml="-2px"
                            mt="-5px"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "twitter.900",
                                transition: "all 0.1s linear",
                            }}
                            onClick={onOpen}
                        >
                            <FaPencil />
                        </Center>
                    </HStack>

                    <Text color="rgba(255, 255, 255, 0.4)" fontSize="14px">
                        @{user?.uid.slice(0, 10)}
                    </Text>
                </VStack>

                <HStack
                    mt="10px"
                    w="100%"
                    id="createdAt"
                    alignItems="flex-start"
                    color="rgba(255, 255, 255, 0.4)"
                    fontSize="14px"
                    fontWeight="bold"
                >
                    <BsCalendar3 />
                    <Text>
                        {" "}
                        가입일: {year}년 {month}월
                    </Text>
                </HStack>
                <HStack id="follow" fontSize="14px" mt="10px" spacing={0}>
                    <HStack spacing={1} mr="20px">
                        <Text fontWeight="bold">{following}</Text>
                        <Text color="rgba(255, 255, 255, 0.4)">팔로우 중</Text>
                    </HStack>
                    <HStack spacing={1}>
                        <Text fontWeight="bold">0</Text>
                        <Text color="rgba(255, 255, 255, 0.4)">팔로워</Text>
                    </HStack>
                </HStack>
            </VStack>

            <ProfileNameEditModal
                isOpen={isOpen}
                onClose={onClose}
                name={user?.displayName as ""}
            />
        </>
    );
}
