import { Stops } from "./stop.model"

export interface Journeys{
    data: Journey[]
}

export interface Journey{
    id: string,
    attributes: JourneyAttributes
}

export interface JourneyAttributes{
    price: string,
    stops: Stops,
    arrival: string
}