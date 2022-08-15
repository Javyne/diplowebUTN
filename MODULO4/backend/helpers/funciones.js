
const isChecked = (value) =>{
    return (value !== undefined)
}


const filtrar = (dataSet, filtro) =>{

    return dataSet.filter((data) =>{

        return Object.keys(data).some((key) => {

            return JSON.stringify(data[key]).toLowerCase().trim().includes(filtro);

        });

    });
}

const imageOrDefault = (image) =>{
    return image ? image : "/images/genericUser.png"
}


module.exports = {
    isChecked,
    filtrar,
    imageOrDefault,
}