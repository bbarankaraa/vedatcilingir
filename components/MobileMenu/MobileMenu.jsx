import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

const MobileMenu = () => {
  return (
    <nav className="lg:hidden flex items-center">
    <Sheet>
      <SheetTrigger className="cursor-pointer">
        <IoMenu size={36} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>

          </SheetTitle>
          
           <ul className="flex flex-col font-semibold gap-8 text-2xl uppercase">
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
        
        </SheetHeader>
      </SheetContent>
    </Sheet>
    </nav>
  )
}
export default MobileMenu