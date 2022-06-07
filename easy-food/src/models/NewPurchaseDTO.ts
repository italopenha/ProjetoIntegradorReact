import UserRegisterDTO from './UserRegisterDTO'
import NewProductDTO from './NewProductDTO'


interface NewPurchaseDTO {
    emailBuyer?: UserRegisterDTO| null;
    nameItems?: NewProductDTO| null;    
}

export default NewPurchaseDTO