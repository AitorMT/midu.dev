async function getUpperName(fetchUser) {
    const user = await fetchUser()
    return user.name.toUpperCase()
}