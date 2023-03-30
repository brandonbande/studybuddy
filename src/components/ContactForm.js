import React , {useState} from "react"

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Validate form fields
      let formErrors = {};
      if (!name) formErrors.name = 'Name is required';
      if (!email) formErrors.email = 'Email is required';
      if (!message) formErrors.message = 'Message is required';
      setErrors(formErrors);
  
      // Only submit form if there are no errors
      if (Object.keys(formErrors).length === 0) {
        // Open email app with pre-filled information
        window.open(
          `mailto:brandonbande@gmail.com?subject=Contact from ${name}&body=${message}`
        );
  
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
      }
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: '400px' }}>
          <input
            type="text"
            id="name"
            placeholder = 'Enter your name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name && <div>{errors.name}</div>}
          <br />
          <input
            type="email"
            id="email"
            placeholder = 'Enter your email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <div>{errors.email}</div>}
          <br />
          <textarea
            id="message"
            value={message}
            placeholder = 'Enter your message'
            onChange={(event) => setMessage(event.target.value)}
          />
          {errors.message && <div>{errors.message}</div>}
          <br />
          <button type="submit" className="formSubmit">Submit</button>
        </form>
      );
    };

    export default ContactForm;