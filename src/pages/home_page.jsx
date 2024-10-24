import React from 'react'

export const HomePage = () => {
  return (
    <div className = 'home-page'>
      <h1 className = 'home-title'>Bienvenido a la Feria del Software Virtual</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic neque quam aliquam id possimus et quasi est at optio. Nam suscipit ducimus doloremque voluptate quo incidunt optio sed vel cupiditate? Atque vitae tenetur facere ipsa omnis vel pariatur expedita, vero repudiandae repellat iste culpa eum possimus autem accusantium magnam earum voluptatum veritatis id? Ratione voluptates quisquam similique porro quaerat saepe magni, amet iusto incidunt, temporibus excepturi ex, tempore possimus molestias reprehenderit? Ratione cum corrupti vel facilis debitis dolorem eligendi molestiae provident hic beatae voluptates maxime deleniti porro tempora unde perferendis, inventore atque earum accusantium consequatur et! Commodi necessitatibus, quos corporis est recusandae soluta itaque, eos labore iste exercitationem vel impedit qui?</p>
      <button onClick={() => window.location.href = '/expositores'}>Ver Expositores</button>

    </div>
  )
}

export default HomePage
