function Contact() {
  return (
    <div className="container py-5">
      <h1 className="mb-5">Contact Us</h1>
      <div className="row">
        <div className="col-lg-8">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="col-lg-4">
          <h5>Get in Touch</h5>
          <p>Email: hello@reviewsite.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
