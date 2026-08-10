import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type GhostDestructiveButtonProps = ComponentProps<"button">;

export const GhostDestructiveButton = ({ className, ...props }: GhostDestructiveButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "hover:bg-red-800 text-red-800 hover:text-red-200 transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed",
        className,
      )}
    ></button>
  );
};
