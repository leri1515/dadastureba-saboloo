import {useEffect,useState} from 'react'
import {CalendarDays,CheckCircle2,ChevronLeft,ChevronRight,Clock3,X} from 'lucide-react'
import type {Doctor} from '../types'
import BookingForm from './BookingForm'
const slots=['09:00','10:00','11:30','13:00','14:30','16:00','17:30']
const localDate=(d:Date)=>[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')
export default function BookingModal({doctor,onClose}:{doctor:Doctor|null;onClose:()=>void}){
 const [dayOffset,setDayOffset]=useState(0);const [time,setTime]=useState('');const [done,setDone]=useState(false)
 useEffect(()=>{setDayOffset(0);setTime('');setDone(false)},[doctor?.id])
 useEffect(()=>{if(!doctor)return;const key=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose()};document.addEventListener('keydown',key);return()=>document.removeEventListener('keydown',key)},[doctor,onClose])
 if(!doctor)return null
 const date=new Date();date.setHours(12,0,0,0);date.setDate(date.getDate()+dayOffset+1)
 const allowed=doctor.days.includes(date.getDay())
 const selectOffset=(n:number)=>{setDayOffset(n);setTime('')}
 return <div role="presentation" className="modal-overlay" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}><div className="modal-card" role="dialog" aria-modal="true" aria-label="ვიზიტის დაჯავშნა"><div className="flex justify-between items-start gap-3 mb-5"><div><p className="eyebrow">ონლაინ ჯავშანი</p><h2 className="heading mt-1">{done?'ვიზიტი დაჯავშნილია':'დაჯავშნეთ ვიზიტი'}</h2></div><button className="icon-button" aria-label="დახურვა" onClick={onClose}><X size={20}/></button></div>
 {done?<div className="text-center py-9"><CheckCircle2 size={58} className="text-primary mx-auto"/><h3 className="text-xl font-bold mt-4">ჯავშანი შენახულია!</h3><p className="text-muted text-sm mt-3">თქვენი დემო ჯავშანი იხილეთ „ჩემი ვიზიტები“ გვერდზე.</p><button className="button-primary mt-7" onClick={onClose}>დასრულება</button></div>:<><div className="flex items-center gap-3 bg-canvas rounded-2xl p-3 mb-5"><div className="avatar small" style={{backgroundColor:doctor.color}}>{doctor.initials}</div><div><p className="font-semibold">{doctor.name}</p><p className="text-sm text-muted">{doctor.specialty}</p></div></div>
 <div className="flex justify-between items-center mb-3"><h3 className="font-semibold flex items-center gap-2"><CalendarDays size={17} className="text-primary"/> თარიღი</h3><div className="flex gap-2"><button className="icon-button" aria-label="წინა დღე" disabled={dayOffset===0} onClick={()=>selectOffset(Math.max(0,dayOffset-1))}><ChevronLeft size={17}/></button><button className="icon-button" aria-label="შემდეგი დღე" disabled={dayOffset===29} onClick={()=>selectOffset(Math.min(29,dayOffset+1))}><ChevronRight size={17}/></button></div></div>
 <div className="date-panel"><span>{date.toLocaleDateString('ka-GE',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</span><span className="text-xs text-muted">{allowed?'ხელმისაწვდომი დღე':'ექიმს ამ დღეს მიღება არ აქვს'}</span></div>
 <h3 className="font-semibold flex items-center gap-2 mt-5 mb-3"><Clock3 size={17} className="text-primary"/> აირჩიეთ დრო</h3><div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-5">{slots.map(s=><button disabled={!allowed} key={s} onClick={()=>setTime(s)} className={`slot ${time===s?'selected':''}`}>{s}</button>)}</div>
 {time?<BookingForm doctor={doctor} date={localDate(date)} time={time} onSuccess={()=>setDone(true)}/>:<p className="text-xs text-muted bg-canvas rounded-xl p-3">ფორმის გასახსნელად აირჩიეთ ხელმისაწვდომი დროის სლოტი.</p>}
 </>}
 </div></div>
}
