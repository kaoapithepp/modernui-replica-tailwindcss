import { cx } from "@emotion/css";
import { ButtonHTMLAttributes, ReactNode } from "react";

type CallToActButtonProps = {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const CallToActButton = ({
  children,
  className,
  showArrow,
  ...props
}: CallToActButtonProps) => {
  return (
    <button
      className={cx(
        "w-full rounded-full bg-primary px-4 py-2 text-[15px] text-white transition-all duration-200 hover:bg-neutral-500 hover:shadow-lg",
        className,
      )}
      {...props}
    >
      {children} {showArrow && "→"}
    </button>
  );
};
