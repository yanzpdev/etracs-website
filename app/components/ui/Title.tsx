import React from 'react';

interface TitleProps {
  text: string;
  style: string;
}

const Title: React.FC<TitleProps> = ({ text, style }) => {
  return <h1 className={style}>{text}</h1>;
};

export default Title;
