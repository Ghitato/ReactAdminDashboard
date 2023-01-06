import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react";
import { ColourModeContext, tokens } from "../../themeAlt";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {

    const theme = useTheme()
    //This grabs the theme by React Context but in Material UI (mui)
    const colours = tokens(theme.palette.mode)
    //Anytime we want to use the colourMode from mui we can grab it from useTheme and pass it into tokens
    const colourMode = useContext(ColourModeContext)
    //Allows us to toggle different states for the colourMode

    return(
        <Box display="flex" justifyContent="space-between" p={2}>
            {/*The Box component is like a div component but we can put CSS in it (only if using the mui import) */}
            {/*Other mui components we need to use sx={{}}*/}

            {/*Search Bar*/}
            <Box 
                display="flex" 
                backgroundColour={colours.primary[400]} 
                borderRadius="3px"
                >
                    <InputBase sx={{ ml: 2, fl: 1 }} placeHolder="Search"></InputBase>
                    {/*InputBase = Input section for searching, ml = margin left, fl = flex*/}
                    <IconButton type="button" sx={{ p: 1 }}>
                        <SearchIcon></SearchIcon>
                    </IconButton>
            </Box>
                  {/* ICONS */}
            <Box display="flex">
                <IconButton onClick={colourMode.toggleColourMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar;