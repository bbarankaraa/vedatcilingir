import Image from "next/image"
import Link from "next/link"
import { FaPhoneFlip } from "react-icons/fa6";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between lg:px-24 px-12 shadow-md">
        <Link href={"/"} className="py-1">
            <Image src={"/logo.png"} alt="Logo" width={200} height={100} className="lg:h-18 w-full" />
        </Link>
        <nav className="hidden lg:block">
        <ul className="flex items-center font-semibold gap-8 uppercase">
            <li className="hover:text-red-600 duration-200">
                <Link href={"/"}>Anasayfa</Link>
            </li>
            <li className="hover:text-red-600 duration-200">
                <Link href={"/servisbolgeleri"}>Servis Bölgeleri</Link>
            </li>
            <li className="hover:text-red-600 duration-200">
                <Link href={"/hizmetler"}>Hizmetler</Link>
            </li>
            <li className="hover:text-red-600 duration-200">
                <Link href={"/iletisim"}>İletişim</Link>
            </li>
        </ul>
        </nav>
        <div className="flex items-center gap-5">
        <Link href={"tel:+905359501682"}>
            <FaPhoneFlip size={24} />
        </Link>
        <MobileMenu />
        </div>
    </header>
  )
}
export default Navbar