import { Avatar, Box } from "@chakra-ui/react";
import { auth } from "../../firebase";

export default function ProfilePicture() {
    const user = auth.currentUser;
    return (
        <Box position="absolute" left="20px" top="130px">
            <Avatar
                w="140px"
                h="140px"
                border="5px solid rgb(0,0,0)"
                _hover={{ cursor: "pointer" }}
                src={user?.photoURL as string}
                name={user?.displayName as string}
            />
        </Box>
    );
}
