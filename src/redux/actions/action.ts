export const GET_DATA = "GET_DATA";

export const getData = (data : any) => {
    return {
        type : GET_DATA,
        payload : data
    }
};

