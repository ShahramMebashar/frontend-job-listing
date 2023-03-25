
import { css, type Theme } from '@emotion/react'
import bgHeaderDesktop from '../assets/bg-header-desktop.svg'
import bgHeaderMobile from '../assets/bg-header-mobile.svg'

const style = (theme: Theme) => `
    height: 150px;
    background-color: ${theme.colors.primary};
    background-image: url(${bgHeaderMobile});
    @media screen and (min-width: 400px) {
        background-image: url(${bgHeaderDesktop});
    }
`;
export default function Header() {
    return <header css={style} />
}