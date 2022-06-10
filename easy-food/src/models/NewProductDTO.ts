interface NewProductDTO 
{
    name?: string | null;
    price?: number | null;
    image: string 
    description?: string | null;
    quantity?: number | null;
}

export default NewProductDTO;