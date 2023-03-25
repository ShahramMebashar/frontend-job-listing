import { css, type Theme } from "@emotion/react";
import JobCard from "./JobCard";
import { Job } from "../types/job";
import { useEffect, useState } from "react";
import Filters from "./Filters";

const sectionStyle = (theme: Theme) => `
    padding: 76px 1rem;
    max-width: 1440px;
    margin: auto;
`;

export interface FilterAttribute {
  attribute: string;
  value: string;
}

export default function JobList() {
  const [list, setList] = useState<Job[]>([]);
  const [filters, setFilters] = useState<FilterAttribute[]>([]);

  const onAttributeClick = (
    attribute: "role" | "language" | "tool",
    value: string
  ) => {
    const newFilter = { attribute, value };
    const includesFilter = filters.find(
      (filter) =>
        filter.value === newFilter.value &&
        filter.attribute === newFilter.attribute
    );
    if (includesFilter) {
      return;
    }
    setFilters([...filters, newFilter]);
  };

  const onFilterRemove = (filter: FilterAttribute) => {
    const newFilters = filters.slice().filter(oldFilter => {
      return filter.value !== oldFilter.value
    });
    setFilters(newFilters);
  }

  const filteredJobs = () => {
    if(!filters.length) {
      return list;
    }
    
    return list.filter(job => {
      const attributes = [job.role, ...job.languages, ...job.tools] ;
      return filters.every(filter => {
        return attributes.includes(filter.value);
    });
  });
}

  const filteredList = filteredJobs();

  const isLastItem = (index: number) => index === list.length - 1;

  let isLoading = false;
  useEffect(() => {
    if (isLoading) {
      return;
    }
    fetch("./data.json")
      .then((response) => response.json())
      .then(setList);
    return () => {
      isLoading = true;
    };
  }, []);
  return (
    <section css={sectionStyle}>
      <Filters filters={filters} onFilterRemove={onFilterRemove} setFilters={setFilters}/>
      {filteredList.map((job, index) => (
        <div
          key={index}
          css={(theme: Theme) => css`
            margin-bottom: ${isLastItem(index) ? "0" : "3"}rem;
            @media screen and (min-width: ${theme.screens.sm}) {
              margin-bottom: ${isLastItem(index) ? "0" : "1.5"}rem;
            }
          `}
        >
          {list.length && (
            <JobCard
              onAttributeClick={onAttributeClick}
              key={job.id}
              {...job}
              isNew={job.new}
            />
          )}
        </div>
      ))}
    </section>
  );
}
