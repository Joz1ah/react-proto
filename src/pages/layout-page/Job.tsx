import { FC } from "react";
import { JobButton, Title } from "components";
import { JobList } from "pages/job-feed/JobList";

const Job: FC = () => {
  return (
    <div className="responsive-layout">
      <header className="header">
        <Title text="Job Listings" />
      </header>
      <main className="main-content">
        <JobList />
        <section className="button-section">
          <JobButton onClick={() => console.log('View more jobs')} variant="primary">
            View More Jobs
          </JobButton>
          <JobButton onClick={() => console.log('Post a Job')} variant="secondary">
            Post a Job
          </JobButton>
        </section>
      </main>
    </div>
  );
};

export { Job };
