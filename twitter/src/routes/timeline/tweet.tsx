import { Box, Image, Text } from "@chakra-ui/react";
import { ITweet } from "./timeline";

export default function Tweet({
    username,
    imageURL,
    tweet,
    userId,
    createdAt,
}: ITweet) {
    return (
        <Box>
            <Text>{username}</Text>
            <Text>{userId.slice(0, 10)}</Text>
            <Text>{createdAt}</Text>
            <Text>{tweet}</Text>
            {imageURL ? (
                <Box w="100%" h="300px">
                    <Image src={imageURL} objectFit="cover" />
                </Box>
            ) : null}
        </Box>
    );
}
