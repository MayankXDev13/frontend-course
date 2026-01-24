import React from "react";

export default function DashboardMainLayout({feed, stats}: {feed: React.ReactNode, stats: React.ReactNode})  {
    return <div className="flex gap-5">
        <div className="flex-2">{feed}</div>
        <div className="flex-1">{stats}</div>
    </div>
}