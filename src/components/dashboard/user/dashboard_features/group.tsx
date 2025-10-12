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

const Group: React.FC<GroupProps> = ({ total, recent = DEFAULT_RECENT }) => {
  const displayTotal = total ?? recent.length;

  return (
    <div className="h-full">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 px-1 dark:text-gray-100">
        Groups
      </h2>

      {/* Card container */}
      <Card className="bg-white border-[#D4AF37]/20 shadow-sm overflow-hidden dark:bg-gray-800 dark:border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              You are part of{" "}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {displayTotal}
              </span>{" "}
              groups
            </p>
          </div>
          <Link
            href="/groups"
            className="inline-block px-3 py-1 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
          >
            View all
          </Link>
        </div>

        {/* Desktop table view */}
        <div className="hidden lg:block overflow-x-auto">
          {recent.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400 p-4">
              No recent groups
            </p>
          ) : (
            <table className="w-full">
              <thead className="border-b border-gray-200 text-[#0D090A] text-sm font-semibold uppercase tracking-wider dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">Group Name</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {recent.slice(0, 3).map((g) => (
                  <tr
                    key={g.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                      {g.title}
                    </td>
                    <td className="px-4 py-3 text-sm text-right">
                      <Link
                        href="/dashboard/groups"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Mobile-friendly layout */}
        <div className="lg:hidden divide-y divide-gray-200 dark:divide-gray-700">
          {recent.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400 p-4">
              No recent groups
            </p>
          ) : (
            recent.slice(0, 3).map((g) => (
              <div
                key={g.id}
                className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium text-gray-800 text-sm sm:text-base dark:text-gray-100">
                    {g.title}
                  </p>
                  <Link
                    href="/dashboard/groups"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
};

export default Group;
