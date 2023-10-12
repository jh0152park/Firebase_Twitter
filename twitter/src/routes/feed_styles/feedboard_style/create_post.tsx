import {
    Avatar,
    Box,
    Button,
    Container,
    HStack,
    VStack,
    Wrap,
} from "@chakra-ui/react";
import { AiOutlinePicture, AiOutlineFileGif } from "react-icons/ai";
import { BsListStars, BsEmojiSmile } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

export default function CreatePost() {
    return (
        <VStack
            w="100%"
            h="120px"
            spacing="0"
            borderBottom="1px"
            borderColor="rgba(255, 255, 255, 0.5)"
        >
            <Box w="100%" h="100%" px="20px" pt="20px" pb="10px">
                <HStack h="50%" w="100%">
                    <Avatar w="40px" h="40px"></Avatar>
                    <Box
                        color="rgba(255, 255, 255, 0.4)"
                        fontWeight="bold"
                        fontSize="20px"
                        ml="10px"
                        mb="5px"
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
                            w="32px"
                            h="32px"
                            borderRadius="50%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "rgba(14, 59, 94, 0.5)",
                            }}
                        >
                            <AiOutlinePicture size="20px" />
                        </Box>
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
                        >
                            <AiOutlineFileGif size="20px" />
                        </Box>

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
                        >
                            <BsListStars size="20px" />
                        </Box>

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
                        >
                            <BsEmojiSmile size="20px" />
                        </Box>

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
                        >
                            <LuCalendarClock size="20px" />
                        </Box>

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
                        >
                            <IoLocationOutline size="20px" />
                        </Box>
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
                    >
                        게시하기
                    </Box>
                </Box>
            </Box>
        </VStack>
    );
}
