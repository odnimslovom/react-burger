export const checkResponse = (res) => {
    if (res.ok) {
        return res;
    }
    return Promise.reject(`Error ${res.status}!`);
}
