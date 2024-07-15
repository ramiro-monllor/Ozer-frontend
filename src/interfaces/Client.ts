// Interface Imports
import { IBill } from '@/interfaces/Bill'

export interface IClient {
    id: number
    name: string
    domicile: string
    created_at: string,
    bill?: IBill[];
}