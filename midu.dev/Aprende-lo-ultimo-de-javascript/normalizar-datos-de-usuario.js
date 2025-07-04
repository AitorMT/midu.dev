function normalizeUser(user) {
    return {
        name: user.name ?? 'Desconocido',
        age: user.age ?? 18,
        email: user.email ?? 'sin-email@mail.com'
    }
}