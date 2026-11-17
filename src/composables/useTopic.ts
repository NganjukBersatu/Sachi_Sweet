import { ref } from 'vue'

// State bersama: tombol "Kirim lamaran" mengisi kolom Keperluan di form kontak
const topic = ref('')

export function useTopic() {
  return { topic }
}