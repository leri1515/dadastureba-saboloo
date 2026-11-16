import {useState} from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useBookingForm} from '../hooks/useBookingForm'
import type {Doctor} from '../types'
const schema=Yup.object({patientName:Yup.string().trim().min(2,'მინიმუმ 2 სიმბოლო').required('შეიყვანეთ სახელი'),phone:Yup.string().trim().test('phone','შეიყვანეთ სწორი ნომერი (მაგ. 599123456)', v=>!v || /^\+?\d{9,15}$/.test(v.replace(/[\s()-]/g,''))).required('მიუთითეთ ნომერი'),reason:Yup.string().max(350,'მაქსიმუმ 350 სიმბოლო')})
export default function BookingForm({doctor,date,time,onSuccess}:{doctor:Doctor;date:string;time:string;onSuccess:()=>void}){
 const handleSubmit=useBookingForm(doctor,date,time,onSuccess)
 const [submitError,setSubmitError]=useState('')
 return <Formik initialValues={{patientName:'',phone:'',reason:''}} validationSchema={schema} onSubmit={(values,{setSubmitting})=>{setSubmitError('');try {handleSubmit(values)} catch(e) {console.error('Booking failed',e);setSubmitError('ჯავშანი ვერ დადასტურდა. განაახლეთ გვერდი და სცადეთ ხელახლა.')} finally {setSubmitting(false)}}}><Form className="space-y-4">
 <div><label htmlFor="patientName" className="form-label">სახელი და გვარი *</label><Field id="patientName" name="patientName" className="form-input" placeholder="მაგ. ანა გიორგაძე"/><ErrorMessage component="p" className="form-error" name="patientName"/></div>
 <div><label htmlFor="phone" className="form-label">ტელეფონის ნომერი *</label><Field id="phone" name="phone" className="form-input" placeholder="მაგ. 599 12 34 56"/></div>
 <div><label htmlFor="reason" className="form-label">ვიზიტის მიზეზი (არასავალდებულო)</label><Field as="textarea" rows={3} id="reason" name="reason" className="form-input resize-none" placeholder="მოკლედ აღწერეთ ვიზიტის მიზეზი..."/><ErrorMessage component="p" className="form-error" name="reason"/></div>
 <p className="text-xs text-muted">ეს სასწავლო დემოა. არ შეიყვანოთ რეალური ჯანმრთელობის ან პერსონალური მონაცემები.</p><ErrorMessage name="phone">{message=><p role="alert" className="form-error">{message}</p>}</ErrorMessage>
 {submitError&&<p role="alert" className="form-error">{submitError}</p>}<button className="button-primary w-full justify-center py-3" type="submit">ვიზიტის დადასტურება</button>
 </Form></Formik>
}
