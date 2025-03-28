"use client";

import { usePathname } from "next/navigation";

export default function Landing() {
  const path = usePathname();
  return <h1>path: {path} 입니다.</h1>;
}
