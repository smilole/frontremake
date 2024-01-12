
const inspectionChainUrl = (id) => `https://mis-api.kreosoft.space/api/inspection/${id}/chain`;

export async function useInspectionChain(data) {
    return await axios({
        method: 'get',
        url: inspectionChainUrl(data.id),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
    });
}

export const mockInspectionChain = {
    id: "",
}
