import { ReactNode } from 'react';

const ContentWrapper: React.FC<{ children: ReactNode, className: string }> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default ContentWrapper;
