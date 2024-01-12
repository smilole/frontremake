
const icdRootUrl = (icdRoots, start, end) => {
    const icdPath = "";
    icdRoots.forEach(it => icdPath.concat(`&icdRoots=${it}`));
    return `https://mis-api.kreosoft.space/api/report/icdrootsreport?start=${start}&end=${end}${icdPath}`;
}


export async function useIcdRoot(data) {
    return await axios({
        method: 'get',
        url: icdRootUrl(data.icdRoots, data.start, data.end),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
    });
}

