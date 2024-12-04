"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavigationBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="https://c.animaapp.com/fOARWBTU/img/logo-section.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </Link>

        <nav className="flex items-center rounded-full border bg-muted/50 px-9 py-2">
          <ul className="flex items-center space-x-8">
            <li>
              <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-1 text-muted-foreground"
                  >
                    <span>Products</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Product 1</DropdownMenuItem>
                  <DropdownMenuItem>Product 2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Button
                variant="ghost"
                className="text-muted-foreground"
                asChild
              >
                <Link href="/testimonials">Testimonials</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="text-muted-foreground"
                asChild
              >
                <Link href="/investors">Investors</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="text-muted-foreground"
                asChild
              >
                <Link href="/about">About Us</Link>
              </Button>
            </li>
          </ul>
        </nav>

        <Button size="lg" className="rounded-full px-6">
          Contact Us
        </Button>
      </div>
    </header>
  );
}