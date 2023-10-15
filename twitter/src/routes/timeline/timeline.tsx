import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Tweet from "./tweet";

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

    async function fetchTweeet() {
        const tweetsQuery = query(
            collection(db, "tweets"),
            orderBy("createdAt", "desc")
        );
        const snapshot = await getDocs(tweetsQuery);
        const tweets = snapshot.docs.map((doc) => {
            const { tweet, createdAt, userId, username, imageURL } = doc.data();
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
        console.log(tweets);
    }

    useEffect(() => {
        fetchTweeet();
    }, []);

    return (
        <>
            {tweets.map((tweet) => (
                <Tweet key={tweet.id} {...tweet}></Tweet>
            ))}
        </>
    );
}
