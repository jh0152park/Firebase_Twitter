import { Box, Center, useDisclosure } from "@chakra-ui/react";
import ProfileSettingModal from "./profile_setting_modal";

export default function ProfileSetting() {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                onClick={onOpen}
            >
                프로필 설정하기
            </Center>
            <ProfileSettingModal isOpen={isOpen} onClose={onClose} />
        </Box>
    );
}
