import { Box } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { ProfileBGImage } from "../../global/common";

export default function BackgroundImage() {
    const BGImage = useRecoilValue(ProfileBGImage);

    return <Box w="100%" h="200px" bgColor="#26282B"></Box>;
}
