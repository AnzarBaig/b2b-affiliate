import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
    const { handleSubmit, formState: { errors } } = useForm();
    const [isInputValid, setIsInputValid] = useState(false);
    const [isContactNumber, setIsContactNumber] = useState(false);
    const [isInputValidEmail, setIsInputValidEmail] = useState(false);
    const [isInputValidPincode, setIsInputValidPincode] = useState(false);
    const [isInputValidAddress, setIsInputValidAddress] = useState(false);
    const [isQuantity, setIsQuantity] = useState(false);
    const [isInputValidSpecification, setIsInputValidSpecification] = useState(false);
    const [isValidCategory, setIsValidCategory] = useState(false);
    const [isValidProduct, setIsValidProduct] = useState(false);


    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="px-6 py-6 mt-8 max-w-lg mx-auto bg-[#6049CF] rounded-xl">
            <h1 className="text-xl font-bold mb-4 text-white">Request For Quote</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="relative">
                    <input
                        required
                        className="border p-2 w-full rounded-lg"
                        onChange={(e) => setIsInputValid(e.target.value !== '')}
                    />
                    {!isInputValid && (
                        <div className="absolute top-2 left-2 pointer-events-none select-none">
                            Name<span className="text-red-500">*</span>
                        </div>
                    )}
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div className="relative">
                    <input
                        required
                        className="border p-2 w-full rounded-lg"
                        onChange={(e) => setIsContactNumber(e.target.value !== '')}
                    />
                    {!isContactNumber && (
                        <div className="absolute top-2 left-2 pointer-events-none select-none">
                            Contact Number<span className="text-red-500">*</span>
                        </div>
                    )}

                    {errors.contact && (
                        <p className="text-red-500 text-sm">
                            {errors.contact.message}
                        </p>
                    )}
                </div>
                <div className="relative">
                    <input
                        required
                        className="border p-2 w-full rounded-lg"
                        onChange={(e) => setIsInputValidEmail(e.target.value !== '')}
                    />
                    {!isInputValidEmail && (
                        <div className="absolute top-2 left-2 pointer-events-none select-none">
                            Email Id<span className="text-red-500">*</span>
                        </div>
                    )}
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div className="relative">
                    <select
                        className="border p-2 w-full rounded-lg"
                        defaultValue=""
                        aria-label="Select category"
                        onChange={(e) => setIsValidCategory(e.target.value !== '')}
                    >
                        <option value="" disabled hidden>
                            {/* Select category */}
                        </option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="furniture">Furniture</option>
                    </select>
                    {!isValidCategory && (
                        <div className="absolute top-2 left-2 pointer-events-none select-none">
                            Select Category<span className="text-red-500">*</span>
                        </div>
                    )}
                    {errors?.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                </div>

                <div className="relative">
                    <select
                        className="border p-2 w-full rounded-lg"
                        defaultValue=""
                        aria-label="Select product"
                        onChange={(e) => setIsValidProduct(e.target.value !== '')}
                    >
                        <option value="" disabled hidden>
                            {/* Select product */}
                        </option>
                        <option value="phone">Phone</option>
                        <option value="shirt">Shirt</option>
                        <option value="table">Table</option>
                    </select>
                    {!isValidProduct && (
                        <div className="absolute top-2 left-2 pointer-events-none select-none">
                            Select Product<span className="text-red-500">*</span>
                        </div>
                    )}
                    {errors.product && <p className="text-red-500 text-sm">{errors.product.message}</p>}
                </div>
                <div className="relative">
                    <textarea
                        required
                        className="border p-2 w-full rounded-lg"
                        onChange={(e) => setIsInputValidSpecification(e.target.value !== '')}
                    />
                    {!isInputValidSpecification && (
                        <div className="absolute top-2 left-2 pointer-events-none select-none">
                            Any Specification<span className="text-red-500">*</span>
                        </div>
                    )}
                </div>
                <div className="relative">
                    <input
                        required
                        className="border p-2 w-full rounded-lg"
                        onChange={(e) => setIsQuantity(e.target.value !== '')}
                    />
                    {!isQuantity && (
                        <div className="absolute top-2 left-2 pointer-events-none select-none">
                            Quantity<span className="text-red-500">*</span>
                        </div>
                    )}
                    {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
                </div>
                <div className="relative">
                    <textarea
                        required
                        className="border p-2 w-full rounded-lg"
                        onChange={(e) => setIsInputValidAddress(e.target.value !== '')}
                    />
                    {!isInputValidAddress && (
                        <div className="absolute top-2 left-2 pointer-events-none select-none">
                            Address of delivery Location<span className="text-red-500">*</span>
                        </div>
                    )}
                    {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                </div>
                <div className="relative">
                    <input
                        required
                        className="border p-2 w-full rounded-lg"
                        onChange={(e) => setIsInputValidPincode(e.target.value !== '')}
                    />
                    {!isInputValidPincode && (
                        <div className="absolute top-2 left-2 pointer-events-none select-none">
                            Pincode of delivery Location<span className="text-red-500">*</span>
                        </div>
                    )}
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
