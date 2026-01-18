import axios from 'axios'
import { formatMoney } from '../../utils/money'
import { useState } from 'react'

export function CartItemDetails({ cartItem, loadCart }) {
    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`)
        await loadCart()
    }

    const [quantity, setQuantity] = useState(cartItem.quantity)
    const changeQuantity = async(event) => {
        setQuantity(Number(event.target.value))
    }

    const [isUpdating, setIsUpdating] = useState(false)
    const update = async () => {
        if(!isUpdating) return setIsUpdating(true)

        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity
        })
        setIsUpdating(false)
        loadCart()
    }

    const submit = async (event) => {
        if(event.key === "Enter"){
            update()
        } else if(event.key === "Escape"){
            setQuantity(cartItem.quantity)
            setIsUpdating(false)
        }
    }

    return (
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity: {isUpdating 
                        ? <input type="number" className="quantity-input" onChange={changeQuantity} value={quantity} onKeyDown={submit}/> 
                        : <span className="quantity-label">{cartItem.quantity}</span>
                        }
                    </span>
                    <span className="update-quantity-link link-primary"
                        onClick={update}
                    >
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    )
}