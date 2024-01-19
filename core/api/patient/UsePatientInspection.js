
const patientInspectionUrl = (id, page, size, icdRoots, grouped) => {
    const groupedPath = grouped ? `&grouped=${grouped}` : "";
    const icdPath = "";
    icdRoots.forEach(it => icdPath.concat(`&icdRoots=${it}`));
    return `https://mis-api.kreosoft.space/api/patient/${id}/inspections?page=${page}&size${size}${grouped}${icdPath}`;
}

export async function usePatientInspection(data) {
    return await axios({
        method: 'get',
        url: patientInspectionUrl(data.id, data.page, data.size, data.icdRoots, data.grouped),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
    });
}

export const mockPatientInspection = {
    id: "",
    grouped: false,
    icdRoots: [
        ""
    ],
    page: 1,
    size: 10
}
