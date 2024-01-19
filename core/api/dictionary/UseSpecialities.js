
const specialityUrl = (page, size, name) => {
    const namePath = name ? `&name=${name}` : "";
    return `https://mis-api.kreosoft.space/api/dictionary/speciality?page=${page}&size=${size}${namePath}`;
}

export async function useSpeciality(data) {
    return await axios({
        method: 'get',
        url: specialityUrl(data.page, data.size, data.name),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
    });
}

export const mockSpeciality = {
    name: "толог",
    page: 1,
    size: 10
}

