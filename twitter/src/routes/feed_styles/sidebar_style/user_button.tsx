import {
    Avatar,
    Box,
    Center,
    HStack,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { auth } from "../../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function User() {
    const user = auth.currentUser;

    const toast = useToast();
    const navigate = useNavigate();
    const [more, setMore] = useState(false);

    function signout() {
        if (window.confirm("Are you sure you want to sign out?")) {
            auth.signOut();
            navigate("/");
            toast({
                status: "success",
                title: "Sign out done",
                description: "Sign out successfully🫡",
            });
        } else {
            setMore(false);
        }
    }

    return (
        <>
            <Box
                mt="100px"
                ml="-40px"
                w="300px"
                h="110px"
                py="13px"
                alignItems="flex-start"
                bgColor="black"
                border="1px"
                borderColor="rgba(255, 255, 255, 0.2)"
                borderRadius="20px"
                boxShadow="0px 0px 15px rgba(255, 255, 255, 0.3)"
                opacity={more ? 1 : 0}
                transition="all 0.2s linear"
            >
                <VStack
                    w="100%"
                    h="100%"
                    spacing="0"
                    fontWeight="bold"
                    fontSize="15px"
                >
                    <Center
                        w="100%"
                        h="50%"
                        justifyContent="flex-start"
                        _hover={{
                            cursor: "pointer",
                            bgColor: "whiteAlpha.300",
                            transition: "all 0.1s linear",
                        }}
                        pl="20px"
                    >
                        기존 계정 추가
                    </Center>
                    <Center
                        w="100%"
                        h="50%"
                        justifyContent="flex-start"
                        _hover={{
                            cursor: "pointer",
                            bgColor: "whiteAlpha.300",
                            transition: "all 0.1s linear",
                        }}
                        pl="20px"
                        onClick={signout}
                    >
                        @{user?.uid.slice(0, 10)} 계정에서 로그아웃
                    </Center>
                </VStack>
            </Box>

            <Center
                w="100%"
                h="60px"
                // mt="210px"
                pl="10px"
                pr="10px"
                py="5px"
                borderRadius="50px"
                _hover={{
                    cursor: "pointer",
                    bgColor: "whiteAlpha.300",
                }}
                onClick={() => {
                    setMore((prev) => !prev);
                }}
            >
                <HStack w="100%" justifyContent="space-between">
                    <HStack>
                        <Avatar
                            w="40px"
                            h="40px"
                            src={user?.photoURL as string}
                            name={user?.displayName as string}
                        />
                        <VStack alignItems="flex-start" spacing="1">
                            <Text fontSize="15px" fontWeight="bold">
                                {user?.displayName}
                            </Text>
                            <Text fontSize="15px" textColor="gray">
                                @{user?.uid.slice(0, 10)}
                            </Text>
                        </VStack>
                    </HStack>

                    <Box>
                        <BsThreeDots />
                    </Box>
                </HStack>
            </Center>
        </>
    );
}
