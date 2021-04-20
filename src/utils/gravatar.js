import md5 from 'md5'// algoritmo riptofrabico empleado por gravatar para crear un hash a los correos electronico
//no va almacenar el correo electronico sino que va a crear hash que lo va enlazar a un avatar

 const gravatar = (email)=>{
    const base = 'https://gravatar.com/avatar/'
    //se formatea el correo electrico, quita espacios y pasa todo a minusculas
    const formattedEmail = (email).trim().toLowerCase()
    const hash = md5(formattedEmail,{ encoding: "binary" })
    return `${base}${hash}` //retona el correo formateado
 }

 export default gravatar