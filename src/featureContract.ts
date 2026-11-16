import type { ComponentType } from 'react'
import type { Doctor } from './types'
export interface FeatureProps {
  onBook: (doctor: Doctor) => void
  selectedDoctor: Doctor | null
  closeBooking: () => void
}
export interface Feature {
  order: number
  routes: { path: string; label: string; Page: ComponentType<FeatureProps> }[]
  Overlay?: ComponentType<FeatureProps>
  bookingAvailable?: boolean
}
