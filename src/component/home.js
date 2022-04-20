import axios from '../axios';
import { useEffect } from "react";

function Home(){
    useEffect(() => {
        checkAuth();
    })

    async function checkAuth(){
        await axios.get('/auth')
        .then(res =>{
            console.log(res.data);
            if(!res.data.auth){
                window.location.href = '/';
            }
        }).catch(err =>{
            console.log(err);
        })
    }

    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}


export default Home;