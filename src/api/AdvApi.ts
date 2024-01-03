export const baseUrl = 'http://localhost:8090/'

export async function getAdverts() {
    const response = await fetch(baseUrl + 'ads?/sorting=new')

    if (!response.ok) {
        throw new Error('server error')
    }

    const data = await response.json()
    return data
}