import Profile from "./profile";
import Header from "./header";
import ProfileHeaderBuffer from "./profile_header_buffer";
import Timeline from "../timeline/timeline";
import { useRecoilValue } from "recoil";
import { NumberOfTweets, ProfileOptionButton } from "../../global/common";
import Suggestion from "./suggestion";
import Highlight from "./highlite";

export default function ProfileBoard() {
    const totalTweets = useRecoilValue(NumberOfTweets);
    const currentOption = useRecoilValue(ProfileOptionButton);

    return (
        <>
            <Header />
            <ProfileHeaderBuffer />
            <Profile />

            {currentOption === "게시물" ? (
                totalTweets ? (
                    <Timeline />
                ) : (
                    <Suggestion />
                )
            ) : null}
            {currentOption === "답글" ? (
                totalTweets ? (
                    <Timeline />
                ) : (
                    <Suggestion />
                )
            ) : null}
            {currentOption === "하이라이트" ? <Highlight /> : null}
            {currentOption === "미디어" ? (
                totalTweets ? null : (
                    <Suggestion />
                )
            ) : null}
            {currentOption === "마음에 들어요" ? (
                totalTweets ? null : (
                    <Suggestion />
                )
            ) : null}
        </>
    );
}
