import { Box } from "@chakra-ui/react";
import Header from "./feedboard_style/header";
import Buffer from "./feedboard_style/header_buffer";

export default function FeedBoard() {
    return (
        <Box overflow="hidden" boxSizing="border-box">
            <Header />
            <Buffer />
            <Box w="100%" h="105px" bgColor="twitter.100"></Box>
        </Box>
    );
}
