'use client'
import Header from './header';
import Card from './card';
import useFilter from '../../hooks/useFilter';

const Feed = () => {
  const { filteredData, handleFilterClick, handleClearFilter } = useFilter();

  return (
    <>
      <Header onFilterClick={handleFilterClick} onClearFilter={handleClearFilter} />
      <div className="w-5/6 mx-auto my-16">
        {filteredData.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default Feed;
