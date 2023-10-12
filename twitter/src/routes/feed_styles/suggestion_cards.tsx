import Buffer from "./suggestion_style/suggestion_buffer";
import PremiumBar from "./suggestion_style/premium_bar";
import SearchBar from "./suggestion_style/search_bar";
import TrendBar from "./suggestion_style/trend_bar";
import FollowBar from "./suggestion_style/follow_suggestion";

export default function SuggestionCards() {
    return (
        <>
            <SearchBar />
            {/* <Buffer /> */}
            <PremiumBar />
            <TrendBar />
            <FollowBar />
        </>
    );
}
