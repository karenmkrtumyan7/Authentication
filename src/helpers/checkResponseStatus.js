export function checkResponseStatus(response) {
        return response.json()
            .then((data) => {
                if (!response.ok) {
                    return Promise.reject(data);
                } else {
                    return data;
                }
            });
}