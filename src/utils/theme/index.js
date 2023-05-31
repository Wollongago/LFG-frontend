import { createTheme } from "@mui/material";
import typography from "./typography";
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#0E0E0E"
        },
        background: {
            default: "#0E0E0E"
        },
        typography
    }
});

export default theme;
