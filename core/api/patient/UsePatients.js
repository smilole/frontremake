
const patientsUrl = (page, size, onlyMine, scheduleVisits, sorting, conclusion, name) => {
    const onlyMinePath = onlyMine ? `&onlyMine=${onlyMine}` : "";
    const scheduleVisitsPath = scheduleVisits ? `&scheduleVisits=${onlyMine}` : "";
    const sortingPath = sorting ? `&sorting=${onlyMine}` : "";
    const conclusionPath = conclusion ? `&conclusion=${onlyMine}` : "";
    const namePath = name ? `&name=${onlyMine}` : "";
    return `https://mis-api.kreosoft.space/api/patient?page=${page}&size=${size}${onlyMinePath}${scheduleVisitsPath}${sortingPath}${conclusionPath}${namePath}`;
}

export async function usePatients(data) {
    return await axios({
        method: 'get',
        url: patientsUrl(data.page, data.size, data.onlyMine, data.scheduleVisits, data.sorting, data.conclusion, data.name),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
    });
}

export const mockPatients = {
    page: 1,
    size: 10,
    onlyMine: false,
    scheduleVisits: true,
    sorting: "NameAsc",
    conclusion: "Death",
    name: "str"
}
