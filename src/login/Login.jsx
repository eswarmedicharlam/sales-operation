import React, { useState } from 'react'
import loginBg from '../assets/images/loginBg.png'
import LoginLogo from '../assets/images/LoginLogo.png'
import eyeIcon from '../assets/images/eyeIcon.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginData } from '../store/UserDataSlice'

export const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const validate = () => {
    const newErrors = {}
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required.'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.'
    }
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    // const validationErrors = validate()
    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors)
    //   return
    // }
    // Dispatch login data to Redux
    dispatch(loginData({ email: formData.email, rememberMe }))
    // Navigate to dashboard
    navigate('/dashboard')
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${loginBg})` }}
    > 
      <div className="bg-white rounded-xl shadow-2xl px-10 py-10  mx-4"> 
        <div className="flex justify-center">
          <img src={LoginLogo} alt="Shakthi Seeds Logo" className="" />
        </div> 
        <p className="text-center text-xl font-semibold text-gray-800 mt-4">
          Welcome to Sales Operations
        </p>
        <p className="text-center text-sm font-normal text-inner text-[#57575A] mb-7">
          Login now to experience a journey filled with excitement.
        </p>

        
        <form onSubmit={handleSubmit} noValidate> 
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="mail@example.com"
              className={`w-full border rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-[#E4E6FC] outline-none focus:ring-2 focus:ring-green-500 transition ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-gray-50'
                }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
 
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••••"
                className={`w-full border rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-[#E4E6FC] outline-none focus:ring-2 focus:ring-green-500 transition pr-12 ${errors.password ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-gray-50'
                  }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 opacity-60 hover:opacity-100 transition"
                aria-label="Toggle password visibility"
              >
                <img src={eyeIcon} alt="Toggle password" className="w-5 h-5 object-contain" />
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
 
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-[#57575A] w-4 h-4 rounded cursor-pointer"
              />
              Remember me
            </label>
            <button
              type="button"
              className="text-sm text-[#005B30] hover:underline font-medium"
            >
              Lost Password?
            </button>
          </div>
 
          <button
            type="submit"
            className="w-full bg-[#005B30]  active:scale-[0.99] text-white font-semibold py-2.5 rounded-md transition-all duration-200 text-sm tracking-wide"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  )
}
