"use client";

import LeftPanel from "@/components/dashboard/priest/LeftPanel";
import RightPanel from "@/components/dashboard/priest/RightPanel";
import { TabType } from "@/types/types";
import React, { useState } from "react";

export default function PriestDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("members");
  return (
    <>
      <section className="flex h-screen bg-slate-100">
        {/* Left Sidebar - 1/4 width */}
        <LeftPanel setActiveTab={setActiveTab} />

        {/* Right Main Content - 3/4 width */}
        <RightPanel activeTab={activeTab} setActiveTab={setActiveTab} />
      </section>
    </>
  );
}
