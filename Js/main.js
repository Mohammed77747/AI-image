const api="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";
const imp=document.getElementById('inp')
const images=document.querySelector('.images')

const getPhoto=async()=>{
    //  console.log("clicc")
    const methods = {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":inp.value,
                "n":3,
                "size":"256x256",
            }
        )

    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods)
    // parse the response as json
    const data = await res.json()
    //   console.log(data)
    const listImages = data.data;
    images.innerHTML=''
    listImages.map(photo=>{ 
        const containar = document.createElement("div")
        images.append(containar)
        const img =document.createElement("img")
         containar.append(img)
        img.src = photo.url
    })
}