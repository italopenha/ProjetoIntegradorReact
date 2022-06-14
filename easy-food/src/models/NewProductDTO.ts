interface NewProductDTO 
{
    id: number;
    name: string;
    price?: number | null;
    image: string 
    description?: string | null;
    quantity?: number | null;
}

export default NewProductDTO;