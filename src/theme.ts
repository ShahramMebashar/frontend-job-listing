import { Theme } from "@emotion/react";

const defaultTheme =  <Theme> {
    colors: {
        primary: '#5ba4a4',
        lightCyan: '#eef6f6',
        darkCyan: '#7b8e8e',
        darkestCyan: '#2c3a3a',
        background: '#effafa'
    },
    screens: {
        sm: '768px',
        desktop: '1440px',
    }
}

export default defaultTheme;