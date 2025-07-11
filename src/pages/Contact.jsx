export const Contact = () => {

  const handleFormSubmit = (formData) => {
    // console.log(formData.entries())
    const formInputData = Object.fromEntries(formData.entries())
    console.log(formInputData)

    }
  

  return (
    <section className="section-contact ">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper">
        <form action={handleFormSubmit}>
          
          <input 
          type="text"
          required
          autoComplete="off"
          placeholder="Enter Your Name"
          name="username"
          />

          <input 
          type="email"
          required
          autoComplete="off"
          placeholder="Enter Your Email"
          name="email"
          className="form-control" />

          <textarea 
          type="text"
          rows='10'
          required
          autoComplete="off"
          placeholder="Enter your Query"
          name="message"
          ></textarea>

          <button type="submit" value='send
          '>Send</button>
        </form>
      </div>
    </section>
  );
};
