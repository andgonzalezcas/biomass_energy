const CardProfile = ({ name, career, rol, rolFull, image }) => {
  return (
    <div className="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl md:min-w-[36rem] xl:min-w-[40%] xl:max-w-[40%] border-gray-800 bg-gray-900 hover:bg-gray-800">
      <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image ? image : 'https://flowbite.com/docs/images/blog/image-4.jpg'} alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-400">{rol} - {rolFull}</p>
        <p className="mb-3 font-normal text-gray-400">{career}</p>
      </div>
    </div>
  )
}

export default CardProfile