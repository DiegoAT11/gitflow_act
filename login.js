function login(username, password) {
    if (username === 'usuario' && password === 'contraseña') {
        return 'Inicio de sesión exitoso para el usuario.';
    } else if (username === 'admin' && password === '12345') {
        return 'Inicio de sesión exitoso para el admin.';
    }
    return 'Credenciales inválidas';
}
