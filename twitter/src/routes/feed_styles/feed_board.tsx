import { Box } from "@chakra-ui/react";
import Header from "./feedboard_style/header";
import Buffer from "./feedboard_style/header_buffer";
import CreatePost from "./feedboard_style/create_post";
import Tweet from "../timeline/timeline";
import Timeline from "../timeline/timeline";

export default function FeedBoard() {
    return (
        <Box>
            <Header />
            <Buffer />
            <CreatePost />
            <Timeline />
        </Box>
    );
}
