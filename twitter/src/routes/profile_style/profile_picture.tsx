import { Avatar, Box, useDisclosure } from "@chakra-ui/react";
import { auth } from "../../firebase";
import ProfileSettingModal from "./profile_setting_modal";

export default function ProfilePicture() {
    const user = auth.currentUser;
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box position="absolute" left="20px" top="165px">
                <Avatar
                    w="140px"
                    h="140px"
                    border="5px solid rgb(0,0,0)"
                    _hover={{ cursor: "pointer" }}
                    src={user?.photoURL as string}
                    name={user?.displayName as string}
                    onClick={onOpen}
                />
            </Box>
            <ProfileSettingModal isOpen={isOpen} onClose={onClose} />
        </>
    );
}
