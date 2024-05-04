import { cx } from "@emotion/css";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = "primary",
  className,
}: ButtonProps) => {
  return (
    <button
      className={cx(
        "rounded-lg px-3 py-2 text-sm",
        variant == "primary" &&
          "bg-primary font-medium text-white hover:bg-primary/80",
        variant == "secondary" &&
          "font-regular text-primary ring-1 ring-slate-700/10 hover:bg-slate-50",
        className,
      )}
    >
      {children}
    </button>
  );
};
