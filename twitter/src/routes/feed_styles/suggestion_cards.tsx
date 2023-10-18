import Buffer from "./suggestion_style/suggestion_buffer";
import PremiumBar from "./suggestion_style/premium_bar";
import SearchBar from "./suggestion_style/search_bar";
import TrendBar from "./suggestion_style/trend_bar";
import FollowBar from "./suggestion_style/follow_suggestion";
import { Box } from "@chakra-ui/react";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function SuggestionCards() {
    const { scrollY } = useScroll();
    const [scrollFix, setScrollFix] = useState<boolean>(false);

    useEffect(() => {
        scrollY.onChange(() => {
            // console.log(scrollY.get());
            if (scrollY.get() > 480) setScrollFix(true);
            else setScrollFix(false);
        });
    }, [scrollY]);

    return (
        // <Box position="absolute" top="10px">
        <Box h="1300px" position="absolute" top="0">
            <SearchBar />
            <Buffer />
            <PremiumBar />
            <Box
                position={scrollFix ? "fixed" : "unset"}
                top={scrollFix ? "-250px" : "unset"}
            >
                <TrendBar />
                <FollowBar />
            </Box>
        </Box>
    );
}
