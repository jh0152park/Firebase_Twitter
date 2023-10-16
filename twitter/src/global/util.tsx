import { useRecoilValue } from "recoil";
import { auth } from "../firebase";
import { EntireTweets } from "./common";

const MONTH: any = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
};

export function ComputeMonth(month: string): number {
    return MONTH[month];
}

export function ComputeMyTotalTweetCount(uid: number | string) {
    let cnt = 0;
    const entireTweets = useRecoilValue(EntireTweets);
    for (var tweet of entireTweets) {
        if (tweet.userId === uid) cnt++;
        // console.log(tweet.tweet);
        // console.log(tweet.userId);
        // console.log(uid);
        // console.log("---------------------");
    }
    return cnt;
}
