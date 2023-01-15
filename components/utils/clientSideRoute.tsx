"use client";

import Link from "next/link";

function clientSideRoute({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  return <Link href={route}>{children}</Link>;
}

export default clientSideRoute;
