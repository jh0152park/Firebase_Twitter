import { Box, Center, HStack } from "@chakra-ui/react";
import FeedBoard from "./feed_styles/feed_board";
import Sidebar from "./feed_styles/sidebar";
import { Helmet } from "react-helmet";
import SuggestionCards from "./feed_styles/suggestion_cards";
import GoToTop from "../components/go_to_top";
import { useSetRecoilState } from "recoil";
import { ProfileOptionButton } from "../global/common";

export default function Feed() {
    const profileButtonState = useSetRecoilState(ProfileOptionButton);

    profileButtonState("게시물");
    return (
        <>
            <Helmet>
                <title>홈 / X</title>
            </Helmet>
            <Center overflowY={"scroll"}>
                <HStack>
                    <Box id="sidebar" w="235px" position="fixed" top="0">
                        <Sidebar></Sidebar>
                    </Box>
                    <Box id="feed_board" w="600px" ml="272px" mr="30px">
                        <FeedBoard></FeedBoard>
                    </Box>
                    <Box id="suggestion" w="350px" pt="10px">
                        <SuggestionCards />
                    </Box>
                </HStack>
            </Center>
            <GoToTop />
        </>
    );
}
