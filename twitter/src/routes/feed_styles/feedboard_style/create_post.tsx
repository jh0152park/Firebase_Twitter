import {
    Avatar,
    Box,
    HStack,
    Icon,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import { AiOutlinePicture, AiOutlineFileGif } from "react-icons/ai";
import { BsListStars, BsEmojiSmile } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import PostOptionButton from "./post_option_button";
import CreatePostModal from "../../post/create_post_modal";
import { auth } from "../../../firebase";

export default function CreatePost() {
    const user = auth.currentUser;
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <VStack
            w="100%"
            h="150px"
            pt="30px"
            spacing="0"
            borderBottom="1px"
            borderLeft="1px"
            borderRight="1px"
            borderColor="rgba(255, 255, 255, 0.5)"
        >
            <Box w="100%" h="100%" px="20px" pt="20px" pb="10px">
                <HStack h="50%" w="100%">
                    <Avatar
                        w="40px"
                        h="40px"
                        src={user?.photoURL as string}
                        name={user?.displayName as string}
                    />
                    <Box
                        color="rgba(255, 255, 255, 0.4)"
                        fontWeight="bold"
                        fontSize="20px"
                        ml="10px"
                        mb="5px"
                        _hover={{ cursor: "text" }}
                        w="100%"
                        h="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-start"
                        onClick={onOpen}
                    >
                        무슨 일이 일어나고 있나요?
                    </Box>
                </HStack>
                <Box
                    h="50%"
                    w="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <HStack color="twitter.500" ml="50px" mt="10px" spacing="0">
                        <Box
                            w="35px"
                            h="35px"
                            borderRadius="50%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "rgba(14, 59, 94, 0.5)",
                            }}
                            opacity="1"
                            onClick={onOpen}
                        >
                            <Icon as={AiOutlinePicture} w="20px" h="20px" />
                        </Box>
                        <PostOptionButton
                            icon={AiOutlineFileGif}
                            enable={false}
                        />
                        <PostOptionButton icon={BsListStars} enable={false} />
                        <PostOptionButton icon={BsEmojiSmile} enable={false} />
                        <PostOptionButton
                            icon={LuCalendarClock}
                            enable={false}
                        />
                        <PostOptionButton
                            icon={IoLocationOutline}
                            enable={false}
                        />
                    </HStack>
                    <Box
                        w="90px"
                        h="35px"
                        bgColor="twitter.600"
                        borderRadius="60px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        fontWeight="bold"
                        opacity="0.7"
                        _hover={{
                            opacity: 1,
                            cursor: "pointer",
                        }}
                        onClick={onOpen}
                    >
                        게시하기
                    </Box>
                </Box>
            </Box>
            <CreatePostModal isOpen={isOpen} onClose={onClose} />
        </VStack>
    );
}
