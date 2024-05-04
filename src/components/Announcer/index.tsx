import { cx } from "@emotion/css";
import { ReactNode } from "react";

type AnnouncerProps = {
  children: ReactNode;
  className?: string;
};

export const Announcer = ({ children, className }: AnnouncerProps) => {
  return (
    <div
      className={cx(
        "w-fit rounded-full px-3 py-1 text-sm leading-6 ring-1",
        className
          ? className
          : "text-gray-600 ring-gray-900/10 hover:ring-gray-900/20",
      )}
    >
      {children}
    </div>
  );
};
