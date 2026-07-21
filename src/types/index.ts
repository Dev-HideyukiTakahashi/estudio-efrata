export interface Service {
  id: string;
  professional: 'valeria' | 'bruno';
  name: string;
  description: string;
  duration: number;
  price: number;
}

export interface Appointment {
  id: string;
  customer_name: string;
  customer_phone: string;
  professional: 'valeria' | 'bruno';
  service: string;
  date: string;
  time: string;
  status: 'confirmed' | 'cancelled' | 'completed';
  notes?: string;
  created_at: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BookingState {
  step: number;
  professional: 'valeria' | 'bruno' | null;
  service: Service | null;
  date: Date | null;
  time: string | null;
  customerName: string;
  customerPhone: string;
  notes: string;
}
