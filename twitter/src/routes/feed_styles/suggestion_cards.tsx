import Buffer from "./suggestion_style/suggestion_buffer";
import PremiumBar from "./suggestion_style/premium_bar";
import SearchBar from "./suggestion_style/search_bar";

export default function SuggestionCards() {
    return (
        <>
            <SearchBar />
            <Buffer />
            <PremiumBar />
        </>
    );
}