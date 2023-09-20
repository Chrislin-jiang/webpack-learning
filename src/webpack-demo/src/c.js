import mul from '@/d'
import('@/b.js').then(b => b.add(200, 100))
export default function sub(n1, n2) {
  return n1 - n2 + mul(100, 50)
}