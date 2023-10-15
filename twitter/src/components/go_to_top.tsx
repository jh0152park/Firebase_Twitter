import { Button } from "@chakra-ui/react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

export default function GoToTop() {
    return (
        <Button
            position="fixed"
            right="20px"
            bottom="20px"
            borderRadius="50%"
            color="twitter.500"
            onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
        >
            <MdOutlineKeyboardDoubleArrowUp size={15} />
        </Button>
    );
}
