import { Cake, Coffee, Gift, Heart, Home, Truck, Wallet, Wind } from '@lucide/vue'
import type { Feature, Job, MenuItem, NavLink, Platform, PlatformLink, Review } from '@/types'
import logo from '@/assets/logo.jpeg'
import hero from '@/assets/mockup.jpeg'
import tentangkami from '@/assets/tentangkami.jpg'
import wholecake from '@/assets/wholecake.jpeg'
import tiramisu from '@/assets/tiramissu.jpg'
import cheesecake from '@/assets/cheseecake.jpg'
import milkbun from '@/assets/milkbun.jpg'
import chocoberry from '@/assets/chocoberry.jpg'
import minicakeRek from '@/assets/minicake.jpg'
import locationPhoto from '@/assets/mockup.jpeg'

/* ===== PENGATURAN: ubah bagian ini saja ===== */
export const CONFIG: Record<'whatsapp' | 'phoneLabel' | 'address' | Platform, string> = {
  whatsapp: '6285280616218', // format 62, tanpa + atau 0 di depan
  phoneLabel: '0852-8061-6218',
  address: 'Sambiroto, Kec. Tembalang, Kota Semarang, Jawa Tengah 50276',
  gofood: '#', // tempel link toko dari aplikasi; "#" = buka halaman utama layanan
  grabfood: '#',
  shopeefood: '#',
}

const DEFAULT_URL: Record<Platform, string> = {
  gofood: 'https://gofood.co.id',
  grabfood: 'https://www.grab.com/id/food/',
  shopeefood: 'https://shopee.co.id/m/shopeefood',
}
const LABEL: Record<Platform, string> = { gofood: 'GoFood', grabfood: 'GrabFood', shopeefood: 'ShopeeFood' }

export const platforms: PlatformLink[] = (Object.keys(LABEL) as Platform[]).map((key) => ({
  key,
  label: LABEL[key],
  href: CONFIG[key] && CONFIG[key] !== '#' ? CONFIG[key] : DEFAULT_URL[key],
}))

export const images = { logo, hero, tentangkami }

export const navLinks: NavLink[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang kami' },
  { id: 'katalog', label: 'Katalog' },
  { id: 'portofolio', label: 'Portofolio' },
  { id: 'lokasi', label: 'Lokasi' },
  { id: 'karier', label: 'Karier' },
  { id: 'kontak', label: 'Kontak' },
]

export const heroChips = [
  { label: 'Dibuat segar', icon: Coffee },
  { label: 'Dibuat dengan cinta', icon: Heart },
  { label: 'Nyaman seperti rumah', icon: Home },
]

export const features: Feature[] = [
  { title: 'Dibuat segar', text: 'Dessert dan roti disiapkan segar, dari kue kecil sampai kue tart.', icon: Coffee },
  { title: 'Suasana rumahan', text: 'Tempat duduk santai di teras dan ruangan yang sejuk.', icon: Home },
  { title: 'Pesanan acara', text: 'Kue ulang tahun dan hidangan untuk perayaan Anda.', icon: Gift },
  { title: 'Pesan antar mudah', text: 'Tersedia di GoFood, GrabFood, dan ShopeeFood.', icon: Truck },
]

export const services: Feature[] = [
  { title: 'Makan di tempat', text: 'Duduk santai dan nikmati dessert, roti, serta minuman favorit.', icon: Coffee },
  { title: 'Pesan antar dan bawa pulang', text: 'Pesan lewat aplikasi atau ambil langsung di kafe.', icon: Truck },
  { title: 'Pesanan kue dan acara', text: 'Kue ulang tahun, cupcake, dan box camilan untuk acara kecil.', icon: Cake },
]

export const popular: MenuItem[] = [
  { title: 'Whole Cake', text: 'Kue yang lembut, cocok untuk ulang tahun dan acara keluarga.', image: wholecake, alt: 'Whole cake dengan hiasan stroberi' },
  { title: 'Poured Tiramisu', text: 'Tiramisu berlapis krim yang lembut, manisnya pas.', image: tiramisu, alt: 'Poured tiramisu berlapis krim dan kakao' },
  { title: 'Strawberry Cheesecake', text: 'Cheesecake lembut dengan saus stroberi yang segar.', image: cheesecake, alt: 'Strawberry cheesecake dengan saus stroberi' },
]

