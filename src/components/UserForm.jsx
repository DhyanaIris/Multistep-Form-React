import React from 'react'

const UserForm = () => {
  return (
    <section>
        <section className='form-control'>
          <label htmlFor="name">Nome:</label>
          <input 
            type="text" 
            name="name"
            id="name"
            placeholder="Digite o seu nome"
            required
          />
        </section>
        <section className='form-control'>
          <label htmlFor="name">E-mail:</label>
          <input 
            type="email" 
            name="email"
            id="email"
            placeholder="Digite o seu e-mail"
            required
          />
        </section>
    </section>
  )
}

export default UserForm