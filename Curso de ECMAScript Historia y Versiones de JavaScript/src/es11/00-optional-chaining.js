const users = {

    caraham: {
        country: "CO"
    },
    ana: {
        country: "MX"
    }
}

//! console.log(users.shoma.country); esto da error ya que el objeto no existe
console.log(users?.shoma?.country); // retorna undefined y no bloquea la app
