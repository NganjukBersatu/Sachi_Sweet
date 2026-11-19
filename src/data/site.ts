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
import natal from '@/assets/katalog/natal.jpeg'
import salt from '@/assets/katalog/salt.jpeg'
import donat from '@/assets/katalog/donat.jpeg'
import matcha from '@/assets/katalog/matcha.jpeg'
import bentocake from '@/assets/katalog/bentocake.jpeg'
import dineIn from '@/assets/katalog/dine-in.jpeg'
import rotiSobek from '@/assets/katalog/roti-sobek.jpeg'
import dubai from '@/assets/katalog/dubai.jpeg'
import macaron from '@/assets/katalog/macaron.jpeg'
import spesial from '@/assets/katalog/spesial.jpeg'
import wedding from '@/assets/katalog/wedding.jpeg'
import custom from '@/assets/katalog/custom.jpeg'
import cupcake from '@/assets/katalog/cupcake.jpg'
import sweet from '@/assets/katalog/sweet&savory.jpg'


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
  { id: 'katalog', label: 'Katalog', to: '/katalog' },
  { id: 'ulasan', label: 'Ulasan' },
  { id: 'lokasi', label: 'Lokasi' },
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
  { title: 'Pesan dengan mudah', text: 'Hubungi kami untuk memesan dessert favorit Anda.', icon: Truck },
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
  {
  label: 'Pesan antar',
  text: 'GoFood, ShopeeFood',            // tetap ada sebagai cadangan
  icon: Truck,                           // pakai ikon yang sudah ada di item ini
  links: [
    { name: 'GoFood', url: 'https://gofood.co.id/semarang/restaurant/sachi-sweet-cafe-perum-bumi-wanamukti-blok-b2-b9467c4e-62d7-4b31-aea4-6fa22e9a6fc9' },
    { name: 'ShopeeFood', url: 'https://shopee.co.id/universal-link/now-food/shop/21542566?deep_and_deferred=1&shareChannel=copy_link' },
  ],
},
  { label: 'Kisaran harga', text: 'Rp 25–50 rb per orang', icon: Wallet },
]

export interface CatalogItem {
  name: string
  price: string // sudah diformat, mis. 'Rp 15.000'
}

export interface CatalogCategory {
  slug: string
  title: string
  image: string
  items: CatalogItem[]
}

const rp = (n: number) => `Rp ${n.toLocaleString('id-ID')}`

/* image bisa diganti per kategori lewat argumen ketiga; kalau kosong dipakai logo */
const category = (title: string, items: [string, number][], image: string = logo): CatalogCategory => ({
  slug: title.toLowerCase().replace(/&/g, 'dan').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
  title,
  image,
  items: items.map(([name, price]) => ({ name, price: rp(price) })),
})

