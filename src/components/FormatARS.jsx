export const formatARS = (value) =>
    new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    }).format(value);


