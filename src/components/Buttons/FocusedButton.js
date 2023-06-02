import { Button } from "@mui/material";
import React from "react";


const FocusedButton = ({ sx = {}, arrow, children, fit, ...props }) => {
    return (
        <Button
            variant="outlined"
            sx={{
                position: 'relative',
                backgroundClip: 'padding-box',
                background: 'linear-gradient(to left, purple, blue)',
                borderTop: '3px solid transparent',
                borderBottom: '3px solid transparent',
                borderLeft: '0px solid transparent',
                borderRight: '0px solid transparent',
                
                '&:after': {
                    position: 'absolute',
                    top: -3,
                    left: -3,
                    right: -3,
                    bottom: -3,
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

export default FocusedButton;