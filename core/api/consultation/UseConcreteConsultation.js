
const concreteConsultationUrl = (id) => `https://mis-api.kreosoft.space/api/consultation/${id}`;


export async function useConcreteConsultation(data) {
    return await axios({
        method: 'get',
        url: concreteConsultationUrl(data.id),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        }
    });
}

export const mockConcreteConsultation= {
    id: "20d2ffd3-7852-4b55-750a-08dc1294b0b2"
};
