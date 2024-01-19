
const inspectionUrl = (id) => `https://mis-api.kreosoft.space/api/inspection/${id}`;

export async function useInspection(data) {
    return await axios({
        method: 'get',
        url: inspectionUrl(data.id),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
    });
}

export const mockInspection = {
    id: "",
}
