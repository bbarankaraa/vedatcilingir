import Link from "next/link"

const Footer = () => {
    return (
        <footer className="relative border-t bg-black text-white transition-colors duration-300">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    <div className="relative">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight">Eyüp Vedat Çilingir</h2>
                        <p className="mb-6 text-gray-400">
                            Eyüp’te kapıda kaldığınızda, anahtarınızı kaybettiğinizde veya kilit değişimi gerektiğinde hızlı ve güvenilir çilingir hizmeti sunuyoruz. 7/24 kesintisiz hizmet anlayışıyla dakikalar içinde adresinize ulaşıyor, kapınızı zarar vermeden açıyoruz. Çelik kapı, apartman kapısı, oto çilingir ve kasa açma gibi tüm alanlarda profesyonel çözümler sağlıyoruz.
                        </p>
                        <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-blue-600/20 blur-2xl" />
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Linkler</h3>
                        <nav className="space-y-2 text-sm">
                            <Link href="#" className="block transition-colors hover:text-blue-500">
                                Anasayfa
                            </Link>
                            <Link href="/servisbolgeleri" className="block transition-colors hover:text-blue-500">
                                Servis Bölgeleri
                            </Link>
                            <Link href="/hizmetler" className="block transition-colors hover:text-blue-500">
                                Hizmetler
                            </Link>
                            <Link href="/iletisim" className="block transition-colors hover:text-blue-500">
                                İletişim
                            </Link>
                        </nav>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">İletişim Bilgileri</h3>
                        <address className="space-y-2 text-sm not-italic">
                            <p>Alibeyköy</p>
                            <p>Tel: +90 535 950 16 82</p>
                            <p>Tel: +90 539 736 96 82</p>
                        </address>
                    </div>
                    
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
                    <p className="text-sm text-gray-400">
                        © 2025 5. Levent Çilingir.
                    </p>
                    <div className="flex gap-4 text-sm">
                        <Link href="https://landdijital.com" className="text-sm text-gray-400 hover:text-red-500 duration-200">
                            Land Dijital - İşletmenizi Marka Haline Getirelim
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
