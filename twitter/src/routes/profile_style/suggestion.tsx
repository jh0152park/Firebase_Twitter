import { Box, Text, VStack } from "@chakra-ui/react";
import Influencer from "../feed_styles/suggestion_style/influencer";

export default function Suggestion() {
    const influencer = [
        {
            name: "Team Trump (Text TRUMP to 88022)",
            src: "https://pbs.twimg.com/profile_images/745768799849308160/KrZhjkpH_400x400.jpg",
            id: "@TeamTrump",
        },
        {
            name: "Conan O'Brien",
            src: "https://pbs.twimg.com/profile_images/730612231021322240/Rl0_QYhL_400x400.jpg",
            id: "@ConanOBrien",
        },
        {
            name: "방탄소년단",
            src: "https://pbs.twimg.com/profile_images/1709222882566680576/zRJyBIMW_400x400.jpg",
            id: "@BTS_twt",
        },
    ];

    return (
        <VStack
            w="600px"
            h="100vh"
            bgColor="black"
            alignItems="flex-start"
            spacing="0"
            // borderBottom="1px"
            borderLeft="1px"
            borderRight="1px"
            borderColor="rgba(255, 255, 255, 0.2)"
            pl="10px"
        >
            <Text fontWeight="bold" fontSize="20px" m="15px">
                팔로우 추천
            </Text>

            {influencer.map((user, index) => (
                <Influencer
                    key={index}
                    name={user.name}
                    src={user.src}
                    id={user.id}
                />
            ))}
            <Box
                w="100%"
                h="40px"
                mt="10px"
                px="15px"
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                color="twitter.500"
                _hover={{ bgColor: "#18191C", cursor: "pointer" }}
            >
                <Text>더 보기</Text>
            </Box>
            <Box h="15px"></Box>
        </VStack>
    );
}
