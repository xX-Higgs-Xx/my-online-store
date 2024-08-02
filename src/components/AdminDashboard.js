// src/components/AdminDashboard.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('products');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productSubcategory, setProductSubcategory] = useState('');
    const [productStock, setProductStock] = useState('');
    const [productImages, setProductImages] = useState([]);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '500px',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
    };

    const renderContent = () => {
        if (activeTab === 'products') {
            return (
                <div className="rounded-lg border bg-zinc-50 text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Productos</h3>
                        <p className="text-sm text-muted-foreground">Administra tus productos y visualiza su rendimiento de ventas.</p>
                    </div>
                    <div className="p-6">
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm">
                                <thead className="[&>tr]:border-b">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 hidden w-[100px] sm:table-cell">
                                            <span className="sr-only">Image</span>
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Name</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Category</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 hidden md:table-cell">Price</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 hidden md:table-cell">Stock</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="[&>tr:last-child]:border-0">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                                            <img alt="Product image" className="aspect-square rounded-md object-cover" height="64" src="/placeholder.svg" width="64" />
                                        </td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">Glimmer Lamps</td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Lighting</td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 hidden md:table-cell">$49.99</td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 hidden md:table-cell">500</td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10" aria-haspopup="true" type="button" id="radix-:r14:" aria-expanded="false" data-state="closed">
                                                <div className="h-4 w-4"></div>
                                                <span className="sr-only">Toggle menu</span>
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Additional product rows */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        } else if (activeTab === 'orders') {
            return (
                <div className="rounded-lg border bg-zinc-50 text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Ordenes</h3>
                        <p className="text-sm text-muted-foreground">Administra tus ordenes y visualiza su estado.</p>
                    </div>
                    <div className="p-6">
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm">
                                <thead className="[&>tr]:border-b">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 hidden w-[100px] sm:table-cell">
                                            <span className="sr-only">Image</span>
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Order ID</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Customer</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 hidden md:table-cell">Total</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 hidden md:table-cell">Status</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="[&>tr:last-child]:border-0">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                                            <img alt="Order image" className="aspect-square rounded-md object-cover" height="64" src="/placeholder.svg" width="64" />
                                        </td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">123456</td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">John Doe</td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 hidden md:table-cell">$199.99</td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 hidden md:table-cell">Shipped</td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10" aria-haspopup="true" type="button" id="radix-:r14:" aria-expanded="false" data-state="closed">
                                                <div className="h-4 w-4"></div>
                                                <span className="sr-only">Toggle menu</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        }
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', productName);
        formData.append('description', productDescription);
        formData.append('price', productPrice);
        formData.append('category', productCategory);
        formData.append('subcategory', productSubcategory);
        formData.append('stock', productStock);
        productImages.forEach((image) => {
            formData.append('images', image);
        });

        try {
            const response = await axios.post('/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Producto agregado:', response.data);
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error al agregar producto:', error);
        }
    };

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40 px-4">
            <div className="flex flex-col sm:gap-4 sm:py-4">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 my-7">
                    <h1 className="text-3xl font-medium">PANEL ADMINISTRADOR</h1>
                </header>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <div dir="ltr" data-orientation="horizontal">
                        <div className="flex items-center">
                            <div role="tablist" aria-orientation="horizontal" className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground" tabIndex="0" data-orientation="horizontal" style={{ outline: 'none' }}>
                                <button type="button" role="tab" aria-selected={activeTab === 'products'} aria-controls="radix-:rv:-content-products" data-state={activeTab === 'products' ? 'active' : 'inactive'} id="radix-:rv:-trigger-products" className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === 'products' ? 'bg-background text-foreground shadow' : ''}`} tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="" onClick={() => setActiveTab('products')}>
                                    Products
                                </button>
                                <button type="button" role="tab" aria-selected={activeTab === 'orders'} aria-controls="radix-:rv:-content-orders" data-state={activeTab === 'orders' ? 'active' : 'inactive'} id="radix-:rv:-trigger-orders" className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === 'orders' ? 'bg-background text-foreground shadow' : ''}`} tabIndex="-1" data-orientation="horizontal" data-radix-collection-item="" onClick={() => setActiveTab('orders')}>
                                    Orders
                                </button>
                            </div>
                            {activeTab === 'products' && (
                                <div className="ml-auto flex items-center gap-2">
                                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 rounded-md px-3 h-8 gap-1" onClick={handleOpenModal}>
                                        <div className="h-3.5 w-3.5">+</div>
                                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add</span>
                                    </button>
                                </div>
                            )}
                        </div>
                        <div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:rv:-trigger-products" id="radix-:rv:-content-products" tabIndex="0" className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" style={{ animationDuration: '0s' }}>
                            {renderContent()}
                        </div>
                    </div>
                </main>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} style={customStyles} contentLabel="Add Product Modal">
                <h2 className="text-xl font-bold mb-4">Agregar Producto</h2>
                <form onSubmit={handleAddProduct} className="grid gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre del Producto</label>
                        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Descripción</label>
                        <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Precio</label>
                        <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Categoría</label>
                        <input type="text" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Subcategoría</label>
                        <input type="text" value={productSubcategory} onChange={(e) => setProductSubcategory(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Stock</label>
                        <input type="number" value={productStock} onChange={(e) => setProductStock(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Imágenes</label>
                        <input type="file" multiple onChange={(e) => setProductImages(Array.from(e.target.files))} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <button type="button" onClick={handleCloseModal} className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">Cancelar</button>
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Agregar Producto</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AdminDashboard;
