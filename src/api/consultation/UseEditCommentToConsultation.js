
const editCommentConsultationUrl = (id) => `https://mis-api.kreosoft.space/api/consultation/${id}`;


export async function useEditCommentConcreteConsultation(data) {
    return await axios({
        method: 'post',
        url: editCommentConsultationUrl(data.id),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        data: data
    });
}

export const mockEditCommentConsultation = {
    id: "20d2ffd3-7852-4b55-750a-08dc1294b0b2",
    content: "hello, world!!!",
};
