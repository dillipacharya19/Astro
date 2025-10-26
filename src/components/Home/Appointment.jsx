import React from 'react'
import services from '../../utils/serviceData'

const Appointment = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-4xl m-4 font-bold '>Book Your Appointment</h1>
                <h2 className=' text-[20px] text-center   border-red-600 '>Book Your Appointment Before 1 Day By Making Payment Online On The Given Bank Details/Qr Code/UPI. </h2>
                <h2 className=' text-[20px] text-center mb-10'>Verify the Booking And Payment Confirmation By Sharing The Paymemn Details Over Whatsapp/Call.

                </h2>
            </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-10 max-w-7xl mx-auto">
  {services.map((service, i) => (
    <div
      key={i}
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-1">{service.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{service.subtitle}</p>

      <ul className="space-y-2 text-sm text-gray-600 mb-4">
        {service.points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-green-500">✔️</span>
            {point}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between mt-4">
        <span className="text-lg text-orange-500 font-bold">{service.price}</span>
        <button className="bg-orange-500 cursor-pointer text-white px-4 py-2 text-sm rounded hover:bg-orange-600 transition">
                      <a
                href="https://wa.me/+918018776502"
                target="_blank"
                rel="noopener noreferrer"
                >
              {service.cta}
           </a>   
        </button>
      </div>
    </div>
  ))}
</div>

        </div>
    )
}

export default Appointment