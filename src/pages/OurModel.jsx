import img2 from '/img/ModelImg/Untitled1.png'
import img3 from '/img/ModelImg/Untitled2.png'
import img4 from '/img/ModelImg/Untitled3.png'
import img5 from '/img/ModelImg/Untitled4.png'
import img6 from '/img/ModelImg/Untitled5.png'
import img7 from '/img/ModelImg/Untitled6.png'
import img8 from '/img/ModelImg/Untitled7.png'
function OurModel() {
  return (
    <>
      <div className='text-primary font-extrabold text-6xl'>OurModel</div>
      <div>..........................................................</div>
      <p className='text-primary font-extrabold text-3xl'>Todo el codigo y la formalizacion de el modelo utilizado esta en:</p>
      <div>..........................................................</div>
      <a href='https://colab.research.google.com/drive/1YqZFVOKI2qjvX5zC3MPmPN-vt1f4F28q?usp=sharing' className='text-blue-500 font-extrabold text-2xl'>Enlace al colab...</a>
      <div>..........................................................</div>
      <img src={img2}></img>
      <img src={img3}></img>
      <img src={img4}></img>
      <img src={img5}></img>
      <img src={img6}></img>
      <img src={img7}></img>
      <img src={img8}></img>
    </>

  )
}

export default OurModel