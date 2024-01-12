
const addCommentConsultationUrl = (id) => `https://mis-api.kreosoft.space/api/consultation/${id}`;


export async function useAddCommentConcreteConsultation(data) {
    return await axios({
        method: 'post',
        url: addCommentConsultationUrl(data.id),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        data: data
    });
}

export const mockAddCommentConsultation = {
    id: "20d2ffd3-7852-4b55-750a-08dc1294b0b2",
    content: "hello, world!!!",
    parentId: "20d2ffd3-7852-4b55-750a-08dc1294b0b2"
};
