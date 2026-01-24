import Link from "next/link";
import React from "react";

export default function DashboardMainLayout({
  feed,
  stats,
  tab1,
  tab2,
}: {
  feed: React.ReactNode;
  stats: React.ReactNode;
  tab1: React.ReactNode;
  tab2: React.ReactNode;
}) {

    /* return <div className="flex gap-5">
        <div className="flex-2">{feed}</div>
        <div className="flex-1">{stats}</div>
    </div> */
  return (
    <div>
      <nav className="mb-2.5 flex gap-4">
        <Link href="/dashboard-main/tab1">Tab 1</Link>
        <Link href="/dashboard-main/tab2">Tab 2</Link>
      </nav>

      <div>{tab1}</div>
      <div>{tab2}</div>
    </div>
  );
}
