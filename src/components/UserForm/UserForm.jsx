import React from 'react'

const UserForm = ({ data, updateFieldHandler }) => {
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
            value={data.name || ""}
            onChange={(e) => updateFieldHandler("name", e.target.value)}
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
            value={data.email || ""}
            onChange={(e) => updateFieldHandler("email", e.target.value)}
          />
        </section>
    </section>
  )
}

export default UserForm