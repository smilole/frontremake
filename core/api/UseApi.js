
export async function useApi(apiFn, onSuccess, onError) {
    const response = await apiFn();
    console.log(response)
    if(response.status === 200) {
        onSuccess(response.data);
    }
    else if(response.status === 401) {
        onError("Unauthorized");
    }
    else {
        onError(response.error);
    }
}
