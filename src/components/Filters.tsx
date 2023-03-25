import { css, Theme } from "@emotion/react";
import iconRemove from '../assets/icon-remove.svg';
import {
  ComponentProps,
  ComponentPropsWithRef,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
} from "react";
import { FilterAttribute } from "./JobList";

const filterContainerStyle = (theme: Theme) => css`
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0px 12px 15px -8px rgba(0, 0, 0, 0.1);
  margin-top: -7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClearButton = function (props: ComponentProps<"button">) {
  return (
    <button
      css={(theme: Theme) =>
        css({
          background: "none",
          border: "none",
          color: theme.colors.primary,
          fontWeight: 900,
          cursor: "pointer",
          flexShrink: 0,
          "&:hover, &active": {
            textDecoration: "underline",
          },
        })
      }
      {...props}
    >
      Clear
    </button>
  );
};

const filterValueStyle = ({ colors }: Theme) => css({
  background: colors.lightCyan,
  color: colors.primary,
  borderRadius: '6px',
  display: 'inline-flex',
  alignItems: 'stretch',
  overflow: 'hidden',
  fontWeight: 900,
  fontSize: '1rem',
  'span': {
    padding: '0.5rem 0.6rem 0.3rem 0.6rem'
  },
  '& button': {
    background: colors.primary,
    color: colors.lightCyan,
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover, &:active': {
      background: colors.darkestCyan
    }
  }
})


const FilterValue = function ({ filter, ...props} : { filter: FilterAttribute } & ComponentPropsWithRef<'button'>) {
  return <span css={filterValueStyle}>
    <span>{filter.value}</span>
    <button {...props}><img src={iconRemove}/></button>
  </span>
}

export default function Filters({
  filters = [],
  setFilters,
  onFilterRemove,
}: {
  filters: FilterAttribute[];
  setFilters: Dispatch<SetStateAction<FilterAttribute[]>>;
  onFilterRemove: (filter: FilterAttribute) => void
}) {
  if (!filters.length) {
    return null;
  }

  return (
    <div css={filterContainerStyle}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '.8rem'
      }}>
        {filters.map((filter) => (
            <FilterValue filter={filter} key={filter.value + filter.attribute} onClick={() => onFilterRemove(filter)}/>
        ))}
      </div>
      <ClearButton onClick={() => setFilters([])} />
    </div>
  );
}
