import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import OurTeam from '../components/OurTeam';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // তোমার EmailJS সার্ভিস আইডি
        'YOUR_TEMPLATE_ID', // তোমার EmailJS টেমপ্লেট আইডি
        form.current,
        'YOUR_PUBLIC_KEY' // তোমার EmailJS পাবলিক কী
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccessMsg('Message sent successfully! Thank you.');
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          setErrorMsg('Something went wrong. Please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <section className='w-full h-full bg-base-100 text-base-content py-16 px-4 sm:px-8 lg:px-20 flex flex-col justify-center items-center'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='text-center mb-12'
      >
        <h2 className='text-5xl font-bold text-primary mb-4'>Contact Me</h2>
        <p className='max-w-2xl mx-auto text-lg text-gray-500'>
          Looking to grow your online presence and drive real results? With 5+ years of experience,
          I help brands increase visibility and engagement. Let’s create a strategy that fits your
          goals and maximizes your success.
        </p>
      </motion.div>

      <div className='grid md:grid-cols-2 gap-12 w-full max-w-6xl'>
        <div>
          <h3 className='text-2xl font-semibold mb-4'>Get in touch with me</h3>
          <div className='mb-4 flex items-start gap-4'>
            <Phone className='text-primary w-6 h-6' />
            <div>
              <p>+88017 5393 9440</p>
              <p>+88017 3320 6464</p>
            </div>
          </div>
          <div className='mb-6 flex items-start gap-4'>
            <Mail className='text-primary w-6 h-6' />
            <div>
              <p>nawazsaofficial@gmail.com</p>
              <p>nawazbiodata@gmail.com</p>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className='space-y-4'>
            <input
              type='text'
              name='form_name' // EmailJS টেমপ্লেটের সাথে মিলিয়ে
              placeholder='Full Name'
              className='input input-bordered w-full'
              required
            />
            <input
              type='email'
              name='form_email' // EmailJS টেমপ্লেটের সাথে মিলিয়ে
              placeholder='Email'
              className='input input-bordered w-full'
              required
            />
            <input
              type='text'
              name='title' // EmailJS টেমপ্লেটের সাথে মিলিয়ে (Subject)
              placeholder='Subject'
              className='input input-bordered w-full'
              required
            />
            <textarea
              name='message' // EmailJS টেমপ্লেটের সাথে মিলিয়ে
              placeholder='Comment or Message'
              className='textarea textarea-bordered w-full'
              rows='5'
              required
            ></textarea>
            <button
              type='submit'
              className='btn btn-primary flex items-center gap-2'
              disabled={loading}
            >
              <Send className='w-4 h-4' />
              {loading ? 'Sending...' : 'Send to me'}
            </button>
          </form>

          {successMsg && <p className='mt-4 text-green-600'>{successMsg}</p>}
          {errorMsg && <p className='mt-4 text-red-600'>{errorMsg}</p>}
        </div>

        <div className='bg-base-200 rounded-lg shadow-md p-6'>
          <h3 className='text-xl font-semibold mb-4 text-center'>Have Questions?</h3>
          <p className='text-gray-600 mb-2'>
            💬 Let’s talk! I’m here to help with your project ideas, freelance needs, or digital
            growth plans.
          </p>
          <p className='text-gray-600 mb-2'>🕒 Response Time: Typically within 12 hours</p>
          <p className='text-gray-600'>🌐 Based in Bangladesh — available for global projects!</p>
        </div>
      </div>
      <OurTeam />
    </section>
  );
}
// service Id : service_c5eeq7m
