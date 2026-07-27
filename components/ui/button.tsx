import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const NormalBtn = ({
  children,
  className,
  onClick,
  href,
  target,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
}) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          shallow
          target={target}
          onClick={onClick}
          className={twMerge(
            "bg-brown flex items-center justify-center rounded-[23px] ",
            className
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          name="button"
          aria-label="button"
          className={twMerge(
            "w-full h-full bg-brown flex items-center justify-center rounded-[23px]",
            className
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};
