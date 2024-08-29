import { useForm } from 'react-hook-form';

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="px-6 py-6 mt-8 max-w-lg mx-auto bg-[#6049CF] rounded-xl">
            <h1 className="text-xl font-bold mb-4 text-white">Request For Quote</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Name"
                        {...register('name', { required: 'Name is required' })}
                        className="border p-2 w-full rounded-lg"
                    />
                    <span className="text-red-500 absolute right-[11.25rem] top-2">*</span>
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div className="relative">
                    <input
                        type="tel"
                        placeholder="Contact Number"
                        {...register('contact', {
                            required: 'Contact number is required',
                            maxLength: {
                                value: 10,
                                message: 'Contact number cannot exceed 10 digits'
                            },
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Invalid contact number'
                            }
                        })}
                        className="border p-2 w-full rounded-lg"
                    />
                    <span className="text-red-500 absolute right-[6.40rem] top-2">*</span>
                    {errors.contact && <p className="text-red-500 text-sm">{errors.contact.message}</p>}
                </div>
                <div className="relative">
                    <input
                        type="email"
                        placeholder="Email Id"
                        {...register('email', { required: 'Email is required' })}
                        className="border p-2 w-full rounded-lg"
                    />
                    <span className="text-red-500 absolute right-[10.25rem] top-2">*</span>
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div className="relative">
                    <select
                        {...register('category', { required: 'Category is required' })}
                        className="border p-2 w-full rounded-lg"
                    >
                        <option value="">Select Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="furniture">Furniture</option>
                    </select>
                    <span className="text-red-500 absolute right-[6.25rem] top-2">*</span>
                    {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                </div>
                <div className="relative">
                    <select
                        {...register('product', { required: 'Product is required' })}
                        className="border p-2 w-full rounded-lg"
                    >
                        <option value="">Select Product</option>
                        <option value="phone">Phone</option>
                        <option value="shirt">Shirt</option>
                        <option value="table">Table</option>
                    </select>
                    <span className="text-red-500 absolute right-[6.85rem] top-2">*</span>
                    {errors.product && <p className="text-red-500 text-sm">{errors.product.message}</p>}
                </div>
                <div className="relative">
                    <textarea
                        placeholder="Any Specification"
                        {...register('specification')}
                        className="border p-2 w-full rounded-lg"
                    />
                    <span className="text-red-500 absolute right-[6.1rem] top-2">*</span>
                </div>
                <div className="relative">
                    <input
                        placeholder="Quantity"
                        type="number"
                        {...register('quantity', { required: 'Quantity is required' })}
                        className="border p-2 w-full rounded-lg"
                    />
                    <span className="text-red-500 absolute right-[10rem] top-2">*</span>
                    {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
                </div>
                <div className="relative">
                    <textarea
                        placeholder="Address of Delivery Location"
                        {...register('address', { required: 'Address is required' })}
                        className="border p-2 w-full rounded-lg"
                    />
                    <span className="text-red-500 absolute right-[.5rem] top-2">*</span>
                    {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                </div>
                <div className="relative">
                    <input
                        placeholder="Pincode of Delivery Location"
                        type="text"
                        {...register('pincode', { required: 'Pincode is required' })}
                        className="border p-2 w-full rounded-lg"
                    />
                    <span className="text-red-500 absolute right-[.5rem] top-2">*</span>
                    {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        type="submit"
                        className="bg-white font-extrabold text-[#5E3F99] p-2 rounded-lg w-32"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
