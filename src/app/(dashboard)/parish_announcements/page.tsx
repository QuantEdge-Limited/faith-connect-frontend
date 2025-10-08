// src/app/announcements/page.tsx
"use client";
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

// ✅ Inline Card component
function Card({
  title,
  subtitle,
  description,
  date,
  actions,
}: {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="p-5 rounded-xl shadow-md bg-white border border-gray-200 hover:shadow-lg transition w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <span className="text-xs text-gray-400 mt-2 sm:mt-0">{date}</span>
      </div>
      <p className="mt-3 text-gray-700 text-sm">{description}</p>
      {actions && <div className="mt-4 flex gap-2 flex-wrap">{actions}</div>}
    </div>
  );
}

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
    <div className="p-6 space-y-6">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-600">
        <ol className="flex gap-2">
          <li className="text-gray-900 font-medium">Announcements</li>
        </ol>
      </nav>

      {/* Filters */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Filter Announcements</h2>
        <div className="flex gap-3 flex-wrap">
          {["All", "Parish-wide", "Outstation", "Group-specific"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg border ${
                filter === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Announcements feed */}
      <section className="space-y-4">
        {filtered.length === 0 ? (
          <p className="text-gray-500">No announcements found.</p>
        ) : (
          filtered.map((announcement) => (
            <Card
              key={announcement.id}
              title={announcement.title}
              subtitle={announcement.category}
              description={announcement.body}
              date={announcement.date}
              actions={
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => toggleRead(announcement.id)}
                    className={`px-3 py-1 rounded-lg ${
                      readIds.includes(announcement.id)
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 hover:bg-green-500 hover:text-white"
                    }`}
                  >
                    {readIds.includes(announcement.id) ? "Read" : "Mark as Read"}
                  </button>
                  <button
                    onClick={() => toggleSaved(announcement.id)}
                    className={`px-3 py-1 rounded-lg ${
                      savedIds.includes(announcement.id)
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-200 hover:bg-yellow-400 hover:text-white"
                    }`}
                  >
                    {savedIds.includes(announcement.id)
                      ? "Saved"
                      : "Save for Later"}
                  </button>
                </div>
              }
            />
          ))
        )}
      </section>
    </div>
  );
}
