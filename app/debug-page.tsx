"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function DebugPage() {
  const pathname = usePathname();

  const result = useMemo(() => {
    console.log("useMemo running with pathname:", pathname);
    return pathname ? pathname.toUpperCase() : "";
  }, [pathname]);

  return (
    <div>
      <h1>Debug Page</h1>
      <p>Current pathname: {result}</p>
    </div>
  );
}
