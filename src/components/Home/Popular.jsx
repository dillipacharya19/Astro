import React from 'react'
import popular from '../../utils/popular'
import { Link } from 'react-router-dom'

const Popular = () => {
    return (
        <div className="bg-gray-100 py-10 px-5 md:px-20">
            <h3 className="text-amber-600 text-lg font-semibold mb-2">PRODUCTS</h3>

            <div className="mb-10">
                <h1 className="text-[29px] font-bold text-black mb-2">Our Popular <span className='hover:text-amber-500'>Products</span></h1>
                <p className="text-gray-700 max-w-xl">
                    Some of our popular products that can help to neutralize the Astrological and Vastu Problems.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    popular.map((p, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-all">
                            <img src={p.img} alt={p.name} className="w-full h-48 object-cover rounded-lg mb-3" />
                            <span className="block font-semibold text-lg text-black">{p.name}</span>
                            <span className="block text-sm text-gray-600 mt-1">{p.desc}</span>

                            {/* Styled Button with Link */}
                            <Link to={p.link}>
                                <button className="mt-3 bg-amber-600 hover:bg-amber-700 cursor-pointer text-white px-4 py-2 rounded-full text-sm">
                                    View Product
                                </button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Popular
