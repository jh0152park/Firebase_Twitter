import { Box, HStack, Wrap } from "@chakra-ui/react";
import FeedBoard from "./feed_styles/feed_board";
import Sidebar from "./feed_styles/sidebar";
import { Helmet } from "react-helmet";

export default function Feed() {
    return (
        <>
            <Helmet>
                <title>홈 / X</title>
            </Helmet>
            <Wrap mx={"335px"}>
                <HStack>
                    <Box
                        id="sidebar"
                        w="235px"
                        minH="100vh"
                        top="0"
                        position="fixed"
                    >
                        <Sidebar></Sidebar>
                    </Box>
                    <Box
                        id="feed_board"
                        w="600px"
                        ml="272px"
                        mr="30px"
                        minH="200vh"
                        borderLeft="1px"
                        borderRight="1px"
                        borderColor="rgba(255,255,255,0.2)"
                    >
                        <FeedBoard></FeedBoard>
                    </Box>
                    <Box id="sugesstion" w="350px" h="100vh"></Box>
                </HStack>
            </Wrap>
        </>
    );
}
