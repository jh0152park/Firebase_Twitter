import { Avatar, Box, Center, HStack, Image, Text } from "@chakra-ui/react";
import { ITweet } from "./timeline";
import { auth } from "../../firebase";
import { create } from "domain";
import InteractButton from "./interact_button";
import { FaRegComment } from "react-icons/fa";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { BsThreeDots, BsUpload } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";

export default function Tweet({
    username,
    imageURL,
    tweet,
    userId,
    createdAt,
}: ITweet) {
    const user = auth.currentUser;
    const createed = new Date(createdAt);
    const time = createed.toLocaleDateString();
    const createdDate =
        time.split(" ")[1].slice(0, -1) +
        "월" +
        " " +
        time.split(" ")[2].slice(0, -1) +
        "일";

    const comment = Math.floor(Math.random() * 1000);
    const view = Math.floor(Math.random() * 9999);
    const like = Math.floor(Math.random() * 9998);
    const retweet = Math.floor(Math.random() * view);

    return (
        <Box
            minW="600px"
            maxW="600px"
            minH="110px"
            px="20px"
            py="15px"
            borderBottom="1px"
            borderLeft="1px"
            borderRight="1px"
            borderColor="rgba(255, 255, 255, 0.5)"
            bgColor="rgba(0, 0, 0, 1)"
            _hover={{
                cursor: "pointer",
                bgColor: "rgba(255, 255, 255, 0.1)",
            }}
            position="relative"
        >
            <HStack alignItems="flex-start">
                <Box w="40px" h="40px" mr="10px">
                    <Avatar
                        w="40px"
                        h="40px"
                        name={user?.displayName as string}
                        src={user?.photoURL as string}
                    />
                </Box>
                <HStack alignItems="flex-start" mb="5px">
                    <Text fontWeight="bold">{username}</Text>
                    <Text fontSize="14px" color="rgba(255, 255, 255, 0.4)">
                        @{userId.slice(0, 10)} ∙ {createdDate}
                    </Text>
                </HStack>
                <Center
                    w="30px"
                    h="30px"
                    borderRadius="50%"
                    top="10px"
                    right="10px"
                    position="absolute"
                    color="rgba(255, 255, 255, 0.5)"
                    _hover={{
                        bgColor: "rgba(28, 141, 238, 0.1)",
                        color: "twitter.600",
                    }}
                >
                    <BsThreeDots />
                </Center>
            </HStack>

            <Box w="510px" ml="60px" mb="20px" mt="-10px">
                {tweet}
            </Box>

            <HStack
                w="510px"
                h="30px"
                ml="60px"
                position="relative"
                bottom="-10px"
                justifyContent="space-between"
            >
                <InteractButton
                    icon={FaRegComment}
                    number={comment}
                    r={28}
                    g={134}
                    b={236}
                />
                <InteractButton
                    icon={HiOutlineArrowPathRoundedSquare}
                    number={retweet}
                    r={37}
                    g={240}
                    b={108}
                />
                <InteractButton
                    icon={AiOutlineHeart}
                    number={like}
                    r={231}
                    g={0}
                    b={104}
                    click={true}
                />
                <InteractButton
                    icon={BiBarChart}
                    number={view}
                    r={28}
                    g={134}
                    b={236}
                />
                <InteractButton
                    icon={BsUpload}
                    number={""}
                    r={255}
                    g={255}
                    b={255}
                />
            </HStack>
        </Box>
    );
}
