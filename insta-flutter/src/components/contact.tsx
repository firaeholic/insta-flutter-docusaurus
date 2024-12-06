import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email field is required');
    } else {
      setEmailError('');
      console.log('Form submitted:', { name, email, message });
    }
  };

  const handleBlur = () => {
    setEmailTouched(true);
    if (!email) {
      setEmailError('Email field is required');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-6">
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-center text-5xl font-extrabold text-[#3c4257] mb-6">
          Contact Us
        </h1>
        <p className="text-center text-2xl text-[#3c4257] mb-8">
          Do you have a question? Let us know and we'll answer in no time!
        </p>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-[#3c4257] mb-2 font-semibold"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md text-[#3c4257] text-lg"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-[#3c4257] mb-2 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleBlur}
                required
                className="w-full p-3 border border-gray-300 rounded-md text-[#3c4257] text-lg"
              />
              {/* Error Message */}
              {emailTouched && emailError && (
                <p className="text-red-600 text-xs mt-2">{emailError}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-[#3c4257] font-semibold"
              >
                Your Message to Us
              </label>
              <p className="italic text-black text-xs py-2 mb-1">
                Please include your Order ID if you are an existing customer.
              </p>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md text-[#3c4257] text-lg h-40"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-[#6546d7] text-white rounded-md text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
