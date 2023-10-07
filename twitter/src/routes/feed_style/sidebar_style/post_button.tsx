import { Box } from "@chakra-ui/react";

export default function PostBox() {
    return (
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
        >
            게시하기
        </Box>
    );
}
