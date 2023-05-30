'use client'
// import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
// import emailjs from 'emailjs-com'

export const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_6fjm86w', 'template_9hdperg', form.current, 'U5nevi2ZQzl-Fdo7o')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });

  //   e.target.reset()
  // };

  return (
    <motion.section
      id="contact"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16"
    >
      <motion.div variants={textVariant()}>
        <p className="text-center text-sm text-gray-100">Get in Touch</p>
        <h2 className="text-center text-4xl text-white">Contact Me</h2>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="mt-20 flex-1"
      >
        <form className="mx-auto flex max-w-[700px] flex-col items-center gap-5">
          <input
            className="w-full rounded-lg border-[1px] border-gray-300 bg-transparent p-6 text-white"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            className="w-full rounded-lg border-[1px] border-gray-300 bg-transparent p-6 text-white"
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
          <textarea
            className="w-full resize-none rounded-lg border-[1px] border-gray-300 bg-transparent p-6 text-white"
            name="message"
            rows={8}
            placeholder="Your message"
            required
          ></textarea>
          <button
            className="w-max cursor-pointer rounded-lg border-[1px] border-gray-500 bg-purple-600 px-5 py-3 text-white hover:bg-purple-500"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.section>
  )
}
