import { Box, Center, HStack } from "@chakra-ui/react";
import FeedBoard from "./feed_styles/feed_board";
import Sidebar from "./feed_styles/sidebar";
import { Helmet } from "react-helmet";
import SuggestionCards from "./feed_styles/suggestion_cards";
import GoToTop from "../components/go_to_top";
import { auth } from "../firebase";
import ProfileBoard from "./profile_style/profile_board";
import { useSetRecoilState } from "recoil";
import { ProfilePageVisited } from "../global/common";

// 2023.10.23 twitter challenge for user profile

export default function Profile() {
    const user = auth.currentUser;
    const visited = useSetRecoilState(ProfilePageVisited);

    visited(true);
    return (
        <>
            <Helmet>
                <title>
                    {`${user?.displayName} (@${user?.uid.slice(0.1)})`} / X
                </title>
            </Helmet>
            <Center overflowY={"scroll"}>
                <HStack>
                    <Box id="sidebar" w="235px" position="fixed" top="0">
                        <Sidebar />
                    </Box>
                    <Box id="feed_board" w="600px" ml="272px" mr="30px">
                        <ProfileBoard />
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
