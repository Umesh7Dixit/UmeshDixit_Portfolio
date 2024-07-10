import AddResume from "./AddResume";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I&apos;m Umesh Dixit</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          {/* <p className="hero--section-description">

          I’m an enthusiastic B.Tech computer science student with good C, C++, and JavaScript skills. My commitment lies
          in providing practical knowledge in front-end and back-end development. 
            <br /> 
            
            I’ve worked on developing interactive web
          applications with Bootstrap, HTML5, CSS, Next.js, Express.js, and MongoDB among other tech stack components
          </p> */}
        </div>

        <button className="btn btn-primary">
          <AddResume/>
        </button>

      </div>

      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>

    </section>
  );
}
