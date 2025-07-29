import React from 'react'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'


const Register = () => {
  const { register, handleSubmit, formState: {errors}, setError } = useForm();

  const onSubmit = (data) => {
    fetch();
  }
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-12 col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <h3 className="border-bottom pb-3 mb-4 text-center">Register</h3>

                <div className="mb-4">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    {
                      ...register('name', {
                        required: 'Name field is required.'
                      })
                    } 
                    type="text" 
                    id="name"
                    className={`form-control ${ errors.name && 'is-invalid'}`}
                    placeholder="Enter your name" 
                  />
                  {
                    errors.name && <p className='invalid-feedback'>{ errors.name.message }</p>
                  }
                </div>

                <div className="mb-4">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input 
                    {
                      ...register('email', {
                        required: 'Email field is required.',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address."
                        }
                      })
                    }
                    type="email" 
                    id="email"
                    className={`form-control ${ errors.email && 'is-invalid'}`} 
                    placeholder="Enter your email" 
                  />
                  {
                    errors.email && <p className='invalid-feedback'>{ errors.email.message }</p>
                  }
                </div>

                <div className="mb-4">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input
                    {
                      ...register('password', {
                        required: 'Password field is required.'
                      })
                    } 
                    type="password" 
                    id="password"
                    className={`form-control ${ errors.password && 'is-invalid' }`} 
                    placeholder="Enter a secure password" 
                  />
                  {
                    errors.password && <p className='invalid-feedback'>{ errors.password.message}</p>
                  }
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary">Register</button>
                </div>

                <div className="text-center pt-4">
                  Already have an account?;
                  <Link className="text-decoration-none text-secondary" to="/login">Login</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Register