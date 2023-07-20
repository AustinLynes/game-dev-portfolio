import React from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Replace this with your logic to handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input {...register('name', { required: 'Name is required' })} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email format' } })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Subject:</label>
        <input {...register('subject')} />
      </div>

      <div>
        <label>Message:</label>
        <textarea {...register('message', { required: 'Message is required' })} />
        {errors.message && <span>{errors.message.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
