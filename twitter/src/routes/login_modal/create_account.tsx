import {
    Box,
    Button,
    FormControl,
    HStack,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Select,
    Spinner,
    Text,
    useToast,
} from "@chakra-ui/react";
import {
    createUserWithEmailAndPassword,
    updatePassword,
    updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { addDoc, collection } from "firebase/firestore";
import { CreateUserField } from "../../global/util";

interface IModalForm {
    isOpen: boolean;
    onClose: () => void;
}

interface ICreateAccountForm {
    name: string;
    nickname: string;
    email: string;
    password: string;
}

export default function CreateAccount({ isOpen, onClose }: IModalForm) {
    let Day: number[] = [];
    let Month: number[] = [];
    let Year: number[] = [];

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<ICreateAccountForm>();

    const toast = useToast();

    const [BDay, SetBDay] = useState<string>();
    const [BMonth, SetBMonth] = useState<string>();
    const [BYear, SetBYear] = useState<string>();
    const [createAccountLoading, setCreateAccountLoading] =
        useState<boolean>(false);

    const navigate = useNavigate();

    async function onFormSubmit() {
        try {
            setCreateAccountLoading(true);
            const credentials = await createUserWithEmailAndPassword(
                auth,
                watch("email"),
                watch("password")
            );
            await updateProfile(credentials.user, {
                displayName: watch("name"),
            });

            CreateUserField(credentials.user.uid);

            toast({
                title: "Welcome to 𝕏",
                status: "success",
                isClosable: true,
                colorScheme: "twitter",
            });

            reset();
            onClose();
            setCreateAccountLoading(false);
            navigate("/feed");
        } catch (e) {
            if (e instanceof FirebaseError) {
                console.log("some error occurred when tired to create user");
                console.log(e);
                toast({
                    title: "Created account failed",
                    status: "error",
                    isClosable: true,
                    description: e.message,
                });
                setCreateAccountLoading(false);
            }
        }
    }

    if (!Day.length) for (var i = 1; i < 32; i++) Day.push(i);
    if (!Month.length) for (var i = 1; i < 13; i++) Month.push(i);
    if (!Year.length) for (var i = 2023; i > 1950; i--) Year.push(i);

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={() => {
                    reset();
                    onClose();
                }}
                isCentered
                size={"xl"}
            >
                <ModalOverlay bgColor={"rgba(27, 34, 41, 0.8)"}></ModalOverlay>
                <ModalContent
                    bgColor={"black"}
                    minH={"600px"}
                    position={"relative"}
                >
                    <ModalHeader fontSize={"30px"} my={5} px={"60px"}>
                        계정을 생성하세요
                    </ModalHeader>
                    <ModalCloseButton my={5} px={"60px"} />

                    <ModalBody
                        px={"60px"}
                        as={"form"}
                        onSubmit={handleSubmit(onFormSubmit)}
                    >
                        <FormControl>
                            <Input
                                type="text"
                                placeholder="이름"
                                border={"1px"}
                                mb={7}
                                {...register("name", {
                                    required: true,
                                    minLength: {
                                        value: 3,
                                        message:
                                            "Name must be longer than 3 characters",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message:
                                            "Name must be shorter than 20 characters",
                                    },
                                })}
                                isInvalid={Boolean(errors.name?.message)}
                            ></Input>
                            <Input
                                type="email"
                                placeholder="이메일"
                                border={"1px"}
                                mb={7}
                                {...register("email", {
                                    required: true,
                                })}
                                isInvalid={Boolean(errors.email?.message)}
                            ></Input>
                            <Input
                                type="password"
                                placeholder="비밀번호"
                                border={"1px"}
                                mb={7}
                                {...register("password", {
                                    required: true,
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Password must be longer than 8 characters",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message:
                                            "Password must be shorter than 20 characters",
                                    },
                                })}
                                isInvalid={Boolean(errors.password?.message)}
                            ></Input>
                        </FormControl>

                        <Heading fontSize={"17px"} mt={"25px"} mb={"10px"}>
                            생년월일
                        </Heading>
                        <Box opacity={0.5} fontSize={"14px"} mb={"20px"}>
                            이 정보는 공개적으로 표시되지 않습니다. 비즈니스,
                            반려동물 등 계정 주제에 상관없이 나의 연령을
                            확인하세요.
                        </Box>
                        <HStack>
                            <Select
                                placeholder="년"
                                variant="outline"
                                required
                                onChange={(e) => {
                                    SetBYear(e.target.value);
                                }}
                            >
                                {Year.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </Select>
                            <Select
                                placeholder="월"
                                variant="outline"
                                required
                                onChange={(e) => {
                                    SetBMonth(e.target.value);
                                }}
                            >
                                {Month.map((month) => (
                                    <option key={month} value={month}>
                                        {month}월
                                    </option>
                                ))}
                            </Select>
                            <Select
                                placeholder="일"
                                variant="outline"
                                required
                                onChange={(e) => {
                                    SetBDay(e.target.value);
                                }}
                            >
                                {Day.map((day) => (
                                    <option key={day} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </Select>
                        </HStack>

                        <Text fontSize={"sm"} color={"red.500"} mt={"10px"}>
                            {errors.name?.message ? (
                                <p>⚠️ {errors.name?.message}</p>
                            ) : null}
                            {errors.email?.message ? (
                                <p>⚠️ {errors.email?.message}</p>
                            ) : null}
                            {errors.password?.message ? (
                                <p>⚠️ {errors.password?.message}</p>
                            ) : null}
                        </Text>

                        <Box px={"60px"} mt={"80px"}>
                            <Button
                                w="100%"
                                type="submit"
                                bgColor="twitter.500"
                                borderRadius={"40px"}
                                _hover={{ bgColor: "twitter.600" }}
                                mb={5}
                            >
                                생성하기
                            </Button>
                        </Box>
                        {createAccountLoading ? (
                            <Spinner
                                position={"absolute"}
                                top={"50%"}
                                left="0"
                                right="0"
                                margin={"auto"}
                            />
                        ) : null}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
