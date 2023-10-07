import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Logo from "./sidebar_style/logo";
import HomeButton from "./sidebar_style/home_button";
import SearchButton from "./sidebar_style/search_button";

export default function Sidebar() {
    const navigate = useNavigate();

    return (
        <VStack alignItems={"flex-start"}>
            <Logo />
            <HomeButton />
            <SearchButton />
        </VStack>
    );
}
