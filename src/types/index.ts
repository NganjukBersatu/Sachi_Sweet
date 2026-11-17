import type { Component } from 'vue'

export type Platform = 'gofood' | 'grabfood' | 'shopeefood'

export interface NavLink { id: string; label: string }
export interface Feature { title: string; text: string; icon: Component }
export interface MenuItem { title: string; text: string; image: string; alt: string }
export interface Review { image: string; alt: string }
export interface Job { title: string; text: string; tags: string[] }
export interface PlatformLink { key: Platform; label: string; href: string }