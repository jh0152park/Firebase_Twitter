import { Box, Center, HStack, Wrap } from "@chakra-ui/react";
import FeedBoard from "./feed_styles/feed_board";
import Sidebar from "./feed_styles/sidebar";
import { Helmet } from "react-helmet";
import SearchBar from "./feed_styles/suggestion_style/search_bar";
import PremiumBar from "./feed_styles/suggestion_style/premium_bar";
import SuggestionCards from "./feed_styles/suggestion_cards";

export default function Feed() {
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
                    <Box
                        id="feed_board"
                        w="600px"
                        ml="272px"
                        mr="30px"
                        minH="100vh"
                        // borderLeft="1px"
                        // borderRight="1px"
                        // borderColor="rgba(255,255,255,0.2)"
                    >
                        <FeedBoard></FeedBoard>
                    </Box>
                    <Box id="suggestion" w="350px" pt="10px">
                        <SuggestionCards />
                    </Box>
                </HStack>
            </Center>
        </>
    );
}
