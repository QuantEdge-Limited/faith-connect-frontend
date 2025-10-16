export default function StatCard({ title, value, icon }: { title: string; value: number; icon: any }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center">
      <div className="text-2xl text-center mx-auto mb-1">{icon}</div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
      <p className="text-xl font-bold text-gray-800 dark:text-gray-200">{value}</p>
    </div>
  );
}