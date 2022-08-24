export interface ISubCategory {
    id: number
    title: string
    icon: string
    sub_subcategories: ISubSubCategory[]
}

export interface ISubSubCategory  {
    id: number
    title: string
}

export interface ICategory {
    id: number
    title: string
    subcategories: ISubCategory[]
}