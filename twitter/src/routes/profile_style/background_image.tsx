import { Box, Image } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { ProfileBGImage } from "../../global/common";

// 2023.10.23 twitter challenge for user profile

export default function BackgroundImage() {
    const BGImage = useRecoilValue(ProfileBGImage);

    console.log(`profile bg image: ${BGImage}`);

    return (
        <>
            {BGImage ? (
                <Image
                    w="100%"
                    h="200px"
                    objectFit="cover"
                    src={BGImage}
                ></Image>
            ) : (
                <Box w="100%" h="200px" bgColor="#26282B"></Box>
            )}
        </>
    );
}
