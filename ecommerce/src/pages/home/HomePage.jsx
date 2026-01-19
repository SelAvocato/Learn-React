import axios from 'axios'
import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header';
import './HomePage.css';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({cart, loadCart}) {
    const [searchParams] = useSearchParams()
    const search = searchParams.get('search')
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getHomeData = async () => {
            const response = search != null ? await axios.get(`/api/products?search=${search}`) : await axios.get(`/api/products`) 
            setProducts(response.data)
        }

        getHomeData()
    }, [search])

    return (
        <>
            <link rel="icon" href="home-favicon.png" />
            <title>Ecommerce Project</title>

            <Header cart={cart} searchText={search} />
            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    )
}
