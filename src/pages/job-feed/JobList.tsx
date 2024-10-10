import { FC } from "react";
import { Card } from "components";
import { jobFeed } from "constants/index";
import "./joblist.scss";

const JobList: FC = () => {
  return (
    <div className="content">
      <div className="job-list">
        {jobFeed.map((job) => (
          <div className="job-list-item" key={job.id}>
            <Card
              position={job.position}
              company={job.company}
              description={job.description}
              salary={job.salary}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { JobList };
