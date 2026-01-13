import { Header } from '../components/Header'

export function NotFoundPage({ cart }){
    return(
        <>
            <Header cart={cart}/>

            <title>Page Not Found</title>
            <h1 style={{textAlign: "center", fontSize: "100px", marginTop: "10rem"}}> PAGE NOT FOUND </h1>     
        </>  
    )
}