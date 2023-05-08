import React, { useState } from 'react'
import './Researchs.js'
import { useDispatch, useSelector } from 'react-redux'
import { createPhdProject } from '../../action/PhdAction.js'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar.js'
import Footer from '../../components/footer/Footer.js'

const Researchs = () => {
  const initialState = {
     description: "", link: "", mentor: "",publisher:""
  }
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [isPhd, setIsPhd] = useState(true)
  const [data, setData] = useState(initialState)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPhdProject(data,navigate));
    resetForm();
  };
  const resetForm = () => {
    setData(initialState);
  };
  return (
    <>
    <Navbar />
      <div className="post_container">
      <h1></h1>
        <form action="" onSubmit={handleSubmit}>

          <label htmlFor="description">Description</label>
          <textarea name="description" id="" cols="30" rows="10" placeholder='Explain something...' value={data.description} onChange={handleChange}></textarea>

          <label htmlFor="url">Url:</label>
          <input type="url" name="link" value={data.link} onChange={handleChange} />

          {
            isPhd && (
              <div>
                <label htmlFor="mentor">Mentor:</label>
                <input type="text" name="mentor" value={data.mentor} onChange={handleChange} />
              </div>
            )
          }
          <div>
                <label htmlFor="publisher">Publisher:</label>
                <input type="text" name="publisher" value={data.publisher} onChange={handleChange} />
              </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Researchs