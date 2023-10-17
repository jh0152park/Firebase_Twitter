import { Box, Center, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import Influencer from "./influencer";
import { auth, db } from "../../../firebase";
import { Unsubscribe, collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    ILog,
    MyDBID,
    ProfileBGImage,
    ProfilePageVisited,
    TotalFollowing,
} from "../../../global/common";

export default function FollowBar() {
    const user = auth.currentUser;
    const [myDB, setMyDB] = useState<ILog>();
    const totalFollowing = useSetRecoilState(TotalFollowing);
    const profileBackgroundImage = useSetRecoilState(ProfileBGImage);
    const DBID = useSetRecoilState(MyDBID);
    const visited = useRecoilValue(ProfilePageVisited);

    const influencer = [
        {
            name: "Bill Gates",
            src: "data:image/jpeg;base64,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",
            id: "@BillGates",
        },
        {
            name: "Elon Musk",
            src: "data:image/png;base64,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",
            id: "@elonmusk",
        },
        {
            name: "Nico",
            src: "https://avatars.githubusercontent.com/u/3612017?v=4",
            id: "@serranoarevalo",
        },
    ];

    useEffect(() => {
        let unsubscribe: Unsubscribe | null = null;

        async function fetchFollowing() {
            if (user) {
                const tweetsQuery = query(collection(db, user.uid));

                unsubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
                    const log = snapshot.docs.map((doc) => {
                        const { following, like, background_image } =
                            doc.data();
                        return {
                            following,
                            like,
                            background_image,
                            id: doc.id,
                        };
                    });
                    setMyDB(log[0]);
                    totalFollowing(log[0].following.length);
                    profileBackgroundImage(log[0].background_image);
                    DBID(log[0].id);
                });
            }
        }
        // if (!visited) setTimeout(fetchFollowing, 1500);
        // else fetchFollowing();
        fetchFollowing();
        return () => {
            unsubscribe && unsubscribe();
        };
    }, []);

    return (
        <>
            {myDB ? (
                <VStack
                    mt="20px"
                    w="350px"
                    bgColor="#121215"
                    borderRadius="20px"
                    alignItems="flex-start"
                    spacing="0"
                >
                    <Text fontWeight="bold" fontSize="20px" m="15px">
                        팔로우 추천
                    </Text>

                    {influencer.map((user, index) => (
                        <Influencer
                            key={index}
                            name={user.name}
                            src={user.src}
                            id={user.id}
                            followings={myDB.following}
                            dbId={myDB.id}
                        />
                    ))}
                    <Box
                        w="100%"
                        h="40px"
                        mt="10px"
                        px="15px"
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        color="twitter.500"
                        _hover={{ bgColor: "#18191C", cursor: "pointer" }}
                    >
                        <Text>더 보기</Text>
                    </Box>
                    <Box h="15px"></Box>
                </VStack>
            ) : (
                <Center mt="50px">
                    <Spinner />
                </Center>
            )}
        </>
    );
}
