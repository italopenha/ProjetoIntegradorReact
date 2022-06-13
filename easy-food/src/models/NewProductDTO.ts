interface NewProductDTO 
{
    id: number;
    name?: string | null;
    price?: number | null;
    image: string 
    description?: string | null;
    quantity?: number | null;
}

export default NewProductDTO;