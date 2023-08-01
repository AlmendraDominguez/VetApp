import "./QuienesSomos.css"



const QuienesSomos = () => {
    

  return(
    <>
    {/* <div className="container_quienesSomos"> */}
    <div id="div_img_quienesSomos">

        <div id="img_text_quienesSomos">
          <h1 id="titulo_quienesSomos">Somos Huellitas</h1>

          <p>
                Un centro médico de atención integral para mascotas,
                <br /> donde ofrecemos el servicio de <br />
                "Historia Clínica Digital" para que puedas tener <br/>
                 un registro de todas  las consultas en un solo lugar.<br />
          </p> 
        </div>
    </div>

    <div>
      <h3 className="esp"><img src="./logoBlanco.jpg" className="logoBlanco"/> Quienes nos acompañan <img src="./logoBlanco.jpg" className="logoBlanco"/></h3>

      <div className="cards">
        <div className="card_QuienesSomos">
          <img src="./doc3mod.png" className="card-img-top"/>
          <div className="card-body">
              <h5 className="card-title">Dra. Patricia Hernández</h5>
              <p className="card-text">Oftalmología</p>              
          </div>
        </div>

        <div className="card_QuienesSomos">
          <img src="./doc7mod.png" className="card-img-top"/>
          <div className="card-body">
              <h5 className="card-title">Dr. Nicolás Sáenz</h5>
              <p className="card-text">Clínica Médica</p>              
          </div>
        </div>

        <div className="card_QuienesSomos">
          <img src="./ddd.png" className="card-img-top"/>
          <div className="card-body">
              <h5 className="card-title">Dra. Carla Sevilla</h5>
              <p className="card-text">Neurología</p>              
          </div>
        </div>

        <div className="card_QuienesSomos">
          <img src="./docs.png" className="card-img-top"/>
          <div className="card-body">
              <h5 className="card-title">Dr. Marcos Spina</h5>
              <p className="card-text">Inmunólogo</p>              
          </div>
        </div>

        <div className="card_QuienesSomos">
          <img src="./dddd.png" className="card-img-top"/>
          <div className="card-body">
              <h5 className="card-title">Dra. María Massera</h5>
              <p className="card-text">Endocrinología</p>              
          </div>
        </div>

      </div>

    </div>
{/* </div> */}
</>
  
  )

}



export default QuienesSomos;


