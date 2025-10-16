export type TabType =
  | "members"
  | "bookings"
  | "announcements"
  | "scheduling"
  | "analytics";

export interface LeftPanelProps {
  setActiveTab: React.Dispatch<React.SetStateAction<TabType>>;
}

export interface RightPanelProps {
  activeTab: TabType;
  setActiveTab: React.Dispatch<React.SetStateAction<TabType>>;
}