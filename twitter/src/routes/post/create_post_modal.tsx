import {
    Avatar,
    Box,
    Center,
    Divider,
    HStack,
    Icon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    Textarea,
} from "@chakra-ui/react";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdExpandMore } from "react-icons/md";
import { AiOutlinePicture, AiOutlineFileGif } from "react-icons/ai";
import { BsListStars, BsEmojiSmile } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import PostOptionButton from "../feed_styles/feedboard_style/post_option_button";
import { useRef, useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CreatePostModal({ isOpen, onClose }: ModalProps) {
    const inputRef = useRef<any>();
    const [value, setValue] = useState("");

    function onAttachedFileClick() {
        if (inputRef) {
            inputRef.current.click();
        }
    }

    function onPostButtonClick() {
        if (value.length) {
            onClose();
            console.log(value);
            setValue("");
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="slideInBottom"
            size="xl"
        >
            <ModalOverlay bgColor="rgba(32, 39, 52, 0.5)" />
            <ModalContent bgColor="black">
                <ModalHeader>새 트윗 작성</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <HStack alignItems="flex-start" mt="20px">
                        <Avatar w="40px" h="40px" />
                        <Center
                            w="100px"
                            h="25px"
                            borderRadius="40px"
                            border="1px"
                            borderColor="rgba(255, 255, 255, 0.4)"
                            color="twitter.500"
                            fontSize="15px"
                            fontWeight="bold"
                            ml="10px"
                            mt="-5px"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "rgba(27, 132, 232, 0.15)",
                            }}
                        >
                            모든사람 <MdExpandMore />{" "}
                        </Center>
                    </HStack>
                    <Textarea
                        placeholder="무슨 일이 일어나고 있나요?"
                        _placeholder={{ fontSize: "20px" }}
                        fontSize="20px"
                        fontWeight="bold"
                        variant={"unstyled"}
                        maxLength={180}
                        pl="55px"
                        resize={"none"}
                        style={{ overflow: "hidden" }}
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                    />
                    <HStack>
                        <Center
                            fontSize="14px"
                            fontWeight="bold"
                            color="twitter.500"
                            mt="40px"
                            ml="-5px"
                            w="230px"
                            h="25px"
                            borderRadius="20px"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "rgba(27, 132, 232, 0.15)",
                            }}
                        >
                            <FaEarthAmericas />
                            <Text ml="5px">
                                모든 사람이 답글을 달 수 있습니다
                            </Text>
                        </Center>
                        <input
                            ref={inputRef}
                            type="file"
                            accept="image/*"
                            style={{ opacity: 0, cursor: "default" }}
                        ></input>
                    </HStack>

                    <Divider my="10px" color="rgba(255, 255, 255, 0.4)" />
                    <Box
                        w="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        mb="5px"
                    >
                        <HStack color="twitter.500" spacing="0" ml="-10px">
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
                                onClick={onAttachedFileClick}
                            >
                                <Icon as={AiOutlinePicture} w="20px" h="20px" />
                            </Box>
                            <PostOptionButton
                                icon={AiOutlineFileGif}
                                enable={false}
                            />
                            <PostOptionButton
                                icon={BsListStars}
                                enable={false}
                            />
                            <PostOptionButton
                                icon={BsEmojiSmile}
                                enable={false}
                            />
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
                            opacity={value.length ? 1 : 0.7}
                            cursor={value.length ? "pointer" : "default"}
                            onClick={onPostButtonClick}
                        >
                            게시하기
                        </Box>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
