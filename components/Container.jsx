import clsx from "clsx";

export const Container = ({ children, extraClasses, ...rest }) => {
  return (
    <div
      className={clsx("max-w-[1200px] px-4 md:px-8 mx-auto", extraClasses)}
      {...rest}
    >
      {children}
    </div>
  );
};
