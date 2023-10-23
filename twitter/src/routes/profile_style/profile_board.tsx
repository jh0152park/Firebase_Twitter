import Profile from "./profile";
import Header from "./header";
import ProfileHeaderBuffer from "./profile_header_buffer";
import Timeline from "../timeline/timeline";
import { useRecoilValue } from "recoil";
import {
    LikedTweets,
    MediaTweets,
    ProfileOptionButton,
} from "../../global/common";
import Suggestion from "./suggestion";
import Highlight from "./highlite";
import MediaTimeline from "../timeline/media_timeline";
import LikedTimeline from "../timeline/liked_timeline";
import { ComputeMyTotalTweetCount } from "../../global/util";
import { auth } from "../../firebase";
import OwnTimeline from "../timeline/own_timeline";
import Media from "./media";

// 2023.10.23 twitter challenge for user profile

export default function ProfileBoard() {
    const user = auth.currentUser;

    let totalTweets;
    if (user) totalTweets = ComputeMyTotalTweetCount(user.uid);

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
                    <OwnTimeline />
                ) : (
                    <Suggestion />
                )
            ) : null}
            {currentOption === "답글" ? (
                totalTweets ? (
                    <OwnTimeline />
                ) : (
                    <Suggestion />
                )
            ) : null}
            {currentOption === "하이라이트" ? <Highlight /> : null}

            {currentOption === "미디어" ? (
                mediaTweets ? (
                    <MediaTimeline />
                ) : (
                    <Media />
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
