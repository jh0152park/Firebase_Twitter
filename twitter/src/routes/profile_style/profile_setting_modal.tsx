import {
    Avatar,
    Box,
    Button,
    Center,
    HStack,
    Heading,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { auth, db, storage } from "../../firebase";
import { useRef, useState } from "react";
import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useRecoilValue } from "recoil";
import { MyDBID, ProfileBGImage } from "../../global/common";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";

interface IModal {
    isOpen: boolean;
    onClose: () => void;
}

export default function ProfileSettingModal({ isOpen, onClose }: IModal) {
    const user = auth.currentUser;
    const toast = useToast();
    const navigate = useNavigate();

    const profilePhotoInputRef = useRef<any>();
    const headerPhotoInputRef = useRef<any>();
    const BGImage = useRecoilValue(ProfileBGImage);

    const MB = 1 * 1024 * 1024;

    const [profilePhoto, setProfilePhoto] = useState<any>(null);
    const [profilePhotoURL, setProfilePhotoURL] = useState<any>(null);
    const [headerPhoto, setHeaderPhoto] = useState<any>(null);
    const [headerPhotoURL, setHeaderPhotoURL] = useState<any>(BGImage);

    const DBID = useRecoilValue(MyDBID);
    const [update, setUpdate] = useState(false);

    //////////////////////////////////////////
    //
    // FUNCTIONS
    //
    /////////////////////////////////////////
    function onProfilePictureButtonClicked() {
        if (profilePhotoInputRef) {
            profilePhotoInputRef.current.click();
        }
    }
    function onHeaderPictureButtonClicked() {
        if (headerPhotoInputRef) {
            headerPhotoInputRef.current.click();
        }
    }

    function onModalClose() {
        onClose();
        setProfilePhoto(null);
        setProfilePhotoURL(null);
        setHeaderPhoto(null);
        setHeaderPhotoURL(null);
        profilePhotoInputRef.current.value = null;
        headerPhotoInputRef.current.value = null;
    }

    function onProfilePhotoChaged(e: any) {
        const limit = 5;
        if (e.target.files.length <= 0) {
            profilePhotoInputRef.current.value = "";
            return;
        }
        if (e.target.files.length > 1) {
            toast({
                status: "warning",
                title: "Can't upload files",
                description: "We can upload only one photo, sorry😞",
            });
            return;
        }

        if (e.target.files[0].size > MB * limit) {
            toast({
                status: "warning",
                title: "Can't upload this file!",
                description: `File size is too big, choose different one less then ${limit}MB.`,
            });
            return;
        }

        const file = e.target.files[0];
        const reader = new FileReader();

        setProfilePhoto(file);
        reader.onloadend = () => {
            setProfilePhotoURL(reader.result);
        };
        reader.readAsDataURL(file);
    }

    function onHeaderPhotoChaged(e: any) {
        const limit = 5;
        if (e.target.files.length <= 0) {
            headerPhotoInputRef.current.value = "";
            return;
        }
        if (e.target.files.length > 1) {
            toast({
                status: "warning",
                title: "Can't upload files",
                description: "We can upload only one photo, sorry😞",
            });
            return;
        }

        if (e.target.files[0].size > MB * limit) {
            toast({
                status: "warning",
                title: "Can't upload this file!",
                description: `File size is too big, choose different one less then ${limit}MB.`,
            });
            return;
        }

        const file = e.target.files[0];
        const reader = new FileReader();

        setHeaderPhoto(file);
        reader.onloadend = () => {
            setHeaderPhotoURL(reader.result);
        };
        reader.readAsDataURL(file);
    }

    async function onSubmitChange() {
        if (user) {
            try {
                setUpdate(true);
                if (profilePhoto) {
                    const localinfoRef = ref(
                        storage,
                        `profile_image/${user.uid}-${user.displayName}`
                    );
                    const result = await uploadBytes(
                        localinfoRef,
                        profilePhoto
                    );
                    const imageURL = await getDownloadURL(result.ref);
                    updateProfile(user, { photoURL: imageURL });
                }

                if (headerPhoto) {
                    const localinfoRef = ref(
                        storage,
                        `bg_image/${user.uid}-${user.displayName}`
                    );
                    const result = await uploadBytes(localinfoRef, headerPhoto);
                    const imageURL = await getDownloadURL(result.ref);

                    const bgImage = doc(db, user.uid, DBID);
                    console.log(`bg image`);
                    await updateDoc(bgImage, {
                        background_image: imageURL,
                    });
                }

                toast({
                    status: "success",
                    title: "Update Profile Photo Done😎",
                });
            } catch (e) {
                console.log("update profile occurred error");
                console.log(e);

                toast({
                    status: "error",
                    title: "Can't update profile photo, occurred some error😭",
                });
            } finally {
                setUpdate(false);
            }
        }

        onModalClose();
        navigate("/feed");
    }

    return (
        <Modal isOpen={isOpen} onClose={onModalClose} isCentered>
            <ModalOverlay bgColor="rgba(32, 39, 52, 0.5)" />
            <ModalContent
                bgColor="black"
                minW="600px"
                maxW="600px"
                minH="650px"
                maxH="650px"
                borderRadius="30px"
            >
                <ModalHeader>
                    <Center w="100%">
                        <Heading fontSize="40px">𝕏</Heading>
                    </Center>
                </ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <VStack alignItems="flex-start" ml="60px">
                        <Heading>사진 선택하기</Heading>
                        <Text
                            fontSize="15px"
                            fontWeight="bold"
                            color="rgba(255, 255, 255, 0.4)"
                        >
                            마음에 드는 셀카, 사진이 있나요? 지금 업로드하세요.
                        </Text>
                    </VStack>

                    <Center
                        w="100%"
                        h="200px"
                        mt="80px"
                        position="relative"
                        bgColor="#26282B"
                    >
                        {headerPhotoURL ? (
                            <Image
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                src={headerPhotoURL}
                            />
                        ) : BGImage ? (
                            <Image
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                src={BGImage}
                            />
                        ) : null}
                        <Avatar
                            w="190px"
                            h="190px"
                            border="3px solid rgb(255,255,255)"
                            src={
                                profilePhotoURL
                                    ? profilePhotoURL
                                    : (user?.photoURL as string)
                            }
                            name={user?.displayName as string}
                            fontWeight="bold"
                            position="absolute"
                            top="0"
                            bottom="0"
                            left="0"
                            right="0"
                            margin="auto"
                        />
                    </Center>

                    <VStack mt="30px">
                        <Center
                            w="440px"
                            h="50px"
                            borderRadius="30px"
                            border="1px"
                            borderColor="rgba(255, 255, 255, 0.3)"
                            bgColor="black"
                            fontWeight="bold"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "rgba(255, 255, 255, 0.1)",
                                transition: "all 0.1s linear",
                            }}
                            onClick={onProfilePictureButtonClicked}
                        >
                            프로필 사진 선택하기
                        </Center>
                        <Center
                            w="440px"
                            h="50px"
                            borderRadius="30px"
                            border="1px"
                            borderColor="rgba(255, 255, 255, 0.3)"
                            bgColor="black"
                            fontWeight="bold"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "rgba(255, 255, 255, 0.1)",
                                transition: "all 0.1s linear",
                            }}
                            onClick={onHeaderPictureButtonClicked}
                        >
                            헤더 이미지 선택하기
                        </Center>
                        <HStack>
                            <Center
                                w="215px"
                                h="50px"
                                borderRadius="30px"
                                border="1px"
                                borderColor="rgba(255, 255, 255, 0.3)"
                                bgColor="black"
                                fontWeight="bold"
                                _hover={{
                                    cursor: "pointer",
                                    bgColor: "rgba(255, 255, 255, 0.1)",
                                    transition: "all 0.1s linear",
                                }}
                                onClick={onModalClose}
                            >
                                지금은 넘어가기
                            </Center>
                            <Button
                                w="215px"
                                h="50px"
                                borderRadius="30px"
                                border="1px"
                                borderColor="rgba(255, 255, 255, 0)"
                                bgColor="twitter.500"
                                fontWeight="bold"
                                _hover={{
                                    cursor: "pointer",
                                    bgColor: "twitter.600",
                                    transition: "all 0.1s linear",
                                }}
                                onClick={onSubmitChange}
                                isLoading={update}
                            >
                                변경하기
                            </Button>
                        </HStack>
                    </VStack>
                    <Input
                        ref={profilePhotoInputRef}
                        display="none"
                        type="file"
                        accept="image/*"
                        onChange={onProfilePhotoChaged}
                    />
                    <Input
                        ref={headerPhotoInputRef}
                        display="none"
                        type="file"
                        accept="image/*"
                        onChange={onHeaderPhotoChaged}
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
