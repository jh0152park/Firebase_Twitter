import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { auth } from "../../firebase";
import { BsCalendar3 } from "react-icons/bs";
import { ComputeMonth } from "../../global/util";
import { useRecoilValue } from "recoil";
import {
    BillGatesFollow,
    ElonMuskFollow,
    NicoFollow,
} from "../../global/common";

export default function ProfileInfo() {
    let billgate = useRecoilValue(BillGatesFollow);
    let elonmusk = useRecoilValue(ElonMuskFollow);
    let nico = useRecoilValue(NicoFollow);

    const user = auth.currentUser;
    let time = user?.metadata.creationTime;
    let year = 2023;
    let month = 10;
    let following = 0;

    if (time) {
        year = +time.split(" ")[3];
        month = ComputeMonth(time.split(" ")[2]);
    }

    if (billgate) following++;
    if (elonmusk) following++;
    if (nico) following++;

    return (
        <VStack w="150px" h="110px" mt="15px" ml="20px" alignItems="flex-start">
            <VStack id="name" alignItems="flex-start" spacing="0">
                <Heading fontWeight="bold" fontSize="20px" mb="5px">
                    {user?.displayName}
                </Heading>
                <Text color="rgba(255, 255, 255, 0.4)" fontSize="14px">
                    @{user?.uid.slice(0, 10)}
                </Text>
            </VStack>
            <HStack
                mt="10px"
                w="100%"
                id="createdAt"
                alignItems="flex-start"
                color="rgba(255, 255, 255, 0.4)"
                fontSize="14px"
                fontWeight="bold"
            >
                <BsCalendar3 />
                <Text>
                    {" "}
                    가입일: {year}년 {month}월
                </Text>
            </HStack>
            <HStack id="follow" fontSize="14px" mt="10px" spacing={0}>
                <HStack spacing={1} mr="20px">
                    <Text fontWeight="bold">{following}</Text>
                    <Text color="rgba(255, 255, 255, 0.4)">팔로우 중</Text>
                </HStack>
                <HStack spacing={1}>
                    <Text fontWeight="bold">0</Text>
                    <Text color="rgba(255, 255, 255, 0.4)">팔로워</Text>
                </HStack>
            </HStack>
        </VStack>
    );
}
