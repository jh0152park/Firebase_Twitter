import { Box, useDisclosure } from "@chakra-ui/react";
import CreatePostModal from "../../post/create_post_modal";

export default function PostBox() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                w="100%"
                h="50px"
                bgColor="twitter.500"
                fontSize="18px"
                fontWeight="bold"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="50px"
                mt="20px"
                _hover={{
                    cursor: "pointer",
                    bgColor: "twitter.600",
                }}
                onClick={onOpen}
            >
                게시하기
            </Box>
            <CreatePostModal isOpen={isOpen} onClose={onClose} />
        </>
    );
}
