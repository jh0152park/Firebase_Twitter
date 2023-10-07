import { Box, HStack, Wrap } from "@chakra-ui/react";
import FeedBoard from "./feed_style/feed_board";
import Sidebar from "./feed_style/sidebar";
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
                        borderLeft="1px"
                        borderRight="1px"
                        borderColor="rgba(255,255,255,0.2)"
                    >
                        <Sidebar></Sidebar>
                    </Box>
                    <Box
                        id="feed_board"
                        w="600px"
                        mx="30px"
                        minH="100vh"
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
