import { css, Theme } from "@emotion/react";
import { MouseEvent } from "react";
import { Job } from "../types/job";
import AttributeButton from "./AttributeButton";
import Attributes from "./Attributes";

const styles = {
  card: (theme: Theme) => css`
    position: relative;
    background: #fff;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 12px 15px -8px rgba(0, 0, 0, 0.08);
    border-left-style: solid;
    border-left-width: 0px;
    border-left-color: ${theme.colors.primary};
    @media (min-width: ${theme.screens.sm}) {
      padding: 1.5rem 2rem;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  `,
  new: (theme: Theme) =>
    css({
      borderRadius: "100px",
      padding: ".35rem .6rem .2rem .6rem",
      background: theme.colors.primary,
      color: "#fff",
      textTransform: "uppercase",
      marginRight: ".8rem",
      textAlign: "center",
      verticalAlign: "middle",
      display: "inline-flex",
      lineHeight: 1,
      fontSize: "0.75rem",
      fontWeight: 900,
    }),
  featured: (theme: Theme) =>
    css({
      borderRadius: "100px",
      padding: ".35rem .6rem .2rem .6rem",
      background: "#000",
      color: "#fff",
      textTransform: "uppercase",
      lineHeight: 1,
      display: "inline-flex",
      fontSize: "0.75rem",
      fontWeight: 900,
    }),
  company: (theme: Theme) =>
    css({
      color: theme.colors.primary,
      fontWeight: 900,
      marginRight: "1rem",
    }),
  jobInfo: (theme: Theme) => css`
    color: ${theme.colors.darkCyan};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  position: (theme: Theme) =>
    css({
      fontWeight: 900,
      fontSize: "1.2rem",
      color: theme.colors.darkestCyan,
      textDecoration: 'none',
      '&:hover': {
        color: theme.colors.primary,
      },
    }),

  logo: (theme: Theme) => css`
    position: absolute;
    left: 1rem;
    top: 0;
    transform: translateY(-50%);
    & img {
      width: 56px;
      height: 56px;
    }
    @media (min-width: ${theme.screens.sm}) {
      flex-shrink: 0;
      margin-right: 2rem;
      position: relative;
      left: auto;
      top: auto;
      transform: translateY(0);
      & img {
        width: 76px;
        height: 76px;
      }
    }
  `,
  cardHeader: (theme: Theme) => css`
    margin-top: 1.5rem;
    @media (min-width: ${theme.screens.sm}) {
      margin-top: 0rem;
    }
  `,
  divider: (theme: Theme) => css`
    width: 100%;
    border: 0.1px solid #ccc;
    margin: 1rem 0;
    @media (min-width: ${theme.screens.sm}) {
      display: none;
    }
  `,
};

type JobCardProp = Omit<Job, "new"> & {
  isNew: boolean;
  onAttributeClick: (
    attribute: "role" | "language" | "tool",
    value: string
  ) => void;
} & React.PropsWithChildren<{
    className?: string;
  }>;

export default function JobCard({
  role,
  position,
  tools,
  languages,
  contract,
  location,
  postedAt,
  company,
  logo,
  onAttributeClick,
  isNew = false,
  featured = false,
}: JobCardProp) {
  return (
    <article
      style={{ borderLeftWidth: featured ? "4px" : 0 }}
      css={styles.card}
    >
      <div style={{ flex: "1", display: "flex" }}>
        <div css={styles.logo}>
          <img src={logo} alt="" role="presentation" />
        </div>
        <div>
          <div css={styles.cardHeader}>
            <span css={styles.company}>{company}</span>
            {isNew && <span css={styles.new}>NEW!</span>}
            {featured && <span css={styles.featured}>Featured</span>}
          </div>
          <h3 style={{margin: "0.4rem 0"}}>
            <a css={styles.position} href="#">{position}</a>
          </h3>
          <div css={styles.jobInfo}>
            <span>{postedAt}</span>
            <span>&middot;</span>
            <span>{contract}</span>
            <span>&middot;</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
      <hr css={styles.divider} />
      <Attributes
        role={role}
        tools={tools}
        languages={languages}
        onAttributeClick={onAttributeClick}
      />
    </article>
  );
}
