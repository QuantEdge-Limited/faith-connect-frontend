export type BookingType = 'catechism' | 'priest' | 'event' | 'other';

export interface BaseBookingData {
  name: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface CatechismBooking extends BaseBookingData {
  childName: string;
  childAge: number;
  sacrament: 'Baptism' | 'FirstCommunion' | 'Confirmation' | 'None';
  preferredDay: string;
}

export interface PriestAppointment extends BaseBookingData {
  purpose: 'Confession' | 'Counseling' | 'Anointing' | 'Other';
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