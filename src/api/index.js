import { LOCALSTORAGE_TOKEN_KEY } from "../Utils";
export const customFetch = async(url, { body, ...customConfig }) => {
    const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

    const headers = {
        'content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin' :'yes'
    }
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const config = {
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers
        },
    };
    if (body) {
        config.body = JSON.stringify(body);
    }
    try {
        const response = await fetch(url, config);
        const data = await response.json();
        if (data) {
            console.log(data.hits);
            return {
                data: data,
                success: true
            };
        }
        throw new Error(data.message);
    } catch (error) {
        console.log("Error" ,error);       
        return {
            message: error.message,
            success: false
        }
    }
};