export const recommended: MenuItem[] = [
  { title: 'Milk Bun', text: 'Roti sobek lembut dengan krim dan taburan manis, nikmat dari suapan pertama.', image: milkbun, alt: 'Milk bun roti sobek dalam kemasan' },
  { title: 'Choco Berry', text: 'Stroberi segar dengan cokelat lumer, manis dan bikin ketagihan.', image: chocoberry, alt: 'Choco Berry stroberi dengan cokelat lumer' },
  { title: 'Mini Cake', text: 'Kue cantik berlapis krim lembut, cocok untuk hadiah atau camilan manis.', image: minicakeRek, alt: 'Mini cake berlapis krim' },
]

const reviewAlts = [
  'Ulasan Google Maps dari blues, 5 bintang: kafe nyaman dan bergaya, makanan serta dessert sangat enak',
  'Ulasan Google Maps dari Kana, 5 bintang: semua dessert enak, tiramisu paling direkomendasikan',
  'Ulasan Google Maps dari blue, 4 bintang: carbonara dan pempek kulit wajib dicoba',
  'Ulasan Google Maps dari Asbi Suar Fandi, 5 bintang: kafe kecil tersembunyi dengan menu enak dan milkbun istimewa',
  'Ulasan Google Maps dari Funa Now, 5 bintang: pastry, roti, makanan, dan minuman semua enak',
  'Ulasan Google Maps dari ann susi, 4 bintang: croissant tiramisu enak, tempat nyaman dan ber-AC',
  'Ulasan Google Maps dari Kerjaan Atikara, 5 bintang: dessert menarik dan ingin dicoba semua',
  'Ulasan Google Maps dari Atika Tsurayya, 5 bintang: makanan tidak ada yang gagal, churros favorit',
  'Ulasan Google Maps dari Laila Siti Chotimah, 5 bintang: konsep kafe rumahan, dessert bervariasi dan fresh',
  'Ulasan Google Maps dari Adima Putri Widanti, 5 bintang: kafe cute dan nyaman, milkbun jadi menu favorit',
  'Ulasan Google Maps dari Laila Siti Chotimah, 5 bintang: konsep kafe rumahan, dessert bervariasi dan fresh',
  'Ulasan Google Maps dari Adima Putri Widanti, 5 bintang: kafe cute dan nyaman, milkbun jadi menu favorit',
]
const reviewFiles = import.meta.glob<string>('@/assets/review/*.jpeg', { eager: true, import: 'default' })
export const reviews: Review[] = Object.entries(reviewFiles)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, image], i) => ({ image, alt: reviewAlts[i] ?? 'Ulasan pelanggan Google Maps' }))
  
export const jobs: Job[] = [
  { title: 'Barista', text: 'Menyiapkan minuman dan melayani pelanggan.', tags: ['Penuh waktu', 'Di kafe'] },
  { title: 'Pembuat kue dan roti', text: 'Membuat dessert dan roti sesuai jadwal produksi.', tags: ['Penuh waktu', 'Dapur'] },
  { title: 'Kasir dan pelayan', text: 'Menerima pesanan dan mengantar menu ke meja.', tags: ['Paruh waktu', 'Di kafe'] },
]

export const topics = ['Pesan kue ulang tahun', 'Pesan untuk acara', 'Tanya lowongan kerja', 'Pertanyaan lain']

export const LOCATION = {
  lat: -7.0301149,
  lng: 110.4639919,
  mapsUrl: 'https://maps.app.goo.gl/MQEZCnqDZWaii3Qc9',
  photo: locationPhoto,
  photoAlt: 'Tampak depan Sachi Sweet',
}

export type OpenHours = { open: string; close: string } | null

const BUKA = '10.00' // GANTI: jam buka asli (di Maps hanya terlihat jam tutup)
const TUTUP = '19.30' // dari Google Maps

/* Urutan: 0 = Minggu, 1 = Senin, ... 6 = Sabtu. Isi null kalau libur. */
export const hours: OpenHours[] = [
  { open: BUKA, close: TUTUP }, // Minggu
  { open: BUKA, close: TUTUP }, // Senin
  { open: BUKA, close: TUTUP }, // Selasa
  { open: BUKA, close: TUTUP }, // Rabu
  { open: BUKA, close: TUTUP }, // Kamis
  { open: BUKA, close: TUTUP }, // Jumat
  { open: BUKA, close: TUTUP }, // Sabtu
]

