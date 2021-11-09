
import {useState} from 'react'

export default function useCart(){

    const [cart, setCart] = useState(getCartItemsLS());
    
    setCartLS(cart);

    function addToCart(product){
        setCart((prev) => {
            const existing = cart.find(
                (item) => item.id === product.id,
                );

            return existing
            ? [
                ...cart.map((item) =>
                item.id === product.id
                    ? { ...item, qty: item.qty + 1 }
                    : item,
                ),
            ]
            : [...prev, {...product, qty: 1}];
        });
        
        
    }
    
    function changeQty(product, qty){
        setCart((prev) => 
            [
                ...prev.map((item) =>
                item.id === product.id
                    ? { ...item, qty }
                    : item,
                ),
            ]
        );
            
    }

    function setCartLS(cart){
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    function getCartItemsLS(){
        const data = localStorage.getItem("cart")
        if(!data) return [];
        return JSON.parse(data);
    }

    return {
        cart,
        addToCart,
        changeQty,
    }
}