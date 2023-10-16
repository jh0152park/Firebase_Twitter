import { Box, Center } from "@chakra-ui/react";

export default function ProfileSetting() {
    return (
        <Box
            py="15px"
            px="20px"
            w="100%"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
        >
            <Center
                w="130px"
                h="40px"
                border="1px"
                borderColor="rgba(255, 255, 255, 0.3)"
                borderRadius="30px"
                fontWeight="bold"
                bgColor="black"
                _hover={{
                    cursor: "pointer",
                    bgColor: "rgba(255, 255, 255, 0.1)",
                    transition: "all 0.2s linear",
                }}
            >
                프로필 설정하기
            </Center>
        </Box>
    );
}
