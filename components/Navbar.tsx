"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/journey", label: "Journey" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-[#F7F6F2]">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-6">

        {/* Logo */}
        <Link href="/" className="font-bold text-lg">Taha.dev</Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="group relative">
              {label}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-black scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-body text-sm text-zinc-700 py-1"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}