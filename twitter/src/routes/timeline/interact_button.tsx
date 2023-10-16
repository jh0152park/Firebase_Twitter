import { Center, HStack, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

interface IInput {
    icon: any;
    number: any;
    r: number;
    g: number;
    b: number;
    click?: boolean;
}

export default function InteractButton({
    icon,
    number,
    r,
    g,
    b,
    click,
}: IInput) {
    const [hover, setHover] = useState(false);
    const [like, setLike] = useState(false);

    function onLikeClick() {
        if (click) {
            if (like) setLike(false);
            else setLike(true);
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
