import  { useState } from 'react';
import styles from '@/styles/Home.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Contact = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [number,setNumber] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    const data = {name,email,number}
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  .then(response => response.text())
  .then((data) => {
    setEmail('')
    setName("")
    setNumber("")
    alert(`Thanks for Contacting Us`)
  })
  .catch((error) => {
    console.error("Error:", error);
  });

   }
   const handleChange = (e) =>{
     if (e.target.name == 'name'){
       setName(e.target.value)
     }
     else if (e.target.name == 'email'){
      setEmail(e.target.value)
    }
    else if (e.target.name == 'number'){
      setNumber(e.target.value)
      
    }
   }

  return (
    <>
      <main className={styles.main}>
      
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3"  controlId="formGroupEmail">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"  value={email} name= 'email' id='email' onChange={handleChange}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control placeholder="John Doe" type="text" value={name} name = 'name' id='name' onChange={handleChange}   />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label htmlFor="number">Number</Form.Label>
        <Form.Control placeholder="999999999" type="number" value={number} name='number' id='number' onChange={handleChange}  />
      </Form.Group>

      <Form.Check
            type="checkbox"
            id="autoSizingCheck"
            className="mb-2"
            label="Remember me"
          />

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
        {/* <form className={styles.main} onSubmit={handleSubmit} >
          <div >
            <label htmlFor="name">Enter your Name </label>
            <input type="text" value={name} name = 'name' id='name' onChange={handleChange} />
          </div>
          <div >
            <label htmlFor="email">Email address</label>
            <input type="email" value={email} name= 'email' id='email' onChange={handleChange}  />
          </div>
          <div >
            <label htmlFor="number" >Number</label>
            <input type="number" value={number} name='number' id='number' onChange={handleChange} />
          </div>
         
        </form> */}
      </main>
    </>
  )
}

export default Contact