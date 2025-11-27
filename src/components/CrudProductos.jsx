import React, { useEffect, useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";

const API_URL = "https://6924d4c582b59600d72184e2.mockapi.io/Products";

const CrudProductos = () => {
    const [productos, setProductos] = useState([]);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        id: "",
        title: "",
        description: "",
        price: "",
        discount: "",
        stock: "",
        image: "",
    });
    const [editId, setEditId] = useState(null);


    //obtengo los productos.
    const getProductos = () => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setProductos(data))
            .catch((error) => console.error("Error al obtener productos:", error));
    };

    // cierro el modal
    const handleClose = () => {
        setShow(false);
        setForm({ id: "", title: "", description: "", price: "", discount: "", stock: "", image: "" });
        setEditId(null);
    };

    //Abrir modal 
    const handleShow = (producto) => {
        setShow(true);
        if (producto) {
            setForm({
                ...producto,
                price: Number(producto.price),
                discount: Number(producto.discount),
                stock: Number(producto.stock),
            });
            setEditId(producto.id);
        }
    };

    // 🔹 Crear o editar producto
    const handleSubmit = (e) => {
        e.preventDefault();

        const productData = {
            ...form,
            price: Number(form.price),
            discount: Number(form.discount),
            stock: Number(form.stock),
        };

        const method = editId ? "PUT" : "POST";
        const url = editId ? `${API_URL}/${editId}` : API_URL;

        fetch(url, {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productData),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Error al guardar el producto");
                return res.json();
            })
            .then(() => {
                handleClose();
                getProductos();
            })
            .catch((error) => console.error("Error:", error));
    };

    // Eliminar 
    const eliminarProducto = (id) => {
        if (!window.confirm("¿Seguro que quieres eliminar el producto?")) return;

        fetch(`${API_URL}/${id}`, { method: "DELETE" })
            .then((res) => {
                if (!res.ok) throw new Error("Error al eliminar el producto");
                getProductos();
            })
            .catch((error) => console.error("Error:", error));
    };

    //productos al iniciar
    useEffect(() => {
        getProductos();
    }, []);

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center my-4">
                <h2>Administración de Productos</h2>
                <Button className="mb-3 btn-primario" onClick={() => handleShow()}>
                    Agregar Producto
                </Button>
            </div>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th style={{width:"120px"}}>Descuento %</th>
                        <th>Stock</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((prod) => (
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.title}</td>
                            <td>{prod.description}</td>
                            <td>${Number(prod.price).toFixed(2)}</td>
                            <td>{prod.stock}</td>
                            <td>{prod.discount}</td>
                            <td>
                                {prod.image?.startsWith("http") ? (
                                    <img
                                        src={prod.image}
                                        alt={prod.title}
                                        width={50}
                                        height={50}
                                        style={{ objectFit: "cover" }}
                                    />
                                ) : (
                                    <span>{prod.image}</span>
                                )}
                            </td>
                            <td style={{ width: "240px" }}>
                                <Button
                                    size="sm"
                                    className="btn-secundario"
                                    onClick={() => handleShow(prod)}
                                >
                                    Editar
                                </Button>{" "}
                                <Button
                                    size="sm"
                                    className="btn-eliminar"
                                    onClick={() => eliminarProducto(prod.id)}
                                >
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal de agregar / editar */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editId ? "Editar" : "Agregar"} Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-2">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                value={form.description}
                                onChange={(e) =>
                                    setForm({ ...form, description: e.target.value })
                                }
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                value={form.price}
                                onChange={(e) =>
                                    setForm({ ...form, price: Number(e.target.value) })
                                }
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Descuento</Form.Label>
                            <Form.Control
                                type="number"
                                value={form.discount}
                                onChange={(e) =>
                                    setForm({ ...form, discount: Number(e.target.value) })
                                }
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control
                                type="number"
                                value={form.stock}
                                onChange={(e) =>
                                    setForm({ ...form, stock: Number(e.target.value) })
                                }
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Imagen (URL)</Form.Label>
                            <Form.Control
                                value={form.image}
                                onChange={(e) => setForm({ ...form, image: e.target.value })}
                                required
                            />
                        </Form.Group>

                        <Button type="submit" className="mt-2 btn-primario">
                            Guardar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CrudProductos;