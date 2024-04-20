"use client";

import React from "react";
import { ThemeProvider } from "@/components/tailwind/compo";

export function Layout({ children }: { children: any }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
