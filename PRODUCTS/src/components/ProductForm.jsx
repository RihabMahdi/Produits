import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/ProSlice';

const ProductForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        img: '',
        prix: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct({ ...formData, id: Math.random() * 10000 }));
        navigate('/products');
        setFormData({ name: '', description: '', img: '', prix: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-lg mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New Product</h2>
            <div className="mb-5">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow-sm border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring focus:ring-green-500 transition duration-150"
                    required
                />
            </div>
            <div className="mb-5">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Description</label>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="shadow-sm border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring focus:ring-green-500 transition duration-150"
                    required
                />
            </div>
            <div className="mb-5">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Image URL</label>
                <input
                    type="text"
                    name="img"
                    value={formData.img}
                    onChange={handleChange}
                    className="shadow-sm border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring focus:ring-green-500 transition duration-150"
                    required
                />
            </div>
            <div className="mb-5">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Price</label>
                <input
                    type="number"
                    name="prix"
                    value={formData.prix}
                    onChange={handleChange}
                    className="shadow-sm border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring focus:ring-green-500 transition duration-150"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg w-full hover:bg-green-600 transition duration-200"
            >
                Add Product
            </button>
        </form>
    );
};

export default ProductForm;
