
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


module.exports = {
    isChecked,
    filtrar,

}