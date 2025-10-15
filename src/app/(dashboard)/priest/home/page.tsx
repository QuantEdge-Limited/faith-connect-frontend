"use client";

import LeftPanel from "@/components/dashboard/priest/LeftPanel";
import RightPanel from "@/components/dashboard/priest/RightPanel";
import React from "react";

export default function PriestDashboard() {
  return (
    <>
      <section className="flex h-screen bg-slate-100">
        {/* Left Sidebar - 1/4 width */}
        <LeftPanel />

        {/* Right Main Content - 3/4 width */}
        <RightPanel />
      </section>
    </>
  );
}
