import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type PrimaryButtonProps = ComponentProps<"button">;

export const PrimaryButton = ({ className, ...props }: PrimaryButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-blue-600 hover:bg-blue-500 transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed",
        className,
      )}
    ></button>
  );
};
