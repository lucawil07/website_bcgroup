// Shared types for the Entrümpelung Funnel Form

export interface EntruempelungFormData {
  // Step 1
  serviceType: string
  serviceTypeOther?: string
  
  // Step 2
  floor: string
  hasElevator: boolean
  parkingDistance: string
  
  // Step 3
  area: number
  fullness: string
  
  // Step 4
  specialItems?: string[]
  specialItemsOther?: string
  
  // Step 5
  needsDismantling: boolean
  dismantlingDetails?: string
  
  // Step 6
  timing: string
  photos?: string[]
  
  // Step 7
  additionalNotes?: string
  hasSeparateObjectAddress?: boolean
  objectAddress?: string
  objectPostalCode?: string
  objectCity?: string
  
  // Step 8
  name: string
  phone: string
  email: string
  address: string
  postalCode: string
  city: string
  privacyAccepted: boolean
}
