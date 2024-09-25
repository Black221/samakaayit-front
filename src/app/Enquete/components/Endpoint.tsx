import monimage from "../../../assets/Happy.png"



const   Endtpoint = () => (
  <div className="flex flex-col items-center justify-center mt-10">
    <h1 className="mb-8 text-4xl font-bold text-pretty">Nous vous remercions pour votre participation !</h1>
    <p className="text-lg">Vos retours nous aideront à améliorer nos services. </p>
    <img src={monimage} className="w-2/5 bg-cover h-2/5" alt="image"/>
    <a href="/app" className="text-[#00AF41] text-lg border-b border-b-[#00AF41]">Retourner à l’accueil</a>
  </div>
);

export default  Endtpoint;