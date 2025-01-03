import Image from 'next/image';

const AboutUs = () => {
  return (
    <section id="about" className="bg-black text-white py-16 px-6 lg:px-12">
      <div className="container mx-auto space-y-16">

  
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2">
            <Image 
              src="/images/fitness1.jpg" 
              alt="Salle de sport"
              width={600} 
              height={400} 
              className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-4xl font-extrabold text-yellow-500 animate__animated animate__fadeIn animate__delay-1s">
              À propos de notre salle de sport
            </h2>
            <p className="text-lg leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
              Nous offrons une expérience de fitness moderne et motivante. Que vous soyez débutant ou confirmé, notre salle de sport est équipée pour répondre à tous vos besoins d'entraînement.
            </p>
            <p className="text-lg leading-relaxed animate__animated animate__fadeIn animate__delay-3s">
              Rejoignez notre communauté et bénéficiez de l'accompagnement de nos entraîneurs qualifiés pour atteindre vos objectifs.
            </p>
          </div>
        </div>


        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-4xl font-extrabold text-yellow-500 animate__animated animate__fadeIn animate__delay-1s">
              Nos valeurs et notre approche
            </h2>
            <p className="text-lg leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
              Chez nous, chaque membre est une priorité. Nous offrons des programmes d'entraînement personnalisés et une ambiance conviviale pour vous permettre de vous surpasser.
            </p>
            <p className="text-lg leading-relaxed animate__animated animate__fadeIn animate__delay-3s">
              Notre équipe est là pour vous guider et vous motiver, dans un espace équipé avec des machines de haute qualité.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image 
              src="/images/fitness2.jpg" 
              alt="Équipement de gym" 
              width={600} 
              height={400} 
              className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>

 
        <div className="text-center mt-8">
          <button className="bg-yellow-500 text-black py-3 px-6 text-lg font-semibold transform transition duration-300 hover:scale-105">
            Rejoindre maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