/* DATA CONTOH: ganti nama menu dan harga dengan yang asli */
export const catalog: CatalogCategory[] = [
  category('Xmas Hampers', [
    ['Korean Cake Ribbon Choco Cheese 14 cm', 350000],
    ['Cup Cake isi 6 (Base Chocolate Crunchy)', 230000],
    ['Cakebox Tiramisu', 200000],
    ['Cakebox Chocomint', 200000],
    ['Christmas Tree Tarts Vanilla Cheese 14 cm', 375000],
    ['Japanese Roll Cake Red Velvet Cheese 8 cm', 180000],
    ['Donuts Brulle', 96000],
    ['Donuts Ritz Meses', 85000],
    ['Croissant Bread Pudding', 185000],
    ['Macaroni Schotel', 185000],
    ['Dimsum Bolognese', 140000],
    ['Klapertart', 145000],
    ['Chiffon Chocomint', 85000],
    ['Chiffon Ubechoco', 85000],
    ['Roti Sobek Chocolate', 55000],
    ['Roti Sobek Tiramisu', 55000],
  ], natal),
  category('Salt Bread', [
    ['Nuttela', 28000],
    ['Original Butter', 20000],
    ['Cheese Mayo', 29000],
    ['Dubai Pistachio', 35000],
    ['Cheese Crunchy', 30000],
  ], salt),
  category('Cup Cake', [
    ['Cup Cake Bouquet Flowers', 190000],
    ['Birthday Gift Cup Cake', 20000],
  ], cupcake),
  category('Donuts', [
    ['Premium Donuts', 85000],
    ['Donuts Brulle', 80000],
    ['Ritz', 70000],
    ['Sweet Donuts', 65000],
  ], donat),
  category('Chocoberry Callebaut', [
    ['Strawberry with Callebaut', 65000],
    ['Muscat x Strawberry with Callebaut', 75000],
    ['Strawberry Dubai Chewy with Callebaut', 95000],
  ], chocoberry),
  category('Matcha Series', [
    ['Coconut Matcha', 35000],
    ['Bumble Matcha', 40000],
    ['Strawberry Matcha Latte', 42000],
    ['Matcha Latte Marshmallow', 40000],
    ['Brownies Matcha Ice Cream', 35000],
    ['Poured Matcha', 55000],
    ['Croissant Matcha Strawberry', 30000],
    ['Matcha Fatcaron', 25000],
    ['Ceremonial Hojicha Latte', 55000],
    ['Ceremonial Matcha Latte', 55000],
  ], matcha),
  category('Bento Cake', [
    ['Bento Cake 10 cm', 99000],
  ], bentocake),
  category('Dine In', [
    ['Croissant (mulai dari)', 20000],
    ['Cromboloni', 22000],
    ['Pisang Bolen', 10000],
    ['Dessert (mulai dari)', 17000],
    ['Ice Cream', 28000],
    ['Mini Cake', 35000],
    ['Pasta (mulai dari)', 36000],
    ['Main Course (mulai dari)', 30000],
    ['Burger (mulai dari)', 39000],
    ['Brunch (mulai dari)', 20000],
    ['Snack (mulai dari)', 18000],
    ['Milk Bun', 25000],
    ['Fatcaron', 25000],
    ['Hot Drink', 16000],
    ['Juice (mulai dari)', 16000],
    ['Mocktail (mulai dari)', 28000],
    ['Chocolate (mulai dari)', 23000],
    ['Coffee (mulai dari)', 25000],
  ], dineIn),
  category('Roti Sobek', [
    ['Sobek Srikaya', 28000],
    ['Sobek 6 Rasa', 27000],
    ['Sobek Choco Cheese', 26000],
    ['Sobek Tiramisu', 28000],
    ['Sobek Vanilla', 28000],
    ['Sobek Keju', 28000],
    ['Sobek Martabak', 28000],
    ['Sobek Pandan', 28000],
    ['Sobek Chocolate', 26000],
    ['Konde Choco', 27000],
    ['Sobek Topping Keju', 30000],
    ['Sobek Abon', 28000],
  ], rotiSobek),
  category('Sweet & Savory', [
    ['Spaghetti Brulle 900 ml', 165000],
    ['Klapertart 900 ml', 120000],
    ['Macaroni Schotel 900 ml', 165000],
    ['Japanese Roll Cake 18 cm', 145000],
    ['Bolu Ketan (mulai dari)', 55000],
    ['Milk Bun (mulai dari)', 45000],
    ['Chiffon 20 cm', 80000],
    ['Brownies Shiny Crust 18 cm', 130000],
    ['Pisang Bolen isi 8', 60000],
    ['Cake Box (mulai dari)', 75000],
    ['Tom & Jerry Cheese', 35000],
  ], sweet),
  category('Dubai Series', [
    ['Dubai Mousse Cake', 55000],
    ['Fatcaron Black Dubai Pistachio', 35000],
    ['Dubai Chewy Cookie', 43000],
    ['Tower Dubai Chewy Cookie', 300000],
  ], dubai),
  category('Whole Cake', [
    ['Premium Fruit Cake (mulai dari)', 260000],
    ['Premium Chocolate Series (mulai dari)', 265000],
    ['Premium Classic (mulai dari)', 245000],
    ['Premium Cheese Cake (mulai dari)', 265000],
    ['Premium Celebration Cake (mulai dari)', 295000],
    ['Premium Towers (mulai dari)', 150000],
    ['Premium Tart (mulai dari)', 265000],
    ['Premium Daily Cake (mulai dari)', 180000],
  ], wholecake),
  category('Fatcaron', [
    ['Fatcaron', 25000],
    ['Fatcaron Towers (mulai dari)', 260000],
  ], macaron),
  category('Special Edition', [
    ['Rose', 195000],
    ['Frame', 170000],
    ['Flower Plants', 190000],
  ], spesial),
  category('Wedding Cakes', [
    ['Italian Cake (mulai dari)', 450000],
    ['Line Cakes', 3000000],
  ], wedding),
  category('Custom Cake', [
    ['Bouquet Flowers (mulai dari)', 370000],
    ['Butterfly (mulai dari)', 295000],
    ['Ribbon Cake (mulai dari)', 295000],
    ['Rock Cake (mulai dari)', 295000],
    ['Vintage (mulai dari)', 300000],
    ['Nami Birthday (mulai dari)', 265000],
    ['Flowers Cake (mulai dari)', 370000],
    ['3D Cake (mulai dari)', 395000],
    ['Painting (mulai dari)', 300000],
    ['Cartoon (mulai dari)', 350000],
    ['Edible Print (mulai dari)', 425000],
    ['Comic Cake (mulai dari)', 335000],
    ['Heart (mulai dari)', 315000],
    ['3D Fondant (mulai dari)', 400000],
    ['Simple Design (mulai dari)', 375000],
    ['Tiers (mulai dari)', 650000],
    ['Burn Away Cake (mulai dari)', 135000],
  ], custom),
]

/* Kategori yang tampil di beranda: ganti judul di bawah ini; urutan kartu mengikuti urutan di catalog */
const homeTitles = ['Salt Bread', 'Chocoberry Callebaut', 'Whole Cake', 'Dubai Series']
export const homeCategories = catalog.filter((c) => homeTitles.includes(c.title))