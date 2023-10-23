import { Box, Text, VStack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { ProfileOptionButton } from "../../global/common";

// 2023.10.23 twitter challenge for user profile

export default function OptionButton({
    option,
    width,
}: {
    option: string;
    width: number;
}) {
    const [currentOption, setCurrentOption] =
        useRecoilState(ProfileOptionButton);

    return (
        <VStack
            h="100%"
            w="100%"
            _hover={{
                cursor: "pointer",
                bgColor: "rgba(255, 255, 255, 0.1)",
                transition: "all 0.1s linear",
            }}
            justifyContent="center"
            alignItems="center"
            spacing="0"
            color={currentOption === option ? "whitesmoke" : "inherit"}
            onClick={() => {
                setCurrentOption(option);
            }}
        >
            <Text py="10px" mt="5px">
                {option}
            </Text>
            <Box
                w={`${width}px`}
                h="5px"
                bgColor={currentOption === option ? "twitter.500" : "inherit"}
                borderRadius="10px"
                opacity={currentOption === option ? 1 : 0}
            />
        </VStack>
    );
}
