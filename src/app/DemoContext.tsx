"use client";

import DemoContext from "@/hook/demoContext";
import { ReactNode, useState } from "react";

export default function DemoContextLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [demoData, setDemoData] = useState(null as any);
  return (
    <DemoContext.Provider value={{ demoData, setDemoData }}>
      {children}
    </DemoContext.Provider>
  );
}
