"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact Us" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          isScrolled ? "pt-0" : "pt-4 sm:pt-5",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Info Bar */}
          <div
            className={cn(
              "hidden lg:flex items-center justify-between rounded-t-md px-5 py-2 text-xs transition-all duration-300",
              isScrolled
                ? "bg-primary text-primary-foreground"
                : "bg-primary/95 text-primary-foreground",
            )}
          >
            <div className="flex items-center gap-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:opacity-90"
              >
                <MapPin className="h-3.5 w-3.5" />
                <span>
                  494 Republic Road, Kaalfontein EX 1, Midrand, Gauteng, 1632
                </span>
              </a>

              <a
                href="mailto:siphoglass@gmail.com"
                className="flex items-center gap-2 hover:opacity-90"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>siphoglass@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Link href="#" className="hover:opacity-80" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                >
                  <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM14.25 12H13V16H11V12H9V10H11V9C11 7.34315 12.3431 6 14 6H16V8H14C13.4477 8 13 8.44772 13 9V10H16L15.75 12Z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="hover:opacity-80"
                aria-label="Instagram"
              >
                {/* <Instagram className="h-3.5 w-3.5" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                >
                  <path
                    d="M7.75 2C4.67893 2 2 4.67893 2 7.75V16.25C2 19.3211 4.67893 22 7.75 22H16.25C19.3211 22 22 19.3211 22 16.25V7.75C22 4.67893 19.3211 2 16.25 2H7.75ZM12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14C10. 
6569 14 9.31315 12.6569 9.31315 11C9.31315 9.34315 10.6569 8 12 8ZM16.5 7C17.3284 7 18 6.32843 18 5.5C18 4.67157 17.3284 4 16.5 4C15.6716 4 15 4.67157 15 5.5C15 6.32843 15.6716 7 16.5 7Z"
                  />
                </svg>
              </Link>
              <Link href="#" className="hover:opacity-80" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                >
                  <path d="M19 3A2 2 0 0121 5V19A2 2 0 0119 21H5A2 2 0 013 19V5A2 2 0 015 3H19ZM8.25 17.25V10.75H5.625V17.25H8.25ZM7.9375 9.625C8.8125 9.625 9.5625 8.875 9.5625 7.9375C9.5625 7.01562 8.8125 6.26562 7.9375 6.26562C7.01562 6.26562 6.26562 7.01562 6.26562 7.9375C6.26562 8.875 7.01562 9.625 7.9375 9.625ZM18.375 17.25V13.375C18.375 12.0625 17.8125 11.25 16.8125 11.25C15.8125 11.25 15.25 12.0625 15.25 13.375V17.25H17.875V13.75C17.875 13.0625 18.1875 12.625 18.8125 12.625C19.4375 12.625 19.75 13.0625 19.75 13.75V17.25H22Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Main Nav */}
          <div
            className={cn(
              "flex items-center justify-between border px-4 sm:px-6 lg:px-8 transition-all duration-300",
              isScrolled
                ? "h-16 rounded-none border-border bg-background/95 shadow-lg backdrop-blur-md"
                : "h-16 sm:h-18.5 rounded-b-md border-border/70 bg-white shadow-xl",
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <path
                    d="M20 2L4 38h6l10-24 10 24h6L20 2z"
                    fill="currentColor"
                    className="text-black"
                  />
                  <rect
                    x="14"
                    y="20"
                    width="12"
                    height="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-black"
                  />
                  <line
                    x1="20"
                    y1="20"
                    x2="20"
                    y2="28"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-black"
                  />
                  <line
                    x1="14"
                    y1="24"
                    x2="26"
                    y2="24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-black"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-black leading-tight">
                  SILAMBA GLASS
                </span>
                <span className="text-[10px] font-medium text-black tracking-wider leading-none">
                  ALUMINIUM & GLASS
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:0820552259"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>0820552259</span>
              </a>

              <Button
                asChild
                className="rounded-sm bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Trigger */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden border border-t-0 border-border bg-background shadow-xl">
              <div className="space-y-1 px-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md px-2 py-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-muted hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-3 border-t border-border pt-4">
                  <a
                    href="tel:0820552259"
                    className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    <span>0820552259</span>
                  </a>

                  <Button asChild className="w-full rounded-sm">
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
