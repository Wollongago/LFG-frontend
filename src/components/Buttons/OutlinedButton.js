import { Button } from "@mui/material";
import React from "react";


const OutlinedButton = ({ sx = {}, children, fit, ...props }) => {
    return (
        <Button
            variant="outlined"
            sx={{
                position: 'relative',
                border: '1px solid transparent',
                backgroundClip: 'padding-box',
                // background: 'linear-gradient(to left, red, yellow)',
                '&:after': {
                    position: 'absolute',
                    top: -3,
                    left: -3,
                    right: -3,
                    bottom: -3,
                    background: 'linear-gradient(to left, blue, purple)',
                    content: '""',
                    zIndex: -1,
                    borderRadius: 1,
                },
                color: "text.primary",
                width: fit ? "fit-content" : "100%",
                ...sx,
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default OutlinedButton;