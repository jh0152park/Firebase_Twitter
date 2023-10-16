import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import OptionButton from "./option_button";

export default function Option() {
    return (
        <HStack
            w="100%"
            h="50px"
            mt="20px"
            spacing="0"
            justifyContent="space-evenly"
            color="rgba(255, 255, 255, 0.4)"
            fontSize="15px"
            fontWeight="bold"
        >
            <OptionButton option="게시물" width={60} />
            <OptionButton option="답글" width={60} />
            <OptionButton option="하이라이트" width={65} />
            <OptionButton option="미디어" width={60} />
            <OptionButton option="마음에 들어요" width={80} />
        </HStack>
    );
}
