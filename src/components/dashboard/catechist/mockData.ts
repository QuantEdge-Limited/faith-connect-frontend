// app/catechist/mockData.ts
import { CatechismProgram, Student, Resource } from './types';

export const mockPrograms: CatechismProgram[] = [
  {
    id: 'fc2025',
    name: 'First Communion Preparation 2025',
    type: 'Children',
    sacramentFocus: 'FirstCommunion',
    startDate: '2025-01-12',
    endDate: '2025-05-25',
    studentCount: 28,
    status: 'Active',
  },
  {
    id: 'conf2024',
    name: 'Confirmation Class of 2024',
    type: 'Youth',
    sacramentFocus: 'Confirmation',
    startDate: '2024-09-08',
    endDate: '2025-04-13',
    studentCount: 19,
    status: 'Active',
  },
  {
    id: 'rcia2024',
    name: 'RCIA Journey 2024–2025',
    type: 'Adult',
    sacramentFocus: 'Baptism',
    startDate: '2024-09-15',
    endDate: '2025-04-19', // Easter Vigil
    studentCount: 12,
    status: 'Active',
  },
  {
    id: 'bible-study-spring',
    name: 'Lenten Scripture Study',
    type: 'Adult',
    sacramentFocus: 'None',
    startDate: '2025-03-05',
    endDate: '2025-04-16',
    studentCount: 34,
    status: 'Active',
  },
];

export const mockStudents: Student[] = [
  {
    id: 's001',
    name: 'Elena Martinez',
    age: 8,
    parentNames: ['Carmen Martinez', 'Roberto Martinez'],
    sacramentsReceived: ['Baptism'],
    attendance: 96,
    status: 'In Progress',
    missingDocuments: [],
  },
  {
    id: 's002',
    name: 'Michael O’Sullivan',
    age: 15,
    parentNames: ['Patricia O’Sullivan'],
    sacramentsReceived: ['Baptism', 'FirstCommunion'],
    attendance: 82,
    status: 'In Progress',
    missingDocuments: [],
  },
  {
    id: 's003',
    name: 'Aisha Johnson',
    age: 9,
    parentNames: ['Fatima Johnson', 'David Johnson'],
    sacramentsReceived: ['Baptism'],
    attendance: 70,
    status: 'Incomplete',
    missingDocuments: ['Baptismal Certificate'],
  },
  {
    id: 's004',
    name: 'Thomas Nguyen',
    age: 16,
    parentNames: ['Lan Nguyen', 'Minh Nguyen'],
    sacramentsReceived: ['Baptism', 'FirstCommunion'],
    attendance: 90,
    status: 'Ready',
    missingDocuments: [],
  },
  {
    id: 's005',
    name: 'Sarah Williams',
    age: 32,
    parentNames: ['—'], // Adult RCIA candidate
    sacramentsReceived: [],
    attendance: 88,
    status: 'In Progress',
    missingDocuments: ['Proof of Godparent Eligibility'],
  },
  {
    id: 's006',
    name: 'Daniel Kim',
    age: 14,
    parentNames: ['Grace Kim'],
    sacramentsReceived: ['Baptism'],
    attendance: 65,
    status: 'Incomplete',
    missingDocuments: ['First Communion Permission Form'],
  },
];

export const mockResources: Resource[] = [
  {
    id: 'res-001',
    title: 'First Communion – Session 1: The Gift of the Eucharist',
    type: 'Lesson Plan',
    tags: ['Children', 'FirstCommunion', 'Eucharist'],
  },
  {
    id: 'res-002',
    title: 'RCIA Scrutinies Guide (Year B)',
    type: 'Guide',
    tags: ['Adult', 'RCIA', 'Lent'],
  },
  {
    id: 'res-003',
    title: 'CCC 1212–1284: The Sacrament of Baptism',
    type: 'Reference',
    tags: ['Baptism', 'CCC', 'Theology'],
  },
  {
    id: 'res-004',
    title: 'Confirmation Sponsor Requirements (Diocesan Policy)',
    type: 'Worksheet',
    tags: ['Confirmation', 'Sponsor', 'Policy'],
  },
  {
    id: 'res-005',
    title: 'Video: "The Mass Explained for Children"',
    type: 'Video',
    tags: ['Children', 'Liturgy', 'Eucharist'],
  },
  {
    id: 'res-006',
    title: 'Parent Meeting Agenda – First Reconciliation Prep',
    type: 'Guide',
    tags: ['Parents', 'Reconciliation', 'FirstCommunion'],
  },
];