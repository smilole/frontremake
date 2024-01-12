
const profileUrl = () => "https://mis-api.kreosoft.space/api/doctor/profile"

export async function useProfile() {
    return await axios({
        method: 'get',
        url: profileUrl(),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
    });
}
