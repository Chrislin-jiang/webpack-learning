import mul from '@/d'
export function add(n1, n2) {
  return n1 + n2 + mul(10, 5)
}
export function unusedAdd(n1, n2) {
  return n1 + n2 * n2
}