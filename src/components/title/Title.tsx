import { FC } from 'react';
import './title.scss';

interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
  return <h1 className="title">{text}</h1>;
};

export { Title }