export interface Job {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  }

  export interface HeaderProps {
    onFilterClick: (filterValue: string) => void;
    onClearFilter: () => void;
  }
  
  