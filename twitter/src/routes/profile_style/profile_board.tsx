import Profile from "./profile";
import Header from "./header";
import ProfileHeaderBuffer from "./profile_header_buffer";
import Timeline from "../timeline/timeline";
import { useRecoilValue } from "recoil";
import {
    LikedTweets,
    MediaTweets,
    NumberOfTweets,
    ProfileOptionButton,
} from "../../global/common";
import Suggestion from "./suggestion";
import Highlight from "./highlite";
import MediaTimeline from "../timeline/medai_timeline";
import LikedTimeline from "../timeline/liked_timeline";

export default function ProfileBoard() {
    const totalTweets = useRecoilValue(NumberOfTweets);
    const currentOption = useRecoilValue(ProfileOptionButton);
    const mediaTweets = useRecoilValue(MediaTweets);
    const likedTweets = useRecoilValue(LikedTweets);

    console.log(`mediaTweets: ${mediaTweets}`);
    console.log(`likedTweets: ${likedTweets}`);

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
                mediaTweets ? (
                    <MediaTimeline />
                ) : (
                    <Suggestion />
                )
            ) : null}
            {currentOption === "마음에 들어요" ? (
                likedTweets ? (
                    <LikedTimeline />
                ) : (
                    <Suggestion />
                )
            ) : null}
        </>
    );
}
