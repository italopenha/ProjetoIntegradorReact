interface NewProductDTO 
{
    id: number;
    name: string;
    price: number;
    image: string 
    description?: string | null;
    quantity: number;
}

export default NewProductDTO;