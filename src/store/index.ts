import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Appointment, MedicalRecord } from '../types'
import recordsSeed from '../data/records.json'

const seedRecords = recordsSeed as MedicalRecord[]
const STORAGE = 'medicare-demo-v1'
function getSaved(): {appointments: Appointment[]; records:MedicalRecord[]} {
 try {const raw=localStorage.getItem(STORAGE); if(raw){const p=JSON.parse(raw);if(Array.isArray(p.appointments)&&Array.isArray(p.records))return p}}catch { /* fallback demo state */ }
 return {appointments:[], records:seedRecords}
}
const initialState = getSaved()
const medicalSlice=createSlice({name:'medical',initialState,reducers:{
 addAppointment:(state,action:PayloadAction<Appointment>)=>{state.appointments.unshift(action.payload)},
 cancelAppointment:(state,action:PayloadAction<string>)=>{const item=state.appointments.find(a=>a.id===action.payload);if(item)item.status='გაუქმებული'},
 addRecord:(state,action:PayloadAction<MedicalRecord>)=>{state.records.unshift(action.payload)}
}})
export const {addAppointment,cancelAppointment,addRecord}=medicalSlice.actions
export const store=configureStore({reducer:{medical:medicalSlice.reducer}})
store.subscribe(()=>{try{localStorage.setItem(STORAGE,JSON.stringify(store.getState().medical))}catch{/* storage may be unavailable */}})
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
