export function logIn() {
  const htmlLogin = `
    <img src="../src/images/MeowBoxMarcaMorada.png" alt="logoMeowBox" width="20%">
    <h2>¡Bienvenido de vuelta!</h2>
    <button > <img src="../src/images/google.png" alt="googleLogo" width="5%"> Continuar con Google</button>
    <p>ó</p>
    <section id="sectionformlogIn">
        <form id="formLogIn" action="">
            <h3>Correo:</h3>
            <input type="text">
            <h3>Contraseña:</h3>
            <input type="text">
            <input type="submit" value="Ingresar">
        </form>
    <h4>Aún no tienes cuenta?</h4> <p id="signIn"><a href="#/signUp">Registrate</a></p> 
    </section>`;

  const loginView = document.createElement('section');
  loginView.innerHTML = htmlLogin;
  return loginView;
}
