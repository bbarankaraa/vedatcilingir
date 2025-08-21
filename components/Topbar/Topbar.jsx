import { FaMapMarkerAlt } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-black text-white h-9 flex items-center justify-end px-4 lg:px-24 space-x-2 text-sm">
        <FaMapMarkerAlt />
        <span>Alibeyköy / Eyüp</span>
    </div>
  )
}
export default Topbar