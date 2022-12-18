function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error);
        }
    }, 1000);
}


asincrona((error, dato) => {
    if (error) {
        console.error("Tenemos un error");
        console.error(error);
        //throw error; // NO VA A FUNCIONAR
        return false;
    }

    console.log("Todo ha ido bien, mi data es", dato);
})