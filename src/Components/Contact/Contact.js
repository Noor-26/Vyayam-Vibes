import React from 'react'
import Wave from '../Shared/Wave/Wave'
import './Contact.css'
import { useForm } from "react-hook-form";
import MapContainer from './mapContainer';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaQuora } from 'react-icons/fa';
import { Helmet } from "react-helmet";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
    emailjs.send("service_i3h7631", "template_tr6d41e", {
      email: data.email,
      message: data.message,
      from_name: data.from_name,
    }, 'e6LBNcx9ezCTU0Xds')
      .then((result) => {
        toast.success("Email sent");
      }, (error) => {
        toast.error(error.text);
      });
    reset()
  };
  return (
    <div>
      <Helmet>
        <title>Contact - Vyayam Vibes</title>
      </Helmet>
      <div class="card-body text-center mx-auto landing_container d-block mt-5 pt-5 " data-aos="fade-in" data-aos-duration="1200">
        <img src="https://vyayamvibes.in/vyayamvibes_media/elementor/thumbs/divider-free-img-2-peguikuhmc41d6jcee5f2wnfv3614e4ox8zjkdbfdm.png" class="" alt="" />
        <p className='public_text mt-3'>Contact</p>
        <p class="Public_header text-font mx-auto  ">GET HEALTHY LIFE WITH YOGA</p>
        <p className='mb-5 mission_text mx-auto'>Yoga is the wisdom and practices that are the foundation of the healing lifestyle that blends spiritual framework, science and natural living.</p>
      </div>
      <div className='contact_container h-100'>
        <Wave tabindex="1" />
        <div className='container my-5 contact-container'>
          <div className='container'>
            <div class="text-center" data-aos="fade-in" data-aos-duration="1200">
              <h1 className='font'>ADDRESS</h1>
              <p className="contact_text">Brahma palace, Saket, Civil lines, Meerut-250001</p>
              <p className="contact_text">Phone no. : +91-843904144</p>
              <p className="contact_text">E-mail: vyayamvibes@gmail.com</p>
              <img src="https://vyayamvibes.in/vyayamvibes_media/elementor/thumbs/divider-free-img-2-peguikuhmc41d6jcee5f2wnfv3614e4ox8zjkdbfdm.png" class="" alt="" />

            </div>
            <div className='card contact_card p-5 mt-5 '>

              <div className='row row-cols-1 row-cols-md-2'>
                <div>
                  <p className='contact_text'>Ask Me Your Queries</p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" class="form-label fs-5 fw-bold">Name <span className='require'>*</span></label>
                      <input type="name" className="form-control  " {...register("from_name", {
                        required: {
                          value: true,
                          message: "Name is required!"
                        },

                      })} />

                      {errors.name?.type === 'required' && <span className='text-danger' >{errors.name.message}</span>}

                    </div>
                    <div className="mb-3 ">
                      <label for="exampleFormControlInput1" class="form-label fs-5 fw-bold">Email <span className='require'>*</span></label>
                      <input type="email" className="form-control " {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required!"
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: "The email is not valid"
                        }

                      })} />

                      {errors.email?.type === 'required' && <span className='text-danger ' >{errors.email.message}</span>}

                      {errors.email?.type === 'pattern' && <span className='text-danger ' >{errors.email.message}</span>}
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" class="form-label fs-5 fw-bold">Message <span className='require' >*</span></label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" {...register("message", {
                        required: {
                          value: true,
                          message: "This is a required field"
                        },

                      })}></textarea>

                      {errors.message?.type === 'required' && <span className='text-danger ' >{errors.message.message}</span>}
                    </div>


                    <button type='submit' className='header_btn mt-1'>Submit</button>
                  </form>
                </div>
                <div className='contact_container-2 ps-4'>
                  <div>

                    <MapContainer />
                  </div>

                  <div className='contact_links'>
                    <a href='https://www.facebook.com/vyayamvibes' target='_blank' className="about_links-icons"><FaFacebookF /></a>
                    <a href='https://twitter.com/vyayamvibes' target='_blank' className="about_links-icons"><FaTwitter /></a>
                    <a href='https://www.instagram.com/vyayamvibes' target='_blank' className="about_links-icons"><FaInstagram /></a>
                    <a href='https://www.linkedin.com/in/vyayamvibes' target='_blank' className="about_links-icons"><FaLinkedin /></a>
                    <a href='https://www.quora.com/profile/Vyayam-Vibes' target='_blank' className="about_links-icons"><FaQuora /></a>
                  </div>
                </div>


              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact