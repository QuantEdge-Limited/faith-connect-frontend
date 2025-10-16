"use client";
import Link from "next/link";
import React from "react";
import { Card } from "../../../ui/card";

interface GroupProps {
  total?: number;
  recent?: Array<{ id: number; title: string }>;
}

const DEFAULT_RECENT: Array<{ id: number; title: string }> = [
  { id: 1, title: "Youth Choir" },
  { id: 2, title: "St. Vincent de Paul" },
  { id: 3, title: "Legion of Mary" },
  { id: 4, title: "Bible Study Group" },
  { id: 5, title: "Women's Guild" },
];

const Group: React.FC<GroupProps> = ({ 
  total, 
  recent = DEFAULT_RECENT 
}) => {
  const displayTotal = total ?? recent.length;

  return (
    <div className="h-full">
      <h2 className="text-lg font-semibold mb-3 px-1 dark:text-gray-100">
        Groups
      </h2>

      <Card className="bg-white border-[#D4AF37]/20 shadow-sm overflow-hidden dark:bg-gray-800 dark:border-gray-700 h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            You are part of{" "}
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {displayTotal}
            </span>{" "}
            groups
          </p>
          <Link
            href="/user/groups"
            className="px-2 py-1 rounded text-xs bg-blue-600 text-white hover:bg-blue-700"
          >
            View all
          </Link>
        </div>

        {/* Content */}
        <div className="h-[180px] overflow-y-auto custom-scrollbar">
          {recent.length === 0 ? (
            <p className="text-xs text-gray-500 dark:text-gray-400 p-3">
              No groups
            </p>
          ) : (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {recent.slice(0, 4).map((g) => (
                <li key={g.id} className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-800 dark:text-gray-200">
                      {g.title}
                    </span>
                    <Link
                      href="/dashboard/groups"
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Group;