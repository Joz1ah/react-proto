import { FC } from 'react';
import './job-button.scss';

interface JobListingButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const JobButton: FC<JobListingButtonProps> = ({ onClick, children, variant = 'primary' }) => {
  return (
    <button className={`job-listing-button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export { JobButton }