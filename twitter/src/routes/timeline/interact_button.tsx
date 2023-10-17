import { Center, HStack, Icon, Text } from "@chakra-ui/react";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { auth, db } from "../../firebase";

interface IInput {
    icon: any;
    number: any;
    r: number;
    g: number;
    b: number;
    click?: boolean;
    id?: string;
    isLiked?: boolean;
    whosLiked?: string[];
    userId?: string;
}

export default function InteractButton({
    icon,
    number,
    r,
    g,
    b,
    click,
    id,
    isLiked,
    whosLiked,
    userId,
}: IInput) {
    const currentUser = auth.currentUser;
    // if (click && currentUser) {
    //     console.log(`button side) tweet id: ${id}`);
    //     console.log(`button side) post user id: ${userId}`);
    //     console.log(`button side) current user id: ${currentUser.uid}`);
    //     console.log(`button side) whoisliked: ${whosLiked}`);
    // }

    const [hover, setHover] = useState(false);
    const [like, setLike] = useState(isLiked ? isLiked : false);

    async function onLikeClick() {
        if (click && whosLiked && currentUser) {
            if (like) {
                setLike(false);
                if (id) {
                    const postRef = doc(db, "tweets", id);
                    await updateDoc(postRef, {
                        isLiked: false,
                        whosLiked: whosLiked.filter(
                            (u) => u !== currentUser.uid
                        ),
                    });
                }
            } else {
                setLike(true);
                if (id) {
                    const postRef = doc(db, "tweets", id);
                    await updateDoc(postRef, {
                        isLiked: true,
                        whosLiked: [...whosLiked, currentUser.uid],
                    });
                }
            }
        }
    }

    return (
        <HStack
            alignItems="center"
            color={like ? `rgb(${r}, ${g}, ${b})` : "rgba(255, 255, 255, 0.5)"}
            fontSize="14px"
            spacing="0"
            _hover={{
                color: `rgb(${r}, ${g}, ${b})`,
            }}
            onMouseOver={() => {
                setHover(true);
            }}
            onMouseOut={() => {
                setHover(false);
            }}
            onClick={onLikeClick}
        >
            <Center
                w="30px"
                h="30px"
                borderRadius="50%"
                bgColor={
                    hover
                        ? `rgba(${r}, ${g}, ${b}, 0.1)`
                        : `rgba(${r}, ${g}, ${b}, 0)`
                }
            >
                <Icon as={like ? FaHeart : icon} width="17px" height="17px" />
            </Center>
            <Text ml="5px">
                {like
                    ? (number + 1).toLocaleString("ko-KR")
                    : number.toLocaleString("ko-KR")}
            </Text>
        </HStack>
    );
}
