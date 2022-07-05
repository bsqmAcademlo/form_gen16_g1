const form = document.querySelector("#form");
const dataUser = document.querySelector("#data_user");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = event.target.name.value;
    const age = event.target.age.value;
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    const pass1 = event.target.pass1.value;
    const country = event.target.country.value;
    const term = event.target.term.checked;
    const gender = event.target.gender.value;
    const comment = event.target.comment.value;

    if (
        name.trim() === "" ||
        age.trim() === "" ||
        email.trim() === "" ||
        pass.trim() === "" ||
        pass1.trim() === "" ||
        country.trim() === "" ||
        !term ||
        gender.trim() === "" ||
        comment.trim() === ""
    ) {
        return alert("Todos los campos son necesarios");
    }

    if (pass !== pass1) {
        return alert("Las contra no coinciden");
    }

    let html = `
        <h2>Nombre: ${name}</h2>
        <p>Edad: ${age}</p>
        <p>Email: ${email}</p>
        <p>contraseña: ${pass}</p>
        <p>Pais ${country}</p>
        <p>Genero: ${gender}</p>
        <p>Comentarios: ${comment}</p>

        <button class="btn btnVolver" onclick='volver()'>volver</button>
    `;

    dataUser.innerHTML = html;

    // form.hidden = true
    event.target.hidden = true;
    dataUser.hidden = false;
});

// document.addEventListener("click", function (event) {
//     if (event.target.classList.contains("btnVolver")) {
//         form.hidden = false;
//         form.reset();
//         dataUser.hidden = true;
//     }
// });

function volver() {
    form.hidden = false;
    form.reset();
    dataUser.hidden = true;
}

// volver.onclick = function () {
//     alert("Estas dandole clic");
// };
