export type ProgramType = 'Children' | 'Youth' | 'Adult' | 'RCIA';
export type SacramentFocus = 'Baptism' | 'FirstCommunion' | 'Confirmation' | 'None';

export interface CatechismProgram {
  id: string;
  name: string;
  type: ProgramType;
  sacramentFocus: SacramentFocus;
  startDate: string;
  endDate: string | null;
  studentCount: number;
  status: 'Active' | 'Completed';
}

export interface Student {
  id: string;
  name: string;
  age: number;
  parentNames: string[];
  sacramentsReceived: string[];
  attendance: number;
  status: 'Ready' | 'In Progress' | 'Incomplete';
  missingDocuments: string[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'Lesson Plan' | 'Guide' | 'Reference' | 'Video' | 'Worksheet';
  tags: string[];
}