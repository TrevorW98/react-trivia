
const FetchGoogle = (url) => {
    return fetch(url).then(
        resp => resp.json()
    ).catch (
        error => console.log(error)
    )
}


export default FetchGoogle;