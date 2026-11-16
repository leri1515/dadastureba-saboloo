import type {ChatMessage} from '../types'
export default function MessageItem({message}:{message:ChatMessage}){return <div className={`message-row ${message.sender==='patient'?'mine':''}`}><div className="message-bubble"><p>{message.text}</p><span>{message.time}</span></div></div>}
