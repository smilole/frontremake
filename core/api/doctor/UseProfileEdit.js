
const profileEditUrl = () => "https://mis-api.kreosoft.space/api/doctor/profile"

export async function useProfileEdit(data) {
    return await axios({
        method: 'put',
        url: profileEditUrl(),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        data: data
    });
}

export const mockProfileEdit = {
    email: "string1234@example.com",
    name: "string stringovich",
    birthday: "2000-01-06T09:10:43.379Z",
    gender: "Male",
    phone: "70987654321"
}
