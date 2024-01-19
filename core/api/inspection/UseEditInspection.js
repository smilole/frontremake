
const editInspectionUrl = (id) => `https://mis-api.kreosoft.space/api/inspection/${id}`;

export async function useEditInspection(data) {
    return await axios({
        method: 'put',
        url: editInspectionUrl(data.id),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
    });
}

export const mockEditInspection = {
    id: "",
    anamnesis: "string",
    complaints: "string",
    treatment: "string",
    conclusion: "Disease",
    nextVisitDate: "2025-01-12T12:21:15.463Z",
    deathDate: "2026-01-12T12:21:15.463Z",
    diagnoses: [
        {
            icdDiagnosisId: "",
            description: "string",
            type: "Main"
        }
    ]
}

