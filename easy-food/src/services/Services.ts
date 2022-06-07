import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://easy-food-e-commerce.herokuapp.com/'
})

export const login = async(url: any, _data: any, setData: any) => {
    const result = await api.post(url, _data)
    setData('Bearer ' + result.data.token)
}

export const userRegistration = async(url: any, _data: any, setData: any) => {
    const result = await api.post(url, _data)
    setData(result.data)
}

export const search = async(url: any, setData: any, header: any) => { 
    const result = await api.get(url, header)
    setData(result.data)
}

export const searchId = async(url: any, setDada: any, header: any) => { 
    const result = await api.get(url, header)
    setDada(result.data)
}

export const post = async(url: any, _data: any, setData: any, header: any) => { 
    const result = await api.post(url, _data, header)
    setData(result.data)
}

export const put = async(url: any, _data: any, setData: any, header: any) => { 
    const result = await api.put(url, _data, header)
    setData(result.data)
}

export const deleteId = async(url: any, header: any) => { 
    await api.delete(url, header)
}