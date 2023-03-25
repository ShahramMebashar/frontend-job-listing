import { css, Theme } from "@emotion/react"
import { MouseEvent, PropsWithChildren } from "react"

const style = (theme: Theme) => css({
    borderRadius: '4px',
    border: 'none',
    padding: '0.4rem .6rem',
    fontSize: "0.87rem",
    fontWeight: 900,
    background: theme.colors.lightCyan,
    color: theme.colors.primary,
    cursor: 'pointer',
    '&:active': {
        background: theme.colors.primary,
        color: theme.colors.lightCyan,
    }
});
export default function AttributeButton({ children, ...props } : PropsWithChildren & {onClick: (e: MouseEvent<HTMLButtonElement>) => void}) {
    return <button css={style} {...props}>{ children }</button>
}