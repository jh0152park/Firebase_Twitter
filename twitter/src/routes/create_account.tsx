import {
    Box,
    Button,
    Center,
    Container,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface IModalForm {
    isOpen: boolean;
    onClose: () => void;
}

export default function CreateAccount({ isOpen, onClose }: IModalForm) {
    let Day: number[] = [];
    let Month: number[] = [];
    let Year: number[] = [];

    const { register, handleSubmit, setValue } = useForm();

    function onFormSubmit() {}

    if (!Day.length) for (var i = 1; i < 32; i++) Day.push(i);
    if (!Month.length) for (var i = 1; i < 13; i++) Month.push(i);
    if (!Year.length) for (var i = 2023; i > 1950; i--) Year.push(i);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
                <ModalOverlay bgColor={"rgba(27, 34, 41, 0.8)"}></ModalOverlay>
                <ModalContent bgColor={"black"} minH={"600px"}>
                    <ModalHeader fontSize={"30px"} my={5} px={"60px"}>
                        계정을 생성하세요
                    </ModalHeader>
                    <ModalCloseButton my={5} px={"60px"} />

                    <ModalBody px={"60px"}>
                        <FormControl>
                            <Input
                                type="text"
                                placeholder="이름"
                                border={"1px"}
                                mb={7}
                            ></Input>
                            <Input
                                type="text"
                                placeholder="닉네임"
                                border={"1px"}
                                mb={7}
                            ></Input>
                            <Input
                                type="email"
                                placeholder="이메일"
                                border={"1px"}
                                mb={7}
                            ></Input>
                            <Input
                                type="password"
                                placeholder="비밀번호"
                                border={"1px"}
                                mb={7}
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
                            <Select placeholder="년" variant="outline">
                                {Year.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </Select>
                            <Select placeholder="월" variant="outline">
                                {Month.map((month) => (
                                    <option key={month} value={month}>
                                        {month}월
                                    </option>
                                ))}
                            </Select>
                            <Select placeholder="일" variant="outline">
                                {Day.map((day) => (
                                    <option key={day} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </Select>
                        </HStack>
                    </ModalBody>

                    <ModalFooter px={"60px"}>
                        <Button
                            w="100%"
                            bgColor="twitter.500"
                            borderRadius={"40px"}
                            _hover={{ bgColor: "twitter.600" }}
                            onClick={onClose}
                            mb={5}
                        >
                            생성하기
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}