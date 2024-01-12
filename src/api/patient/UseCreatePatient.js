
const createPatientUrl = () => `https://mis-api.kreosoft.space/api/patient`;

export async function useCreatePatient(data) {
    return await axios({
        method: 'post',
        url: createPatientUrl(),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        data: data
    });
}

export const mockCreatePatient = {
    name: "string",
    birthday: "2004-01-12T12:30:44.764Z",
    gender: "Male"
}
