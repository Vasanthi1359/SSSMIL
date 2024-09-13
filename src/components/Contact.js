import React, { useRef, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_309gk1b', 'template_esw3fi9', form.current, 'J5BdCNm5bpedJcdrD')
      .then((result) => {
          console.log(result.text);
          handleShow();
      }, (error) => {
          console.log(error.text);
          alert('There was an error sending your message. Please try again.');
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact section">
      <h2 className='contact-us'>Contact Us</h2>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>95, Park Street, 2nd Floor, Kolkata- 700016</p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 6304719944</p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>sssmil.1907@gmail.com</p>
              </div>
            </div>
          </div>
          <Col lg={8}>
            <form ref={form} onSubmit={sendEmail} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="from_name" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" name="from_email" placeholder="Your Email" required />
                </div>
                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                </div>
                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </Col>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="border-0" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 className='text-center'>Thank You!</h2>
          <div className="text-center">
            <i className="bi bi-check-circle-fill" style={{ fontSize: '3rem', color: 'green' }}></i>
            <p>Your message has been sent successfully.</p>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Contact;
