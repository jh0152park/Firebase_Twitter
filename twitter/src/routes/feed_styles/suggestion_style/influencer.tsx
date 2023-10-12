import {
    Avatar,
    Box,
    Center,
    HStack,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";

interface IProfile {
    name: string;
    src: string;
    id: string;
}

export default function Influencer({ name, src, id }: IProfile) {
    return (
        <HStack
            w="100%"
            h="80px"
            p="15px"
            _hover={{ bgColor: "#18191C", cursor: "pointer" }}
            justifyContent="space-between"
        >
            <HStack>
                <Avatar src={src}></Avatar>
                <VStack alignItems="flex-start">
                    <HStack spacing="0">
                        <Text fontWeight="bold">{name}</Text>
                        <Image
                            ml="2px"
                            boxSize="15px"
                            objectFit="cover"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1024px-Twitter_Verified_Badge.svg.png"
                        />
                    </HStack>
                    <Text fontSize="16px" color="rgba(255, 255, 255, 0.4)">
                        {id}
                    </Text>
                </VStack>
            </HStack>
            <Center
                w="70px"
                h="30px"
                bgColor="whitesmoke"
                borderRadius="50px"
                color="black"
                fontSize="13px"
                fontWeight="bold"
                _hover={{ opacity: 0.9 }}
            >
                팔로우
            </Center>
        </HStack>
    );
}
