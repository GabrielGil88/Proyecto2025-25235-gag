import React, { useState } from 'react';

const estadoInicial = {
    nombre: '',
    email: '',
    mensaje: '',
    suscribir: false,
};

export default function ContactForm({ onSubmit }) {
    const [form, setForm] = useState(estadoInicial);
    const [errors, setErrors] = useState({});

    // manejador genérico para inputs controlados
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // validación mínima
    const validate = () => {
        const err = {};
        if (!form.nombre.trim()) err.nombre = 'El nombre es obligatorio';
        if (!form.email.trim()) {
            err.email = 'El email es obligatorio';
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            err.email = 'Email no válido';
        }
        return err;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = validate();
        setErrors(err);
        if (Object.keys(err).length > 0) return;

        // aquí podés enviar a una API, mostrar un toast, etc.
        // si recibiste prop onSubmit, la llamás; sino, console.log
        if (typeof onSubmit === 'function') {
            onSubmit(form);
        } else {
            console.log('Enviar formulario:', form);
            alert('Formulario enviado (simulación). Revisa la consola.');
        }

        //Limpiar formulario
        setForm(estadoInicial);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    className={`form-control ${errors.nombre ? 'is-invalid' : ''}`} // Estilo si hay error
                    value={form.nombre}
                    onChange={handleChange}
                />
                {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={form.email}
                    onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    className="form-control"
                    value={form.mensaje}
                    onChange={handleChange}
                />
            </div>

            <div className="form-check mb-3">
                <input
                    id="suscribir"
                    name="suscribir"
                    type="checkbox"
                    className="form-check-input"
                    checked={form.suscribir}
                    onChange={handleChange}
                />
                <label htmlFor="suscribir" className="form-check-label">
                    Deseo que me envien las ofertas por email
                </label>
            </div>

            <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary">Enviar</button>
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => { setForm(estadoInicial); setErrors({}); }}
                >
                    Limpiar
                </button>
            </div>
        </form>
    );
}
