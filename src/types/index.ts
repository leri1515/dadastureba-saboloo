export interface Doctor { id: number; name: string; specialty: string; experience: number; rating: number; price: number; initials: string; color: string; bio: string; days: number[] }
export interface Appointment { id: string; doctorId: number; doctorName: string; specialty: string; date: string; time: string; patientName: string; phone: string; reason: string; status: 'დადასტურებული'|'გაუქმებული' }
export interface MedicalRecord { id: string; date: string; title: string; doctor: string; kind: 'ვიზიტი'|'დანიშნულება'|'ანალიზი'; description: string }
export interface ChatMessage { id: string; sender: 'patient'|'support'; text: string; time: string }
