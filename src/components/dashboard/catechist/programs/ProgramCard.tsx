import { CatechismProgram } from "../types";

const SacramentLabels: Record<CatechismProgram['sacramentFocus'], string> = {
  Baptism: 'Baptism',
  FirstCommunion: 'First Communion',
  Confirmation: 'Confirmation',
  None: 'General',
};

export default function ProgramCard({ program }: { program: CatechismProgram }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-800 hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">{program.name}</h3>
          <div className="mt-1 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded">
              {program.type}
            </span>
            <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded">
              {SacramentLabels[program.sacramentFocus]}
            </span>
          </div>
        </div>
        <span className="px-2 py-1 text-xs rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200">
          {program.status}
        </span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
        {program.studentCount} students enrolled
      </p>
      <div className="mt-4 flex space-x-3">
        <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">View Roster</button>
        <button className="text-gray-600 dark:text-gray-400 hover:underline text-sm">Edit</button>
      </div>
    </div>
  );
}