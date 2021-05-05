
interface IFood{
    image: string;
    title: string;
    subtitle: string;
    price: string | number;
}


interface IService{
    name: string;
    description: string;
    img?: string;
    icon?: JSX.Element | string;
}

interface IStaff{
    name: string;
    role: string;
    description: string;
    facebook: string;
    twitter: string;
    instagram: string;
    google: string;
}

interface ICustomer{
    id: number;
    name: string;
    lorem?: string;
    imageUrl: string;
}