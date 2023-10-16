import { HStack, Text } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function ProfileButton() {
    const navigate = useNavigate();

    function onProfileButtonClick() {
        navigate("/profile");
    }

    return (
        <HStack
            fontSize="30px"
            pl="10px"
            pr="20px"
            py="10px"
            borderRadius="30px"
            _hover={{ cursor: "pointer", bgColor: "whiteAlpha.300" }}
            mb="10px"
            onClick={onProfileButtonClick}
        >
            <FaRegUser />
            <Text fontSize="20px" fontWeight="bold" ml="10px">
                프로필
            </Text>
        </HStack>
    );
}
