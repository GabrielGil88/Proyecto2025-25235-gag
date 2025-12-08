import { createContext } from "react";

export const CartContext = createContext();

// NOTA: Fast Refresh falla si un archivo exporta componentes junto con objetos o funciones.
// Por eso el createContext se mueve a un archivo separado del CartProvider.