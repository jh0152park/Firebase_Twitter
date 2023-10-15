import {
    collection,
    getDocs,
    limit,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Tweet from "./tweet";
import { Unsubscribe } from "firebase/auth";

export interface ITweet {
    id: string;
    imageURL: string;
    tweet: string;
    userId: string;
    username: string;
    createdAt: number;
}

export default function Timeline() {
    const [tweets, setTweets] = useState<ITweet[]>([]);

    useEffect(() => {
        // fetchTweeet();
        let unsubscribe: Unsubscribe | null = null;

        async function fetchTweeet() {
            const tweetsQuery = query(
                collection(db, "tweets"),
                orderBy("createdAt", "desc")
            );

            unsubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
                const tweets = snapshot.docs.map((doc) => {
                    const { tweet, createdAt, userId, username, imageURL } =
                        doc.data();
                    return {
                        tweet,
                        createdAt,
                        userId,
                        username,
                        imageURL,
                        id: doc.id,
                    };
                });
                setTweets(tweets);
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
                <Tweet key={tweet.id} {...tweet}></Tweet>
            ))}
        </>
    );
}
