import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
    return (
        <Box position="fixed" top="0" w="350px" h="50px" bgColor="black">
            <InputGroup mt="10px">
                <InputLeftElement pt="10px" pl="10px">
                    <BiSearch size="20px" color="rgba(255, 255, 255, 0.4)" />
                </InputLeftElement>
                <Input
                    w="350px"
                    h="50px"
                    borderRadius="60px"
                    border="2px"
                    borderColor="rgba(0, 0, 0, 0)"
                    focusBorderColor="twitter.600"
                    color="rgba(255, 255, 255, 0.4)"
                    bgColor="#191B1D"
                    placeholder="검색"
                    pl="50px"
                    variant="filled"
                />
            </InputGroup>
        </Box>
    );
}
