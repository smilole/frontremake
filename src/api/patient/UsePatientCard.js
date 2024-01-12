
const patientCardUrl = (id) => `https://mis-api.kreosoft.space/api/inspection/${id}`;

export async function usePatientCard(data) {
    return await axios({
        method: 'get',
        url: patientCardUrl(data.id),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
    });
}

export const mockPatientCard = {
    id: "",
}
