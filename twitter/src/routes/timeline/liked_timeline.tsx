import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Tweet from "./tweet";
import { Unsubscribe } from "firebase/auth";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LikedTweets, MediaTweets, NumberOfTweets } from "../../global/common";

export interface ITweet {
    id: string;
    imageURL: string;
    creatorImageURL: string;
    tweet: string;
    userId: string;
    username: string;
    createdAt: number;
    comment: number;
    retweet: number;
    like: number;
    view: number;
    isLiked: boolean;
}

export default function LikedTimeline() {
    const [tweets, setTweets] = useState<ITweet[]>([]);
    const totalTweets = useSetRecoilState(NumberOfTweets);
    const mediaTweets = useSetRecoilState(MediaTweets);
    const likedTweets = useSetRecoilState(LikedTweets);

    useEffect(() => {
        let unsubscribe: Unsubscribe | null = null;

        async function fetchTweeet() {
            const tweetsQuery = query(
                collection(db, "tweets"),
                orderBy("createdAt", "desc")
            );

            unsubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
                let media = 0;
                let liked = 0;

                const tweets = snapshot.docs.map((doc) => {
                    const {
                        tweet,
                        createdAt,
                        userId,
                        username,
                        imageURL,
                        creatorImageURL,
                        comment,
                        retweet,
                        like,
                        view,
                        isLiked,
                    } = doc.data();
                    return {
                        tweet,
                        createdAt,
                        userId,
                        username,
                        imageURL,
                        creatorImageURL,
                        id: doc.id,
                        comment,
                        retweet,
                        like,
                        view,
                        isLiked,
                    };
                });
                setTweets(tweets);
                totalTweets(tweets.length);

                for (var tweet of tweets) {
                    if (tweet.imageURL) media++;
                    if (tweet.isLiked) liked++;
                }
                mediaTweets(media);
                likedTweets(liked);
            });
        }
        fetchTweeet();
        return () => {
            unsubscribe && unsubscribe();
        };
    }, []);

    return (
        <>
            {tweets.map((tweet) => (
                <>
                    {tweet.isLiked ? (
                        <Tweet key={tweet.id} {...tweet}></Tweet>
                    ) : null}
                </>
            ))}
        </>
    );
}
