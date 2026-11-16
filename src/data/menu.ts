import type { MenuFilter, MenuItem } from '@/types'

// TODO: ganti dengan menu ASLI dari tim UI/UX / pemilik cafe.
// Isi di bawah masih contoh dari projek lama.
export const menuItems: MenuItem[] = [
  { nama: 'Cheesecake', kategori: 'dessert', deskripsi: 'Lembut dan creamy, dipanggang setiap hari.', harga: 'Rp 25.000' },
  { nama: 'Brownies', kategori: 'dessert', deskripsi: 'Cokelat pekat dengan tekstur fudgy.', harga: 'Rp 18.000' },
  { nama: 'Cream Puff', kategori: 'dessert', deskripsi: 'Kulit renyah dengan isian krim vanila.', harga: 'Rp 15.000' },
  { nama: 'Kopi Susu', kategori: 'minuman', deskripsi: 'Kopi dan susu dengan manis yang pas.', harga: 'Rp 20.000' },
  { nama: 'Matcha Latte', kategori: 'minuman', deskripsi: 'Matcha harum dengan susu yang lembut.', harga: 'Rp 24.000' },
  { nama: 'Es Teh Lemon', kategori: 'minuman', deskripsi: 'Segar dan ringan untuk hari yang panas.', harga: 'Rp 12.000' },
]

export const menuFilters: MenuFilter[] = [
  { label: 'Semua', value: 'semua' },
  { label: 'Dessert', value: 'dessert' },
  { label: 'Minuman', value: 'minuman' },
]
