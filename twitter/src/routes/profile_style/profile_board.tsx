import Profile from "./profile";
import Header from "./header";
import ProfileHeaderBuffer from "./profile_header_buffer";
import Timeline from "../timeline/timeline";
import { useRecoilValue } from "recoil";
import { NumberOfTweets } from "../../global/common";
import Suggestion from "./suggestion";

export default function ProfileBoard() {
    const totalTweets = useRecoilValue(NumberOfTweets);

    return (
        <>
            <Header />
            <ProfileHeaderBuffer />
            <Profile />
            {totalTweets ? <Timeline /> : <Suggestion />}
        </>
    );
}
