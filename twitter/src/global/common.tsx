import { atom } from "recoil";

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

export const BillGatesFollow = atom<boolean>({
    key: "billgates",
    default: false,
});

export const ElonMuskFollow = atom<boolean>({
    key: "elonmusk",
    default: false,
});

export const NicoFollow = atom<boolean>({
    key: "nico",
    default: false,
});

export const TrumpFollow = atom<boolean>({
    key: "trump",
    default: false,
});
export const ConanFollow = atom<boolean>({
    key: "conan",
    default: false,
});
export const BTSFollow = atom<boolean>({
    key: "bts",
    default: false,
});

export const EntireTweets = atom<ITweet[]>({
    key: "enireTweets",
    default: [],
});

export const NumberOfTweets = atom<number>({
    key: "totalTweets",
    default: 0,
});

export const ProfileBGImage = atom<string>({
    key: "profileBGImage",
    default: "",
});

export const ProfileOptionButton = atom<string>({
    key: "profileOptionButton",
    default: "게시물",
});

export const MediaTweets = atom<number>({
    key: "mediaTweet",
    default: 0,
});

export const LikedTweets = atom<number>({
    key: "likedTweet",
    default: 0,
});
