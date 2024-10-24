def login(username, password):
    if username == 'admin' and password == 'password':
        return 'Inicio de sesión exitoso'
    else:
	return 'Credenciales inválidas'
