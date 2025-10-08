
"use client";
import { useState, ReactNode } from "react";

// Types for the Card props
interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  actions?: ReactNode;
}

// Responsive Card Component
function Card({ title, subtitle, description, date, actions }: CardProps) {
  return (
    <div className="border rounded-xl shadow-md bg-white p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-200">
      <div className="space-y-2">
        <h3 className="text-lg md:text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-sm md:text-base text-gray-600">{subtitle}</p>
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
        <p className="text-xs md:text-sm text-gray-500 italic">{date}</p>
      </div>
      {actions && <div className="mt-4 flex justify-end">{actions}</div>}
    </div>
  );
}

interface Group {
  id: number;
  title: string;
  description: string;
  subtitle: string;
  date: string;
}

const mockGroups: Group[] = [
  {
    id: 1,
    title: "Youth Choir",
    description: "Weekly choir practice and Sunday Mass singing.",
    subtitle: "Leader: John Doe",
    date: "Every Saturday 4PM",
  },
  {
    id: 2,
    title: "St. Vincent de Paul",
    description: "Community outreach and charity activities.",
    subtitle: "Leader: Jane Doe",
    date: "Every 1st Sunday",
  },
  {
    id: 3,
    title: "Legion of Mary",
    description: "Faith-based group focusing on prayer and community support.",
    subtitle: "Leader: Mary Wanjiku",
    date: "Every Wednesday 6PM",
  },
];

export default function GroupsPage() {
  const [joinedGroups, setJoinedGroups] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState<"all" | "joined" | "available">("all");

  const toggleJoin = (id: number) => {
    setJoinedGroups((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const filteredGroups =
    activeFilter === "all"
      ? mockGroups
      : activeFilter === "joined"
      ? mockGroups.filter((g) => joinedGroups.includes(g.id))
      : mockGroups.filter((g) => !joinedGroups.includes(g.id));

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-6xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-600">
        <ol className="flex gap-2">
          <li className="text-gray-900 font-medium">Groups</li>
        </ol>
      </nav>

      {/* Quick Links */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setActiveFilter("joined")}
            className={`px-4 py-2 rounded-lg border transition ${
              activeFilter === "joined"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            My Groups
          </button>
          <button
            onClick={() => setActiveFilter("available")}
            className={`px-4 py-2 rounded-lg border transition ${
              activeFilter === "available"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Available Groups
          </button>
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-lg border transition ${
              activeFilter === "all"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Groups
          </button>
        </div>
      </section>

      {/* Groups Grid */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Parish Groups</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.length === 0 ? (
            <p className="text-gray-500">No groups found.</p>
          ) : (
            filteredGroups.map((group) => (
              <Card
                key={group.id}
                title={group.title}
                subtitle={group.subtitle}
                description={group.description}
                date={group.date}
                actions={
                  <button
                    onClick={() => toggleJoin(group.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                      joinedGroups.includes(group.id)
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {joinedGroups.includes(group.id) ? "Joined" : "Join Group"}
                  </button>
                }
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
