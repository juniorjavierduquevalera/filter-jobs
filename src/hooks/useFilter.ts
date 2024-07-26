import { useState } from "react";
import data from "../data.json"; 
import { Job } from '../types/interfaces';

const useFilter = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredData = filter
    ? data.filter(
        (job: Job) =>
          job.languages.includes(filter) ||
          job.tools.includes(filter) ||
          job.role === filter
      )
    : data;

  const handleFilterClick = (filterValue: string) => {
    setFilter(filterValue);
  };

  const handleClearFilter = () => {
    setFilter(null);
  };

  return {
    filteredData,
    handleFilterClick,
    handleClearFilter,
  };
};

export default useFilter;
