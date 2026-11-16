import {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {addAppointment} from '../store'
import type {Appointment,Doctor} from '../types'
export type BookingValues={patientName:string;phone:string;reason:string}
export function useBookingForm(doctor:Doctor,date:string,time:string,onSuccess:()=>void){
 const dispatch=useDispatch()
 return useCallback((v:BookingValues)=>{
 const appointment:Appointment={id:generateBookingId(),doctorId:doctor.id,doctorName:doctor.name,specialty:doctor.specialty,date,time,patientName:v.patientName.trim(),phone:v.phone.trim(),reason:v.reason.trim(),status:'დადასტურებული'}
 dispatch(addAppointment(appointment));onSuccess()
 },[dispatch,doctor,date,time,onSuccess])
}

// ID generation is local to this hook to avoid missing-file import errors.
function generateBookingId(): string {
  if (typeof globalThis.crypto?.randomUUID === 'function') {
    return globalThis.crypto.randomUUID()
  }
  return `booking-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
}
