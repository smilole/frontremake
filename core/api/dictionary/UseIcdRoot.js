
const icdRootUrl = (page, size, name) => `https://mis-api.kreosoft.space/api/dictionary/icd10/roots`;


export async function useIcdRoot(data) {
    return await axios({
        method: 'get',
        url: icdRootUrl(data.page, data.size, data.name),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
    });
}

