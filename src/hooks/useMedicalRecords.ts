import {useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import type {RootState} from '../store'
import type {MedicalRecord} from '../types'
export function useMedicalRecords(){
 const records=useSelector((s:RootState)=>s.medical.records)
 const [prescriptions,setPrescriptions]=useState<MedicalRecord[]>([])
 useEffect(()=>{const controller=new AbortController();fetch('/records.json',{signal:controller.signal}).then(r=>r.ok?r.json():Promise.reject(new Error('Fetch failed'))).then((data:MedicalRecord[])=>setPrescriptions(data.filter(r=>r.kind==='დანიშნულება'))).catch(()=>{});return()=>controller.abort()},[])
 return {records,prescriptions}
}
