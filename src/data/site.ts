import type { Highlight, NavLink, SiteInfo, SocialLink } from '@/types'

const alamat = 'Perum Bumi Wanamukti Blok B No. 2/8, Sambiroto, Tembalang, Semarang'

export const siteInfo: SiteInfo = {
  nama: 'Sachi Sweet',
  alamat,
  lokasiSingkat: 'Sambiroto, Semarang',
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(alamat)}`,
  jamBuka: { hari: 'Senin - Minggu', jam: '08.00 - 20.00' },
  telepon: '+62 852-8061-6218',
}

export const navLinks: NavLink[] = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Menu', href: '#menu' },
  { label: 'Kontak', href: '#kontak' },
]

export const heroContent = {
  eyebrow: 'Cafe & Bakery · Sejak 2023',
  judul: 'Manis yang bikin',
  judulSorot: 'betah',
  deskripsi:
    'Kue yang dipanggang setiap hari, minuman segar, dan dessert buatan sendiri. Mampir, duduk santai, dan nikmati.',
  ctaMenu: 'Lihat menu',
  ctaKunjungi: 'Kunjungi kami',
  ratingNilai: '4,8',
  ratingLabel: 'dari 100 ulasan Google',
  badgeJudul: 'Dipanggang segar',
  badgeKeterangan: 'setiap hari',
  badgeLokasiJudul: 'Temukan kami di sini',
}

export const marqueeItems: string[] = [
  'Kue segar',
  'Minuman favorit',
  'Dessert buatan sendiri',
  'Tempat santai',
]

export const aboutContent = {
  judul: 'Tentang Sachi Sweet',
  paragraf:
    'Sachi Sweet adalah cafe yang menyajikan dessert dan minuman dengan bahan pilihan.',
}

export const highlights: Highlight[] = [
  { judul: 'Dibuat segar', deskripsi: 'Dipanggang dan disiapkan setiap hari.' },
  {
    judul: 'Tempat nyaman',
    deskripsi: 'Cocok untuk santai, belajar, atau bertemu teman.',
  },
  { judul: 'Harga ramah', deskripsi: 'Menu terjangkau untuk semua kalangan.' },
]

export const socialLinks: SocialLink[] = [
  {
    nama: 'Instagram',
    handle: '@sachisweet2023',
    url: 'https://www.instagram.com/sachisweet2023',
    icon: 'instagram',
  },
  {
    nama: 'TikTok',
    handle: '@sachi.sweet',
    url: 'https://www.tiktok.com/@sachi.sweet',
    icon: 'tiktok',
  },
]
