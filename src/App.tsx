import {useCallback, useState} from 'react'
import {NavLink, Route, Routes} from 'react-router-dom'
import {Activity, HeartPulse, Home, Menu, Stethoscope, X} from 'lucide-react'
import type {Doctor} from './types'
import type {Feature, FeatureProps} from './featureContract'

// Each student owns a separate entry file. Vite discovers it automatically.
const modules = import.meta.glob<Feature>('./features/*/index.tsx', {eager: true, import: 'default'})
const features = Object.values(modules).sort((a,b)=>a.order-b.order)
const routes = features.flatMap(feature=>feature.routes)
const canBook = features.some(feature=>feature.bookingAvailable)

export default function App(){
  const [menu,setMenu] = useState(false)
  const [selectedDoctor,setSelectedDoctor] = useState<Doctor|null>(null)
  const closeBooking = useCallback(()=>setSelectedDoctor(null),[])
  const props: FeatureProps = {onBook:setSelectedDoctor,selectedDoctor,closeBooking}
  return <div className="min-h-screen bg-canvas"><div className="app-layout">
    <aside className={`sidebar ${menu?'open':''}`}>
      <div className="flex justify-between items-center"><NavLink to="/" className="brand" onClick={()=>setMenu(false)}><span className="brand-mark"><HeartPulse size={23}/></span>medi<span>care</span><span className="brand-dot">.</span></NavLink><button className="lg:hidden icon-button" aria-label="მენიუს დახურვა" onClick={()=>setMenu(false)}><X/></button></div>
      <div className="nav-caption">ნავიგაცია</div><nav aria-label="მთავარი ნავიგაცია" className="space-y-2">
      <NavLink end to="/" onClick={()=>setMenu(false)} className={({isActive})=>`nav-link ${isActive?'active':''}`}><Home size={19}/> მთავარი</NavLink>
      {routes.map(({path,label})=><NavLink key={path} to={path} onClick={()=>setMenu(false)} className={({isActive})=>`nav-link ${isActive?'active':''}`}><Stethoscope size={19}/>{label}</NavLink>)}</nav>
      <div className="sidebar-bottom"><div className="help-card"><Activity size={22}/><strong>ჯანმრთელობა მნიშვნელოვანია</strong><p>დაგეგმეთ თქვენი მომდევნო ვიზიტი ონლაინ.</p></div><p className="text-xs text-muted px-2">© 2026 medicare · სასწავლო დემო</p></div>
    </aside><div className="main-area"><header className="topbar"><div className="flex items-center gap-3"><button className="lg:hidden icon-button" onClick={()=>setMenu(true)} aria-label="მენიუს გახსნა"><Menu/></button><span className="text-muted text-sm hidden sm:block">კეთილი იყოს თქვენი მობრძანება 👋</span></div><span className="demo-tag">DEMO</span></header>
    <main className="main-content"><Routes>
      <Route path="/" element={<section><div className="hero"><div className="hero-copy"><div className="hero-pill"><HeartPulse size={15}/> თქვენი ჯანმრთელობა — ჩვენი პრიორიტეტი</div><h1>ჯანმრთელობაზე ზრუნვა <span>უფრო მარტივია</span></h1><p>ექიმები, ვიზიტები და სამედიცინო ჩანაწერები ერთ სივრცეში.</p><div className="flex flex-wrap gap-3 mt-7">{routes.map(r=><NavLink key={r.path} className="button-light" to={r.path}>{r.label}</NavLink>)}</div></div></div>{!routes.length&&<p className="muted-box mt-5">საწყისი პროექტი — სტუდენტების მოდულები დაემატება Pull Request-ებით.</p>}<p className="disclaimer mt-6">სასწავლო დემო. არ გამოიყენოთ რეალური პერსონალური ან სამედიცინო მონაცემები.</p></section>}/>
      {routes.map(({path,Page})=><Route key={path} path={path} element={<Page {...props}/>}/>)}
      <Route path="*" element={<NavLink to="/">მთავარზე დაბრუნება</NavLink>}/>
    </Routes>{selectedDoctor&&!canBook&&<div role="status" className="surface p-5 mt-5"><h3 className="font-bold">არჩეული ექიმი: {selectedDoctor.name}</h3><p>ჯავშნის ფორმა დაემატება მეორე სტუდენტის მოდულით.</p><button className="button-secondary mt-3" onClick={closeBooking}>დახურვა</button></div>}</main>
    </div></div>{menu&&<button className="mobile-backdrop" aria-label="მენიუს დახურვა" onClick={()=>setMenu(false)}/>}
    {features.map(({Overlay,order})=>Overlay?<Overlay key={order} {...props}/>:null)}
  </div>
}


