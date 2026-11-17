import { Cake, Coffee, Gift, Heart, Home, Truck, Wallet, Wind } from '@lucide/vue'
import type { Feature, Job, MenuItem, NavLink, Platform, PlatformLink, Review } from '@/types'
import logo from '@/assets/logo.jpeg'
import hero from '@/assets/logo.jpeg'
import cupcake from '@/assets/logo.jpeg'
import box from '@/assets/logo.jpeg'
import minicake from '@/assets/logo.jpeg'
import locationPhoto from '@/assets/mockup.jpeg' // GANTI dengan foto kafe, mis. '@/assets/lokasi.jpeg'

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

export const images = { logo, hero, cupcake, box, minicake }

export const navLinks: NavLink[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang kami' },
  { id: 'layanan', label: 'Layanan' },
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
  { title: 'Charcuterie box', text: 'Keju, salami, buah, dan biskuit', image: box, alt: 'Box camilan berisi keju, salami, stroberi, dan anggur' },
  { title: 'Mini cake', text: 'Berlapis krim, cocok dengan minuman dingin', image: minicake, alt: 'Mini cake berlapis dan minuman dingin' },
  { title: 'Cupcake stroberi', text: 'Lembut dengan stroberi segar', image: cupcake, alt: 'Cupcake stroberi dengan krim ungu' },
]

export const recommended: MenuItem[] = [
  { title: 'Cupcake stroberi', text: 'Krim lembut dengan stroberi segar di atasnya.', image: cupcake, alt: 'Cupcake stroberi' },
  { title: 'Mini cake dan donat', text: 'Manis, lembut, dan pas untuk berbagi.', image: minicake, alt: 'Mini cake dan donat cokelat' },
  { title: 'Box camilan', text: 'Keju, buah, dan biskuit untuk teman ngobrol.', image: box, alt: 'Box camilan keju dan buah' },
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