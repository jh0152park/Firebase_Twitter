import { HStack, Icon, Text } from "@chakra-ui/react";

export default function InteractButton({
    icon,
    number,
}: {
    icon: any;
    number: any;
}) {
    return (
        <HStack
            alignItems="center"
            color="rgba(255, 255, 255, 0.5)"
            fontSize="14px"
            spacing="0"
        >
            <Icon as={icon} width="15px" height="15px" />
            <Text ml="5px">{number.toLocaleString("ko-KR")}</Text>
        </HStack>
    );
}
