import { AiOutlinePicture, AiOutlineFileGif } from "react-icons/ai";
import { BsListStars, BsEmojiSmile } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { Box, Icon } from "@chakra-ui/react";

export default function PostOptionButton({
    icon,
    enable,
}: {
    icon: any;
    enable: boolean;
}) {
    return (
        <Box
            w="35px"
            h="35px"
            borderRadius="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={{
                cursor: "pointer",
                bgColor: "rgba(14, 59, 94, 0.5)",
            }}
            opacity={enable ? 1 : 0.5}
        >
            <Icon as={icon} w="20px" h="20px" />
        </Box>
    );
}
