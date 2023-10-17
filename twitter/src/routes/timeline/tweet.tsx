import {
    Avatar,
    Box,
    Center,
    Fade,
    HStack,
    Image,
    Spinner,
    Text,
    VStack,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { auth, db, storage } from "../../firebase";
import InteractButton from "./interact_button";
import { FaRegComment } from "react-icons/fa";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { BsThreeDots, BsUpload } from "react-icons/bs";
import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import EditPostModal from "../post/edit_post_modal";
import { ITweet } from "../../global/common";

export default function Tweet({
    username,
    imageURL,
    tweet,
    userId,
    createdAt,
    creatorImageURL,
    comment,
    retweet,
    like,
    view,
    id,
    isLiked,
    whosLiked,
}: ITweet) {
    // console.log(`------------------`);
    // console.log(`tweet: ${tweet}`);
    // console.log(`post user: ${userId}`);
    // console.log(`post id: ${id}`);
    // console.log(`------------------`);

    const toast = useToast();
    const user = auth.currentUser;

    const createed = new Date(createdAt);
    const time = createed.toLocaleDateString();
    const createdDate =
        time.split(" ")[1].slice(0, -1) +
        "월" +
        " " +
        time.split(" ")[2].slice(0, -1) +
        "일";

    const [more, setMore] = useState(false);
    const [deleteTweet, setDeleteTweet] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    async function onDeleteButtonClick() {
        if (user?.uid !== userId) {
            toast({
                status: "error",
                title: "Can't delete tweet",
                description:
                    "Only the person who created the tweet can delete it.",
            });
        } else {
            if (window.confirm("Are you sure you want to delete?")) {
                setDeleteTweet(true);
                setTimeout(
                    async () => {
                        try {
                            await deleteDoc(doc(db, "tweets", id));
                            if (imageURL) {
                                const imageRef = ref(
                                    storage,
                                    `tweets/${user.uid}-${user.displayName}/${id}`
                                );
                                await deleteObject(imageRef);
                            }
                        } catch (e) {
                            console.log(
                                "occurred error when tired to delete tweet."
                            );
                            console.log(e);
                        } finally {
                            setDeleteTweet(false);
                            toast({
                                status: "success",
                                title: "Delete tweet successfully😎",
                            });
                        }
                    },
                    imageURL ? 1000 : 500
                );
            }
        }
    }

    function onEditButtonClick() {
        if (user?.uid !== userId) {
            toast({
                status: "warning",
                title: "Can't edeit tweet",
                description:
                    "Only the person who created the tweet can edit it.",
            });
        } else {
            setMore(false);
            onOpen();
        }
    }

    return (
        <>
            {user ? (
                <Box
                    minW="600px"
                    maxW="600px"
                    minH="110px"
                    px="20px"
                    py="15px"
                    borderBottom="1px"
                    borderLeft="1px"
                    borderRight="1px"
                    borderColor="rgba(255, 255, 255, 0.2)"
                    bgColor="rgba(0, 0, 0, 1)"
                    _hover={{
                        cursor: "pointer",
                        bgColor: more
                            ? "rgba(0,0,0,1)"
                            : "rgba(255, 255, 255, 0.1)",
                        transition: "background 0.1s linear",
                    }}
                    position="relative"
                >
                    <HStack alignItems="flex-start">
                        <Box w="40px" h="40px" mr="10px">
                            <Avatar
                                w="40px"
                                h="40px"
                                name={username}
                                src={creatorImageURL}
                            />
                        </Box>
                        <HStack alignItems="flex-start" mb="5px">
                            <Text fontWeight="bold">{username}</Text>
                            <Image
                                ml="-4px"
                                mt="-2px"
                                boxSize="20px"
                                objectFit="cover"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1024px-Twitter_Verified_Badge.svg.png"
                            />
                            <Text
                                ml="-3px"
                                fontSize="14px"
                                color="rgba(255, 255, 255, 0.4)"
                            >
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
                            onClick={() => {
                                setMore((prev) => !prev);
                            }}
                        >
                            <BsThreeDots />
                        </Center>
                    </HStack>

                    <Box w="510px" ml="60px" mb="30px" mt="-10px">
                        {tweet}
                    </Box>

                    {more ? (
                        <Fade in={more}>
                            <VStack
                                w="100px"
                                h="70px"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                border="1px"
                                borderRadius="20px"
                                bgColor="rgba(0, 0, 0, 0.9)"
                                borderColor="rgba(255, 255, 255, 0.2)"
                                position="absolute"
                                top="10px"
                                right="40px"
                                fontSize="15px"
                                fontWeight="bold"
                                spacing="0"
                                boxShadow="0px 0px 5px rgba(255, 255, 255, 0.5)"
                            >
                                <Center
                                    w="70px"
                                    py="5px"
                                    borderRadius="20px"
                                    color="twitter.500"
                                    _hover={{
                                        cursor: "pointer",
                                        bgColor: "twitter.500",
                                        color: "whitesmoke",
                                        transition: "background 0.2s linear",
                                    }}
                                    onClick={onEditButtonClick}
                                >
                                    수정하기
                                </Center>
                                <Center
                                    w="70px"
                                    py="5px"
                                    borderRadius="20px"
                                    color="rgb(231,0,104)"
                                    _hover={{
                                        cursor: "pointer",
                                        bgColor: "rgb(231,0,104)",
                                        color: "whitesmoke",
                                        transition: "background 0.2s linear",
                                    }}
                                    onClick={onDeleteButtonClick}
                                >
                                    삭제하기
                                </Center>
                            </VStack>
                        </Fade>
                    ) : null}

                    {imageURL ? (
                        <Box
                            mt="40px"
                            mb="10px"
                            ml="60px"
                            minW="510px"
                            maxW="510px"
                        >
                            <Image
                                objectFit="cover"
                                src={imageURL}
                                borderRadius="20px"
                            />
                        </Box>
                    ) : null}

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
                            id={id}
                            // isLiked={isLiked}
                            isLiked={whosLiked.includes(user?.uid)}
                            whosLiked={whosLiked}
                            userId={userId}
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

                    {deleteTweet ? (
                        <Center
                            position="absolute"
                            top="0"
                            bottom="0"
                            left="0"
                            right="0"
                            m="auto"
                        >
                            <Spinner
                                size="xl"
                                color="twitter.500"
                                thickness="3px"
                            />
                        </Center>
                    ) : null}

                    <EditPostModal
                        isOpen={isOpen}
                        onClose={onClose}
                        tweet={tweet}
                        imageURL={imageURL}
                        postId={id}
                    />
                </Box>
            ) : null}
        </>
    );
}
