import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const ActionButtons = () => {
  return (
    <div className="h-12 w-full fixed flex md:hidden items-center bottom-0 right-0 z-50">
        <Link href={"tel:+905359501682"} className="flex flex-1 justify-center items-center gap-2 group bg-green-500 h-full">
            <FaPhoneAlt size={24} className="group-hover:text-black duration-300 text-white" />
            <h1 className="group-hover:text-black duration-300 text-white">0535 950 16 82</h1>
        </Link>
        <Link href={"tel:+905397369682"} className="flex flex-1 justify-center items-center gap-2 group bg-amber-300 h-full text-white">
            <FaPhoneAlt size={24} className="group-hover:text-black duration-300" />
            <h1 className="group-hover:text-black duration-300 text-white">0539 736 96 82</h1>
        </Link>
    </div>
  )
}
export default ActionButtons