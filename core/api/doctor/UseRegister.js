
const registerUrl = () => "https://mis-api.kreosoft.space/api/doctor/register";

export async function useRegister(data) {
    const response = await axios({
        method: 'post',
        url: registerUrl(),
        headers: {
            'Content-type': 'application/json',
        },
        data: data
    });

    if(response.data) localStorage.setItem('access-token', response.data.token);
    return response;
}

export const mockRegister = {
    name: "string",
    password: "Qwerty$10",
    email: `string1234@example.com`,
    birthday: "2000-01-06T09:10:43.379Z",
    gender: "Male",
    phone: "71234567890",
    speciality: "e8f93a49-b93f-47f0-a912-08dbffad6d0e"
}
