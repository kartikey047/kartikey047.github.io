"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

// Keep the address out of rendered markup and ordinary static mailto scrapers.
const addressCode = [107, 115, 49, 50, 57, 64, 105, 108, 108, 105, 110, 111, 105, 115, 46, 101, 100, 117];

type EmailLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode };

export function EmailLink({ children, onClick, ...props }: EmailLinkProps) {
  return <a {...props} href="#email" onClick={(event) => {
    event.preventDefault();
    onClick?.(event);
    if (!event.defaultPrevented || event.currentTarget.getAttribute("href") === "#email") {
      window.location.href = `mailto:${String.fromCharCode(...addressCode)}`;
    }
  }}>{children}</a>;
}
