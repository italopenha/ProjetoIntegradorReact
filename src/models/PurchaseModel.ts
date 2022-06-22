import ProductModel from "./ProductModel";
import UserModel from "./UserModel";

interface PurchaseModel {
    id:number;
    buyer: UserModel;
    items: ProductModel;    
}

export default PurchaseModel