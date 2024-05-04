import { cx } from "@emotion/css";
import { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export const Tag = ({ children, className }: TagProps) => {
  return (
    <p
      className={cx(
        "rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6",
        className ? className : "text-slate-700",
      )}
    >
      {children}
    </p>
  );
};
