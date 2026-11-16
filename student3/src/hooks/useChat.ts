import {useEffect,useRef,useState} from 'react'
import type {ChatMessage} from '../types'
import {createId} from '../utils/createId'
export function useChat(){
 const [messages,setMessages]=useState<ChatMessage[]>([{id:'welcome',sender:'support',text:'გამარჯობა! ეს არის სასწავლო დემო ჩატი. შეგიძლიათ დასვათ შეკითხვა პლატფორმის გამოყენების შესახებ.',time:'09:00'}])
 const [draft,setDraft]=useState('')
 const bottomRef=useRef<HTMLDivElement>(null)
 useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:'smooth',block:'nearest'})},[messages])
 const send=()=>{const text=draft.trim();if(!text)return;const time=new Date().toLocaleTimeString('ka-GE',{hour:'2-digit',minute:'2-digit'});setMessages(prev=>[...prev,{id:createId(),sender:'patient',text,time},{id:createId(),sender:'support',text:'შეტყობინება მიღებულია (დემო). რეალური ოპერატორი ამ ჩატს არ პასუხობს.',time}]);setDraft('')}
 return {messages,draft,setDraft,send,bottomRef}
}
