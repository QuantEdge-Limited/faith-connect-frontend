import { BookOpen, User, Calendar, MoreHorizontal } from 'lucide-react';
import { BookingType } from '../types';

const tabConfig: Record<BookingType, { label: string; icon: React.ReactNode }> = {
  catechism: { label: 'Catechism Class', icon: <BookOpen className="w-4 h-4" /> },
  priest: { label: 'Priest Appointment', icon: <User className="w-4 h-4" /> },
  event: { label: 'Parish Event', icon: <Calendar className="w-4 h-4" /> },
  other: { label: 'Other Service', icon: <MoreHorizontal className="w-4 h-4" /> },
};

export default function BookingTabs({
  activeTab,
  onTabChange,
}: {
  activeTab: BookingType;
  onTabChange: (tab: BookingType) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(tabConfig).map(([key, config]) => (
        <button
          key={key}
          onClick={() => onTabChange(key as BookingType)}
          className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${
            activeTab === key
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {config.icon}
          {config.label}
        </button>
      ))}
    </div>
  );
}