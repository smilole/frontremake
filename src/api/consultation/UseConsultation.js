
const consultationUrl = (grouped, icdRoots, page, size) => {
    const groupedPath = grouped ? `&grouped=${grouped}` : "";
    const icdPath = "";
    icdRoots.forEach(it => icdPath.concat(`&icdRoots=${it}`));
    return `https://mis-api.kreosoft.space/api/consultation?page=${page}&size=${size}${groupedPath}${icdRoots}`;
}

export async function useConsultation(data) {
    return await axios({
        method: 'get',
        url: consultationUrl(data.grouped, data.icdRoots, data.page, data.size),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        }
    });
}

export const mockConsultation= {
    grouped: true,
    icdRoots: [ ],
    page: 1,
    size: 10
};
