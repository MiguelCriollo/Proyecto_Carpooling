export interface FormInputDetails{
    id: string,
    type: string,
    name: string,
    placeHolder: string,
    textLabel: string
}

export interface FormButtonDetails{
    type: string,
    link?: string,
    textContent: string,
    secondText?: string,
    transparent?: boolean
}