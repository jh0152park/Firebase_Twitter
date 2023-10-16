import { atom } from "recoil";

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
