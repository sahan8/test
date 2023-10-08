const checkAuth =()=>{
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve({auth:true })
        // },1000)
        setTimeout(() => {
            reject({error:'auth error'})
        },1000)
    })
}

getUser().then((data)=>{
    console.log(data)
})
    .catch((error)=>{
     console.log(error)   
    })