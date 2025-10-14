import { GraduationCap, LibraryBig, TriangleAlert, Trophy } from "lucide-react";
import StatCard from "../ui/StatCard";

export default function StatsOverview({
  programsCount,
  studentsCount,
  readyCount,
  missingDocsCount
}: {
  programsCount: number;
  studentsCount: number;
  readyCount: number;
  missingDocsCount: number;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <StatCard title="Active Programs" value={programsCount} icon={<LibraryBig size={40} className="text-green-500 text-center mx-auto" />} />
      <StatCard title="Students" value={studentsCount} icon={<GraduationCap size={40} className="text-center mx-auto" />} />
      <StatCard title="Ready for Sacrament" value={readyCount} icon={<Trophy size={40} className="text-yellow-600 text-center mx-auto" />} />
      <StatCard title="Missing Docs" value={missingDocsCount} icon={<TriangleAlert size={40} className="text-orange-700 text-center mx-auto" />} />
    </div>
  );
}