export interface Stops{
    data: Stop[]
}

export interface Stop{
    id: string,
    attributes: StopAttributes
}

export interface StopAttributes{
    place: string
}