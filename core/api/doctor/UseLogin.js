
const loginUrl = () => "https://mis-api.kreosoft.space/api/doctor/login"

export async function useLogin(data) {
    const response = await axios({
        method: 'post',
        url: loginUrl(),
        headers: {
            'Content-type': 'application/json',
        },
        data: data
    });

    if(response.data){
        localStorage.setItem('access-token', response.data.token)
    }
    return response;
}

export const mockLogin = {
    email: "string1234@example.com",
    password: "Qwerty$10"
}
