function login(username, password) {
    // Cambios diferentes en la funcionalidad de inicio de sesión
    if (username === 'admin' && password === '12345') {
        return 'Inicio de sesión exitoso para el admin.';
    }
    return 'Credenciales inválidas';
}
