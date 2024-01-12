
const searchPatientInspectionUrl = (id, request) => `https://mis-api.kreosoft.space/api/patient/${id}/inspections/search${request ? `?request=${request}` : ""}`;

export async function useSearchPatientInspection(data) {
    return await axios({
        method: 'get',
        url: searchPatientInspectionUrl(data.id, data.request),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
    });
}

export const mockSearchPatientInspection = {
    id: "",
    request: "str"
}