export const locationFacts = [
  { label: 'Teras santai', text: 'Duduk santai di teras', icon: Home },
  { label: 'Ber-AC', text: 'Ruangan sejuk dan nyaman', icon: Wind },
  { label: 'Pesan antar', text: 'GoFood, GrabFood, ShopeeFood', icon: Truck },
  { label: 'Kisaran harga', text: 'Rp 25–50 rb per orang', icon: Wallet },
]

export type CatalogItem = { name: string; price: string }
export type CatalogCategory = { slug: string; title: string; image: string; items: CatalogItem[] }

const rp = (n: number) => `Rp ${n.toLocaleString('id-ID')}`

/* image bisa diganti per kategori, mis. import xmas from '@/assets/katalog/xmas.jpeg' lalu kirim sebagai argumen ke-3 */
const category = (title: string, items: [string, number][], image: string = logo): CatalogCategory => ({
  slug: title.toLowerCase().replace(/&/g, 'dan').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
  title,
  image,
  items: items.map(([name, price]) => ({ name, price: rp(price) })),
})

/* DATA CONTOH: ganti nama menu dan harga dengan yang asli */
export const catalog: CatalogCategory[] = [
  category('Xmas Hampers', [['Hampers Mini', 85000], ['Hampers Reguler', 150000], ['Hampers Premium', 250000], ['Hampers Keluarga', 350000]]),
  category('Salt Bread', [['Original', 12000], ['Cheese', 15000], ['Choco', 15000], ['Smoked Beef', 18000]]),
  category('Cup Cake', [['Vanilla', 15000], ['Chocolate', 15000], ['Strawberry', 18000], ['Red Velvet', 18000]]),
  category('Donuts', [['Glazed', 8000], ['Choco', 10000], ['Matcha', 12000], ['Box isi 6', 55000]]),
  category('Chocoberry Callebaut', [['Chocoberry Cup', 28000], ['Cake Slice', 32000], ['Cookies', 20000], ['Gift Box', 95000]]),
  category('Matcha Series', [['Matcha Latte', 25000], ['Cake Slice', 30000], ['Cookies', 20000], ['Matcha Roll', 35000]]),
  category('Bento Cake', [['Bento Polos', 45000], ['Bento Tulisan', 55000], ['Bento Hias', 65000], ['Bento Set Hadiah', 85000]]),
  category('Dine In', [['Kopi Susu', 22000], ['Matcha Latte', 25000], ['Spaghetti Carbonara', 38000], ['Tiramisu', 30000]]),
  category('Roti Sobek', [['Original', 28000], ['Cokelat', 32000], ['Keju', 35000], ['Mix', 38000]]),
  category('Sweet & Savory', [['Milkbun', 20000], ['Croissant', 25000], ['Churros', 25000], ['Pizza Mini', 30000]]),
  category('Dubai Series', [['Dubai Chewy Cookie', 25000], ['Dubai Brownies', 35000], ['Dubai Cup', 38000], ['Dubai Cake Slice', 45000]]),
  category('Whole Cake', [['Chocolate 20 cm', 180000], ['Red Velvet 20 cm', 200000], ['Tiramisu 20 cm', 220000], ['Cheesecake 20 cm', 230000]]),
  category('Fatcaron', [['Original', 15000], ['Choco', 17000], ['Strawberry', 17000], ['Box isi 6', 90000]]),
  category('Special Edition', [['Edisi Natal', 45000], ['Edisi Valentine', 45000], ['Edisi Lebaran', 50000], ['Edisi Ulang Tahun', 55000]]),
  category('Wedding Cakes', [['2 Tier', 750000], ['3 Tier', 1200000], ['Cupcake Tower', 900000], ['Dessert Table', 1500000]]),
  category('Custom Cake', [['Custom 15 cm', 250000], ['Custom 20 cm', 350000], ['Custom 2 Layer', 450000], ['Custom Karakter', 500000]]),
]

/* Kategori yang tampil di beranda: ubah urutan di atas atau angka 2 ini */
export const homeCategories = catalog.slice(0, 2)