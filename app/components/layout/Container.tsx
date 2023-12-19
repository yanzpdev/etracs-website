import { ReactNode } from 'react';

const Container: React.FC<{ children: ReactNode, name: string, addClasses: string }> = ({ children, name, addClasses }) => {
  return (
    <>
    {name === 'products' ? (
      <div className={`${addClasses} z-10 px-24 xxs:px-5 xs:px-5 sm:px-7 md:px-10 lg:px-14 pt-[5.5rem] xxs:pt-[4rem] h-screen xxs:h-full w-full text-slate-700`}>
        {children}
      </div>
    ) : name === 'login' ? (
      <div className={`${addClasses} z-10 p-14 h-screen w-full text-slate-700`}>
        {children}
      </div>
    ) : (
      <div className={`${addClasses} z-10 px-24 xxs:px-5 xs:px-5 sm:px-7 md:px-10 lg:px-14 pt-[5.5rem] xxs:pt-[4rem] h-screen w-full text-slate-700`}>
        {children}
      </div>
    )}
    </>
  );
};

export default Container;
