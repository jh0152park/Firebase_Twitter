import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Logo from "./sidebar_style/logo";
import HomeButton from "./sidebar_style/home_button";
import SearchButton from "./sidebar_style/search_button";
import NoticeButton from "./sidebar_style/notice_button";
import MessageButton from "./sidebar_style/message_button";
import ListButton from "./sidebar_style/list_button";
import BookmarkButton from "./sidebar_style/bookmark_button";
import PremiumButton from "./sidebar_style/premium_button";
import ProfileButton from "./sidebar_style/profile_button";
import MoreButton from "./sidebar_style/more_button";
import PostButton from "./sidebar_style/post_button";
import User from "./sidebar_style/user_button";

export default function Sidebar() {
    return (
        <VStack alignItems={"flex-start"} spacing="0">
            <Logo />
            <HomeButton />
            <SearchButton />
            <NoticeButton />
            <MessageButton />
            <ListButton />
            <BookmarkButton />
            <PremiumButton />
            <ProfileButton />
            <MoreButton />
            <PostButton />
            <User />
        </VStack>
    );
}
