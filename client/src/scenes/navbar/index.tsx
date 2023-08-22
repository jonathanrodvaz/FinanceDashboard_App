import { useState } from 'react'
import { Link } from "react-router-dom";
import PixIcon from '@mui/icons-material/Pix';
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from '@/components/FlexBetween';
import { PaletteType } from '@/types/paletteTypes'



const Navbar = () => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");
    const typedPalette = palette as unknown as { grey: PaletteType, primary: PaletteType, secondary: PaletteType, tertiary: PaletteType };
  return (
  <FlexBetween mb="0.25rem" p="0.5 rem 0 rem" color={typedPalette.grey[300]}>
    {/* LEFT SIDE */}
    <FlexBetween gap="0.75rem">
    <PixIcon sx={{ fontSize: "28px"}}/>
    <Typography variant="h4" fontSize="16px">Finanseer</Typography>
    </FlexBetween>
    {/* RIGHT SIDE */}
    <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: typedPalette.primary[100]}}}>
            <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{

             color: selected == "dashboard" ? "inherit" : typedPalette.grey[700],
             textDecoration: "inherit"   
            }}
            >
            dashboard
            </Link>
        </Box>
        <Box sx={{ "&:hover": { color: typedPalette.primary[100]}}}>
            <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{

             color: selected == "predictions" ? "inherit" : typedPalette.grey[700],
             textDecoration: "inherit"   
            }}
            >
            predictions
            </Link>
        </Box>
    </FlexBetween>

  </FlexBetween>
  );
};

export default Navbar