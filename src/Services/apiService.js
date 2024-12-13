import axios from "axios";

export const sendEmail = (pdfBlob,woNumber,setloadingState) =>{

    return new Promise((resolve,reject)=>{

        const formData = new FormData();
        formData.append('file', pdfBlob, 'generated-file.pdf')
        formData.append('subject',`W/O ${woNumber}- New Order Intake - Supply & Install`)

        try{
            axios.post('http://localhost:5000/send-email', formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            }).then((res)=>{
                setloadingState(false)
                alert("Email sent successfully")
                resolve(res.data)
            }).catch(err=>{
                reject(err)
                setloadingState(false)
            })
        }
        catch(err){
            console.log(err)
            setloadingState(false)
        }
       
    })
}