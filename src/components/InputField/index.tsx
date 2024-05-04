import { cx } from "@emotion/css";

type InputFieldProps = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
  className?: string;
};

export const InputField = ({
  label,
  placeholder,
  className,
  required,
  errorMessage,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-2 text-sm text-primary">{label}</label>}
      <input
        placeholder={placeholder}
        className={cx(
          "h-10 w-full rounded-lg px-4 text-primary outline-none ring-1",
          className
            ? className
            : "ring-slate-200 placeholder:text-slate-300 focus:ring-2 focus:ring-indigo-500",
          required && "!ring-red-500",
        )}
      />
      {required && <p className="mt-1 text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};
