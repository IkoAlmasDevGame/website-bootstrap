function showpas() {
    const showpw = document.getElementById("password");

    if (showpw.type === "password") {
        document.getElementById("password").type = "text";
    } else {
        document.getElementById("password").type = "password";
    }
}