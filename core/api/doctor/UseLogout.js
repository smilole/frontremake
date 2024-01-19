
const logoutUrl = () => "https://mis-api.kreosoft.space/api/doctor/logout"

export async function useLogout() {
    const response = await axios({
        method: 'post',
        url: logoutUrl(),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
    });

    if(response.status === 200) localStorage.removeItem("access-token");
    return response;
}
