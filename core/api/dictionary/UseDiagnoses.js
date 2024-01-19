
const diagnosesUrl = (page, size, request) => {
    const requestPath = request ? `&request=${request}` : "";
    return `https://mis-api.kreosoft.space/api/dictionary/icd10?page=${page}&size=${size}${requestPath}`;
}

export async function useDiagnoses(data) {
    return await axios({
        method: 'get',
        url: diagnosesUrl(data.page, data.size, data.request),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
    });
}

export const mockDiagnoses = {
    request: "Инфаркт",
    page: 1,
    size: 10
}
