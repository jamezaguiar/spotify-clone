import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type NavLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  variant?: "playlist";
};

export function NavLink({ children, variant, ...props }: NavLinkProps) {
  let className =
    "flex items-center gap-3 text-sm text-zinc-200 hover:text-zinc-100 font-semibold";

  if (variant === "playlist") {
    className = "text-sm text-zinc-400 hover:text-zinc-100";
  }

  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  );
}
