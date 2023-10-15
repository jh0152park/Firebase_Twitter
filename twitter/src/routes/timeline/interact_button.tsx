import { Center, HStack, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";

interface IInput {
    icon: any;
    number: any;
    r: number;
    g: number;
    b: number;
}

export default function InteractButton({ icon, number, r, g, b }: IInput) {
    const [hover, setHover] = useState(false);

    return (
        <HStack
            alignItems="center"
            color="rgba(255, 255, 255, 0.5)"
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
                <Icon as={icon} width="17px" height="17px" />
            </Center>
            <Text ml="5px">{number.toLocaleString("ko-KR")}</Text>
        </HStack>
    );
}
