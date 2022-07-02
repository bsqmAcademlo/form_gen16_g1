const form = document.querySelector("#form");

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

    console.log({
        name,
        age,
        email,
        pass,
        pass1,
        country,
        term,
        gender,
        comment,
    });
});
