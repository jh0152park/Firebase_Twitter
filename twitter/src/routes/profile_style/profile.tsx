import { Avatar, Box } from "@chakra-ui/react";
import BackgroundImage from "./background_image";
import ProfilePicture from "./profile_picture";

// avatar 140 * 140
// 100% * 65px
export default function Profile() {
    return (
        <Box
            w="600px"
            h="460px"
            borderBottom="1px"
            borderLeft="1px"
            borderRight="1px"
            borderColor="rgba(255, 255, 255, 0.2)"
            bgColor="rgba(0, 0, 0, 0.9)"
            position="relative"
        >
            <BackgroundImage />
            <ProfilePicture />
        </Box>
    );
}
