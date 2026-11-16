export type MenuCategory = 'dessert' | 'minuman'
export type MenuFilterValue = 'semua' | MenuCategory

export interface MenuItem {
  nama: string
  kategori: MenuCategory
  deskripsi: string
  harga: string
  gambar?: string
}

export interface MenuFilter {
  label: string
  value: MenuFilterValue
}

export interface NavLink {
  label: string
  href: string
}

export interface Highlight {
  judul: string
  deskripsi: string
}

export interface SocialLink {
  nama: string
  handle: string
  url: string
  icon: 'instagram' | 'tiktok'
}

export interface SiteInfo {
  nama: string
  alamat: string
  lokasiSingkat: string
  mapsUrl: string
  jamBuka: { hari: string; jam: string }
  telepon: string
}
