import { Box } from "@chakra-ui/react";
import Header from "./feedboard_style/header";
import Buffer from "./feedboard_style/header_buffer";
import CreatePost from "./feedboard_style/create_post";

export default function FeedBoard() {
    return (
        <Box overflow="hidden" boxSizing="border-box">
            <Header />
            <Buffer />
            <CreatePost />
        </Box>
    );
}
