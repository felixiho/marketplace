import { colors } from "@/config/chakra";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";



const SearchBox = () => {
    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<IconContext.Provider value={{ color: colors.brand }}><FaSearch /></IconContext.Provider>} />
            <Input placeholder="Search...." type="text"  />
        </InputGroup>
    );
}

export default SearchBox;