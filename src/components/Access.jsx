import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { KeyCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Access = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    password: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    // const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        "service_9985g93",
        "template_cfyheje",
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        "bBf4UdtEfEm8WmovZ"
      )
      // console.log(meta)
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='xl:flex-1 border-2 bg-tertiary border-quaternary p-8 rounded-[20px]'
      >
        <p className={styles.sectionSubText}>By recommendation only</p>
        <h3 className={styles.sectionHeadText}>Access</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-quaternary font-medium mb-4'>Member Number</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="XXX - XXX - XXX"
              className='bg-quaternary py-6 px-6 placeholder:text-secondary text-secondary rounded-[10px] font-medium text-[16px]'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-quaternary font-medium mb-4'>Password</span>
            <input
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              placeholder="XXXX - XXXX - XXXX - XXXX"
              className='bg-quaternary py-6 px-6 placeholder:text-secondary text-secondary rounded-[10px] font-medium text-[16px]'
            />
          </label>
          <button
            type='submit'
            className='border-2 border-quaternary bg-tertiary mt-2 py-6 px-5 rounded-[10px] text-quaternary font-medium text-[16px]'
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[400px] h-[200px]'
      >
        <KeyCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Access, "Access");