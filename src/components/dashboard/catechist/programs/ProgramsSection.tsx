import { CatechismProgram } from "../types";
import ProgramCard from "./ProgramCard";

export default function ProgramsSection({ programs }: { programs: CatechismProgram[] }) {
  if (programs.length === 0) {
    return <p className="text-gray-500 dark:text-gray-400">No programs found.</p>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
}