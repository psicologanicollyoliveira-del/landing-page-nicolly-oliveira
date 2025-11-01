import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <Image alt="Nicolly Oliveira" src="/assets/logo_home.png" />
      </div>
      <div>
        <h1>Nicolly Oliveira</h1>
        <p>CRP 08/46175</p>
      </div>
    </div>
  );
};

export default Logo;
