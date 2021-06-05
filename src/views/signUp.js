import{ registerUser, googleAuth } from "../firebase/firebaseAuth.js";

export function signUp() {
  const signUpHtml = `
  <div class="divSignUp">
    <img src="../src/images/MeowBoxMarcaMorada.png" alt="logo" width="20%" height="20%">
    <h2 class="titles">Crea tu cuenta</h2>
    <button id="googleLogIn" class="googleLogin"> <img src="../src/images/google.png" alt="googlelogo "width="40px" height="40px"> Crear con Google</button>
    <br>
    <p>ó</p>
    <br>
    <section class="forms" id="sectionFormSignUp">
      <form id="formSignUp">
        <div class="fields">
          <p class="error"></p>
          <br>
          <div class="user-mail"><svg class="svg-icon" viewBox="0 0 20 20">
          <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
          </svg><input type="text" id="name" placeholder="Nombre" required></div>
          <div class="user-mail"><svg class="svg-icon" viewBox="0 0 20 20">
          <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
          </svg><input type="text" id="emailRegister" placeholder="Correo" required></div>
          <div class="password"><svg class="svg-icon" viewBox="0 0 20 20">
          <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
          </svg><input type="password" id="passwordRegister" placeholder="Constraseña" required></div>
        </div>
        <input type="submit" value="Registrarse" class="signup-button" href="#/timeLine">
      </form>
    </section>
    <br>
    <div class="redirecting">
      <h4>¿Ya tienes cuenta en MEOWbox?</h4> <p id="getIn"><a href="#/logIn">Ingresa</a></p> 
    </div>
  </div>`;

  const signUpView = document.createElement('section');
  signUpView.className = 'signUpClass';
  signUpView.innerHTML = signUpHtml;
  return signUpView;
}

export function signUpEvent() {
  const formRegister = document.getElementById("formSignUp");

  formRegister.addEventListener("submit", (event) => {
    const emailRegister = document.getElementById("emailRegister").value;
    const passwordRegister = document.getElementById("passwordRegister").value;
    const nameRegister = document.getElementById("name").value;
    event.preventDefault();
    registerUser(emailRegister, passwordRegister, nameRegister).then((result) => {
      if (result.error) {
        document.querySelector(".error").innerHTML = result.message;
      }
    });
  });

  //Google Login

  // const googleRegister = document.getElementById("googleRegister");
  // googleRegister.addEventListener("click", (event) => {
  //   event.preventDefault();
  //   googleAuth();
  //   formRegister.reset();
  // });

  // const googleButton = document.getElementById("googleLogin");
  // googleButton.addEventListener("click", (event) => {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   auth
  //     .signInWithRedirect(provider)
  //     .then((result) => {
  //       console.log(result);
  //      // console.log("todo salio bien");

  //       // var token = credential.accessToken;
  //       // var user = result.user;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // });
}

export function googleRegister(){

  const googleLogIn = document.getElementById("googleLogIn");

  googleLogIn.addEventListener("click", (event) => {

   event.preventDefault();
   googleAuth().then((result) => {
     if (result.error) {
       document.querySelector(".error").innerHTML = result.message;
       console.log(result.error);
     }
   });
 });

}
