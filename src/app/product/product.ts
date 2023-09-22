import { Category } from "../category/category"
import { Supplier } from "../supplier/supplier"

export class Product{

    id: Number = 0
	name: String = ""
    description : String = ""
	price : Number = 0
    supplier: Supplier|undefined
    category: Category|undefined
    state: String = ""
    url: String = ""

}