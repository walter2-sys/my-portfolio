"use client";

import { useReveal } from "@/hooks/useReveal";

export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal();

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}