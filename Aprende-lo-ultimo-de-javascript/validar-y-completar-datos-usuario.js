function sanitizeUser(user) {
    return {
        name: user.name || "Anónimo",
        email: user.email || "no-reply@example.com",
        isActive: user.isActive ?? true,
        newsletter: user.newsletter ?? true
    }
}