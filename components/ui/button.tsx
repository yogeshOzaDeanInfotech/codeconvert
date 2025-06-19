import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-[#872175] px-4 py-2 text-sm font-medium text-white hover:bg-[#6d1a5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#872175]",
        className
      )}
      {...props}
    />
  );
}
