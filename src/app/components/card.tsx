import Image from "next/image";
import { Job } from "app/types/interfaces";

interface Props {
  job: Job;
}

const Card = ({ job }: Props) => {
  return (
    <div className="bg-white shadow-md rounded-lg px-6 py-10 md:py-6 mb-10 md:mb-5 flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 transition-transform duration-300 ease-in-out transform hover:translate-x-1 hover:border-l-4 hover:cursor-pointer hover:border-navbar hover:shadow-lg">
      <Image
        className="absolute -mt-16 left-8 block md:hidden"
        src={job.logo}
        alt={job.company}
        width={50}
        height={50}
      />
      <div className="flex items-center">
        <Image
          className="hidden md:block"
          src={job.logo}
          alt={job.company}
          width={75}
          height={75}
        />
        <div className="ml-4">
          <div className="flex items-center mb-2">
            <h2 className="text-sm md:text-normal">{job.company}</h2>
            {job.new && (
              <span className="bg-navbar text-white text-xs font-semibold ml-2 px-2 py-1 rounded-full flex justify-center items-center">
                NEW!
              </span>
            )}
            {job.featured && (
              <span className="bg-black text-white text-xs font-semibold ml-2 px-2 py-1 rounded-full flex justify-center items-center">
                FEATURED
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold">{job.position}</h3>
          <p className="text-dark-grayish-cyan">
            {job.postedAt} • {job.contract} • {job.location}
          </p>
        </div>
      </div>
      <div className="block md:hidden w-full h-0.5 bg-light-grayish-cyan-filters my-2" />
      <section className="flex flex-wrap items-center justify-start md:justify-end space-x-2 mt-4 md:mt-0">
        <span className="bg-light-grayish-cyan-filters hover:text-white hover:bg-navbar hover:cursor-pointer px-2 ml-2 md:ml-0 py-1 rounded font-semibold">
          {job.role}
        </span>
        <span className="bg-light-grayish-cyan-filters hover:text-white hover:bg-navbar hover:cursor-pointer px-2 py-1 rounded font-semibold">
          {job.level}
        </span>
        {job.languages.map((lang, index) => (
          <span
            key={index}
            className="bg-light-grayish-cyan-filters hover:text-white hover:bg-navbar hover:cursor-pointer px-2 py-1 rounded font-semibold"
          >
            {lang}
          </span>
        ))}
        {job.tools.map((tool, index) => (
          <span
            key={index}
            className="bg-light-grayish-cyan-filters hover:text-white hover:bg-navbar hover:cursor-pointer px-2 py-1 rounded font-semibold"
          >
            {tool}
          </span>
        ))}
      </section>
    </div>
  );
};

export default Card;
