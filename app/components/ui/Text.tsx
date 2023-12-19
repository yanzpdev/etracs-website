import React from 'react';

interface TextProps {
  text: string;
  style: string;
}

const Text: React.FC<TextProps> = ({ text, style }) => {
  return <p className={style}>{text}</p>;
};

export default Text;
