import { extendTheme } from '@chakra-ui/react'


export const colors = {
    brand: "#8B919F",
    green: "#4AB299",
    pink: "#E55986"
}


const theme = extendTheme({
  fonts: {
    heading: `Outfit, sans-serif`,
    body: `Raleway, sans-serif`,
  },
  colors: {
    brand: "#8B919F",
  },
})

export default theme