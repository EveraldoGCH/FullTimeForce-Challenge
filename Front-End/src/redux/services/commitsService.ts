export const getCommitsService: () => Promise<any> = async () => {
    const baseUrl = "http://localhost:5000"
    const url = "/github/commits?owner=everaldogch&repo=fulltimeforce-challenge"
    fetch(baseUrl+url)
        .then(response => response.json())
        .then(json =>console.log(json))
        .catch(error => console.error(error));
}