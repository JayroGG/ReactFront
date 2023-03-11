export const getMovies = async ({ url }) => {
    const localData = JSON.parse(localStorage.getItem(url))
    if (!localData) {
        const response = await fetch(url)
        const { data, pages } = await response.json()
        localStorage.setItem(url, JSON.stringify(data))
        localStorage.setItem(url+'pages', JSON.stringify(pages))
        console.log('fetch')
        return data
    }
    console.log('local')
    return localData
}
