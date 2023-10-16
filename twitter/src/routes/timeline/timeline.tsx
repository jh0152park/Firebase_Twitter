import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Tweet from "./tweet";
import { Unsubscribe } from "firebase/auth";
import { useRecoilState, useSetRecoilState } from "recoil";
import { NumberOfTweets } from "../../global/common";

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
}

export default function Timeline() {
    const [tweets, setTweets] = useState<ITweet[]>([]);
    const totalTweets = useSetRecoilState(NumberOfTweets);

    useEffect(() => {
        let unsubscribe: Unsubscribe | null = null;

        async function fetchTweeet() {
            const tweetsQuery = query(
                collection(db, "tweets"),
                orderBy("createdAt", "desc")
            );

            unsubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
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
                    };
                });
                setTweets(tweets);
                totalTweets(tweets.length);
            });
        }
        fetchTweeet();
        return () => {
            unsubscribe && unsubscribe();
        };
    }, []);

    console.log(tweets);

    return (
        <>
            {tweets.map((tweet) => (
                <Tweet key={tweet.id} {...tweet}></Tweet>
            ))}
        </>
    );
}
