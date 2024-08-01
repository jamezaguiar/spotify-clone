import { ComponentProps, ReactNode } from "react";

type RoundedButtonProps = ComponentProps<"button"> & {
  children: ReactNode;
};

export function RoundedButton({ children, ...props }: RoundedButtonProps) {
  return (
    <button className="rounded-full bg-black/40 p-1" {...props}>
      {children}
    </button>
  );
}
