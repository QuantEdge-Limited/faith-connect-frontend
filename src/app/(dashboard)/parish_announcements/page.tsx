// src/app/announcements/page.tsx
"use client";
import { ShowcaseCard } from "@/components/ShowcaseCard";
import TabButtons from "@/components/TabButtons";
import { Button } from "@/components/ui/button";
import { Calendar, Paperclip } from "lucide-react";
import { useState } from "react";

const mockAnnouncements = [
  {
    id: 1,
    title: "Parish Fundraiser",
    date: "2025-10-01",
    body: "We invite all parishioners to join us for the annual fundraising event to support parish projects.",
    attachments: ["flyer.pdf"],
    category: "Parish-wide",
  },
  {
    id: 2,
    title: "Youth Choir Practice",
    date: "2025-10-03",
    body: "Youth choir practice will be held this Saturday at 4PM in the parish hall.",
    attachments: [],
    category: "Group-specific",
  },
  {
    id: 3,
    title: "Outstation Meeting",
    date: "2025-10-05",
    body: "All members of St. Peter’s Outstation are invited to a community meeting after Mass.",
    attachments: ["agenda.docx"],
    category: "Outstation",
  },
];

export default function AnnouncementsPage() {
  const [filter, setFilter] = useState("All");
  const [readIds, setReadIds] = useState<number[]>([]);
  const [savedIds, setSavedIds] = useState<number[]>([]);

  const filtered =
    filter === "All"
      ? mockAnnouncements
      : mockAnnouncements.filter((a) => a.category === filter);

  const toggleRead = (id: number) => {
    setReadIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSaved = (id: number) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <>
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-8">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <ol className="flex gap-2">
              <li className="text-gray-900 font-medium dark:text-gray-100">
                Announcements
              </li>
            </ol>
          </div>

          {/* Filters */}
          <div className="mb-5">
            <h2 className="text-xl font-semibold mb-3 dark:text-gray-100">
              Filter Announcements
            </h2>
            <div
              className="grid grid-cols-2 gap-4
                sm:grid-cols-3
                lg:grid-cols-4
                "
            >
              {["All", "Parish-wide", "Outstation", "Group-specific"].map(
                (cat) => (
                  <TabButtons
                    key={cat}
                    id={cat}
                    label={cat}
                    isActive={filter === cat}
                    onClick={() => setFilter(cat)}
                  />
                )
              )}
            </div>
          </div>

          {/* Announcements feed */}
          <div>
            {filtered.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">
                No announcements found.
              </p>
            ) : (
              <div
                className="
        grid gap-4
        sm:grid-cols-2
        xl:grid-cols-4
      "
              >
                {filtered.map((announcement) => (
                  <ShowcaseCard
                    key={announcement.id}
                    title={announcement.title}
                    subtitle={announcement.category}
                    description={announcement.body}
                    tags={
                      announcement.attachments.length > 0
                        ? ["Has Attachments"]
                        : []
                    }
                    metadata={[
                      {
                        icon: Calendar,
                        label: new Date(announcement.date).toLocaleDateString(),
                      },
                      ...(announcement.attachments.length > 0
                        ? [
                            {
                              icon: Paperclip,
                              label: `${
                                announcement.attachments.length
                              } attachment${
                                announcement.attachments.length > 1 ? "s" : ""
                              }`,
                            },
                          ]
                        : []),
                    ]}
                    footer={
                      <div className="flex gap-2 flex-wrap">
                        <Button
                          onClick={() => toggleRead(announcement.id)}
                          className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                            readIds.includes(announcement.id)
                              ? "bg-green-600 text-white"
                              : "bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-green-500"
                          }`}
                        >
                          {readIds.includes(announcement.id)
                            ? "Read"
                            : "Mark as Read"}
                        </Button>
                        <button
                          onClick={() => toggleSaved(announcement.id)}
                          className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                            savedIds.includes(announcement.id)
                              ? "bg-yellow-500 text-white"
                              : "bg-gray-200 text-gray-800 hover:bg-yellow-400 hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-yellow-400"
                          }`}
                        >
                          {savedIds.includes(announcement.id)
                            ? "Saved"
                            : "Save for Later"}
                        </button>
                      </div>
                    }
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
