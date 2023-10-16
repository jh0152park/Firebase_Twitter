import Profile from "./profile";
import Header from "./header";
import ProfileHeaderBuffer from "./profile_header_buffer";
import Timeline from "../timeline/timeline";

export default function ProfileBoard() {
    return (
        <>
            <Header />
            <ProfileHeaderBuffer />
            <Profile />
            <Timeline />
        </>
    );
}
