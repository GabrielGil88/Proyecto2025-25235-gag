import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function ContactForm({ onSubmit }) {

    const estadoInicial = {
        nombre: '',
        email: '',
        mensaje: '',
        suscribir: false,
    };

    const [form, setForm] = useState(estadoInicial);
    const [errors, setErrors] = useState({});

    //Manejador genérico para inputs controlados
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Validación mínima de errores
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

    //Prevent default manejador de envío de formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar si hay errores
        const err = validate();
        setErrors(err);
        if (Object.keys(err).length > 0) return;

        // Aquí se podría enviar el formulario
        if (typeof onSubmit === 'function') {
            onSubmit(form);
        } else {
            console.log('Enviar formulario:', form);
        }

        // Mostrar alerta de éxito con sweetalert2
        Swal.fire({
            icon: 'success',
            title: 'Formulario enviado correctamente',
            showConfirmButton: false,
            timer: 2200
        });

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
                    className={`form-control ${errors.nombre ? 'is-invalid' : ''}`} // Estilos si hay error
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
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`} // Estilos si hay error
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

            <div className="form-check my-4">
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
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => { setForm(estadoInicial); setErrors({}); }}>
                    Limpiar
                </button>
                <button type="submit" className="btn btn-primary w-100">Enviar</button>
            </div>
        </form>
    );
}
