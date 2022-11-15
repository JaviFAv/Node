class Professional {
    name;
    age;
    weight;
    height;
    isRetired;
    nationality;
    oscarsNumber;
    profession;
    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
}

function postProfessional() {
    let profesional = new Professional(document.getElementById("name").value,
        document.getElementById("age").value,
        document.getElementById("weight").value,
        document.getElementById("height").value,
        document.getElementById("isRetired").value,
        document.getElementById("nationality").value,
        document.getElementById("oscarsNumber").value,
        document.getElementById("profession").value)

    const url = "http://localhost:3000/profesionales";

    if (validar(profesional)) {
        let param =
        {
            headers: { "Content-type": "application/json; charset= UTF-8" },
            body: JSON.stringify(profesional),
            method: "POST"
        }

        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.error)
                    showToast("ERROR: " + result.mensaje, "bg-danger")
                else
                    showToast("Profesional Creado Correctamente", "bg-success")

                console.log(result)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

function getProfessional() {

    if (document.getElementById("id").value == "" || document.getElementById("id").value == "null") {
        let url = "http://localhost:3000/profesionales";

        let param =
        {
            headers: { "Content-type": "application/json; charset= UTF-8" },
            method: "GET"
        }

        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (!result.error) {
                    $("#profesionales").html(`<p></p>`);
                    for (let i = 0; i < result.length; i++) {
                        jQuery(() => {



                            $("#profesionales").append(`<div class="card" style="width: 18rem;"><div class="card-body"><p class="card-text">Nombre - ${result[i].name}</p><p class="card-text">Edad - ${result[i].age}</p><p class="card-text">Peso - ${result[i].weight}</p><p class="card-text">Altura - ${result[i].height}</p><p class="card-text">¿Esta retirado? - ${result[i].isRetired}</p><p class="card-text">Nacionalidad - ${result[i].nationality}</p><p class="card-text">Numero de oscars - ${result[i].oscarsNumber}</p><p class="card-text">Profesion - ${result[i].profession}</p></div></div>`);

                        })

                    }

                }
                else
                    showToast("ERROR: " + result.mensaje, "bg-danger")

            })
            .catch(function (error) {
                console.log(error)
            })
    } else {
        let url = "http://localhost:3000/profesionales?id=" + document.getElementById("id").value;

        let param =
        {
            headers: { "Content-type": "application/json; charset= UTF-8" },
            method: "GET"
        }

        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (!result.error) {
                    jQuery(() => {



                        $("#profesionales").html(`<div class="card" style="width: 18rem;"><div class="card-body"><p class="card-text">Nombre - ${result.name}</p><p class="card-text">Edad - ${result.age}</p><p class="card-text">Peso - ${result.weight}</p><p class="card-text">Altura - ${result.height}</p><p class="card-text">¿Esta retirado? - ${result.isRetired}</p><p class="card-text">Nacionalidad - ${result.nationality}</p><p class="card-text">Numero de oscars - ${result.oscarsNumber}</p><p class="card-text">Profesion - ${result.profession}</p></div></div>`);

                    })


                }
                else
                    showToast("ERROR: " + result.mensaje, "bg-danger")

            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

function putProfessional() {
    let url = "http://localhost:3000/profesionales?id=" + document.getElementById("id").value;

    let param =
    {
        headers: { "Content-type": "application/json; charset= UTF-8" },
        body: JSON.stringify({ name: document.getElementById("name").value, age: document.getElementById("age").value, weight: document.getElementById("weight").value, height: document.getElementById("height").value, isRetired: document.getElementById("isRetired").value, nationality: document.getElementById("nationality").value, oscarsNumber: document.getElementById("oscarsNumber").value, profession: document.getElementById("profession").value, }),
        method: "PUT"
    }

    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {
            if (!result.error) {
                showToast(result.mensaje, "bg-success")

            }
            else
                showToast("ERROR: " + result.mensaje, "bg-danger")

        })
        .catch(function (error) {
            console.log(error)
        })
}

function deleteProfessional() {
    let url = "http://localhost:3000/profesionales?id=" + document.getElementById("id").value;

    let param =
    {
        headers: { "Content-type": "application/json; charset= UTF-8" },
        method: "DELETE"
    }

    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {
            if (!result.error) {
                showToast(result.mensaje, "bg-success")

            }
            else
                showToast("ERROR: " + result.mensaje, "bg-danger")

        })
        .catch(function (error) {
            console.log(error)
        })
}


function validar(professional) {
    resultado = false
    if (professional.name == "" || professional.name == "null") {
        showToast("AVISO: Campo nombre no informado", "bg-warning")
    }
    else if (professional.age == "" || professional.age == "null") {
        showToast("AVISO: Campo edad no informado", "bg-warning")
    }
    else if (professional.weight == "" || professional.weight == "null") {
        showToast("AVISO: Campo peso no informado", "bg-warning")
    }
    else if (professional.height == "" || professional.height == "null") {
        showToast("AVISO: Campo altura no informado", "bg-warning")
    }
    else if (professional.isRetired == "" || professional.isRetired == "null") {
        showToast("AVISO: Campo esta retirado no informado", "bg-warning")
    }
    else if (professional.nationality == "" || professional.nationality == "null") {
        showToast("AVISO: Campo nacionalidad no informado", "bg-warning")
    }
    else if (professional.oscarsNumber == "" || professional.oscarsNumber == "null") {
        showToast("AVISO: Campo numero de oscars no informado", "bg-warning")
    }
    else if (professional.profession == "" || professional.profession == "null") {
        showToast("AVISO: Campo profesion no informado", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}

function showToast(message, color) {
    document.getElementById("toastText").innerText = message;
    let toastElement = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " " + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}