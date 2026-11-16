/** Generate an identifier in both secure and non-secure browser contexts (demo only). */
export function createId(): string {
  if (typeof globalThis.crypto?.randomUUID === 'function') {
    return globalThis.crypto.randomUUID()
  }
  return `demo-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
}
