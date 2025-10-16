export type TabType =
  | "members"
  | "bookings"
  | "announcements"
  | "scheduling"
  | "analytics";

export type Level = "All" | "Beginner" | "Intermediate" | "Advanced" | "Youth";

export type Status = "low" | "medium" | "high";

export type BookingType = "catechism" | "priest" | "event" | "other";

export interface ProgramResult {
  type: "program";
  data: {
    id: string;
    name: string;
    type: string;
  };
}

export interface StudentResult {
  type: "student";
  data: {
    id: string;
    name: string;
    parentNames: string[];
  };
}

export interface ResourceResult {
  type: "resource";
  data: {
    id: string;
    title: string;
    type: string;
  };
}

export type SearchResult = ProgramResult | StudentResult | ResourceResult;


export interface BaseBookingData {
  name: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface CatechismBooking extends BaseBookingData {
  childName: string;
  childAge: number;
  sacrament: "Baptism" | "FirstCommunion" | "Confirmation" | "None";
  preferredDay: string;
}

export interface PriestAppointment extends BaseBookingData {
  purpose: "Confession" | "Counseling" | "Anointing" | "Other";
  preferredDate: string;
  preferredTime: string;
}

export interface EventBooking extends BaseBookingData {
  eventId: string;
  eventName: string;
  numberOfPeople: number;
}

export interface OtherBooking extends BaseBookingData {
  serviceType: string;
  requestedDate: string;
}

export interface LeftPanelProps {
  setActiveTab: React.Dispatch<React.SetStateAction<TabType>>;
}

export interface RightPanelProps {
  activeTab: TabType;
  setActiveTab: React.Dispatch<React.SetStateAction<TabType>>;
}
