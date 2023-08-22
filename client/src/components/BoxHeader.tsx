import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import FlexBetween from './FlexBetween'
import { PaletteType } from '@/types/paletteTypes'

type Props = {
    title: string;
    sideText: string;
    subtitle?: string;
    icon?: React.ReactNode; 
    

}

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
    const { palette } = useTheme();
    const typedPalette = palette as unknown as { grey: PaletteType, primary: PaletteType, secondary: PaletteType, tertiary: PaletteType };
    return (
    <FlexBetween color={typedPalette.grey[400]} 
    margin="1.5rem 1rem 0 1rem"
    >
        <FlexBetween>
            {icon}
            <Box width="100%">
                <Typography variant="h4" mb="-0.1rem">
                    {title}
                </Typography>
                <Typography variant="h6">{subtitle}</Typography>
            </Box>
        </FlexBetween>
        <Typography variant="h5" fontWeight="700" color={typedPalette.secondary[500]}>
            {sideText}
        </Typography>
    </FlexBetween>
  )
}

export default BoxHeader