import { Box, Center, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { ComputeMyTotalTweetCount } from "../../global/util";

// 2023.10.23 twitter challenge for user profile

export default function Header() {
    const user = auth.currentUser;
    const navigate = useNavigate();
    let totalTweets;
    if (user) totalTweets = ComputeMyTotalTweetCount(user.uid);

    return (
        <Box
            w="600px"
            h="55px"
            position="fixed"
            top="0"
            borderBottom="1px"
            borderLeft="1px"
            borderRight="1px"
            borderColor="rgba(255, 255, 255, 0.2)"
            bgColor="rgba(0, 0, 0, 0.9)"
            zIndex="99"
        >
            <HStack pl="5px" py="5px" w="100%" h="100%">
                <Center
                    w="35px"
                    h="35px"
                    borderRadius="50%"
                    _hover={{
                        cursor: "pointer",
                        bgColor: "rgba(255, 255, 255, 0.1)",
                        transition: "all 0.1s linear",
                    }}
                    onClick={() => {
                        navigate("/feed");
                    }}
                >
                    <BiLeftArrowAlt size={30} />
                </Center>
                <VStack alignItems="flex-start" spacing="0" ml="20px">
                    <Heading fontWeight="bold" fontSize="20px" mb="5px">
                        {user?.displayName}
                    </Heading>
                    <Text color="rgba(255, 255, 255, 0.4)" fontSize="13px">
                        {totalTweets} 게시물
                    </Text>
                </VStack>
            </HStack>
        </Box>
    );
}
