
import React from "react";

function Contact() {
  return (
    <div className="relative flex items-center justify-center min-h-[700px] bg-white sm:pt-0">

      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 w-full">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left Side - Contact Information */}
            <div className="p-6 bg-gray-100 sm:rounded-lg">

              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in touch:
              </h1>

              <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              {/* Address */}
              <div className="flex items-center mt-8 text-gray-600">
                <span className="text-2xl">📍</span>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  Acme Inc, Street, State, Postal Code
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center mt-4 text-gray-600">
                <span className="text-2xl">📞</span>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +44 1234567890
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center mt-4 text-gray-600">
                <span className="text-2xl">✉️</span>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  info@acme.org
                </div>
              </div>

            </div>

            {/* Right Side - Contact Form */}
            <form className="p-6 flex flex-col justify-center">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full mt-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />

              <input
                type="tel"
                placeholder="Telephone Number"
                className="w-full mt-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />

              <button
                type="submit"
                className="w-20 mt-4 px-4 py-2 bg-orange-700 text-white font-medium rounded-lg hover:bg-orange-800"
              >
                Submit
              </button>

            </form>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
