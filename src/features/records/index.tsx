import type {Feature} from '../../featureContract'
import PatientDashboard from '../../components/PatientDashboard'
import ChatWidget from '../../components/ChatWidget'
function Records(){return <PatientDashboard mode="records"/>}
const feature:Feature={order:3,routes:[{path:'/records',label:'სამედიცინო ბარათი',Page:Records}],Overlay:ChatWidget}
export default feature
