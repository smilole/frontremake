
const addPatientInspectionUrl = (id) => `https://mis-api.kreosoft.space/api/patient/${id}/inspections`;

export async function useAddPatientInspection(data) {
    return await axios({
        method: 'post',
        url: addPatientInspectionUrl(data.id),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        data: data
    });
}

export const mockAddPatientInspection = {
    id: "",
    date: "2023-01-12T12:37:26.158Z",
    anamnesis: "string",
    complaints: "string",
    treatment: "string",
    conclusion: "Disease",
    nextVisitDate: "2025-01-12T12:37:26.158Z",
    deathDate: "2023-11-12T12:37:26.158Z",
    previousInspectionId: "",
    diagnoses: [
        {
            icdDiagnosisId: "",
            description: "string",
            type: "Main"
        }
    ],
    consultations: [
        {
            specialityId: "",
            comment: {
                content: "string"
            }
        }
    ]
}
