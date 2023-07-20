import About1 from "../assets/About1.jpg";

import "./about.css";

function About() {
  return (
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={About1} alt="just a pic" />
        </div>
        <div className="about__section-content">
          <h1>Me the newBie ... 👋 Greetings from sunny Morocco! 🇲🇦 </h1>
          <p>
            🙏 My name is Mohamed, and I'm currently undergoing an exciting
            career transition from the world of energy to the captivating realm
            of web development. ⚡️ As a passionate learner and tech enthusiast,
            I am diligently honing my technical skills in a web development
            bootcamp to create innovative web solutions. 💻
          </p>
          <p>
            ✨ The charm of coding has captivated me, and I find joy in crafting
            shiny gadgetry through my projects. 🌐 With a strategic mind like a
            chess player, I strive to build thoughtful and efficient web
            applications that meet users' needs. 🧩
          </p>
          <p>
            ⚡️ In my past life, I was immersed in the energy sector, and now,
            I'm embracing my newfound love for technology, seeking to make a
            positive impact through web development. 🎓
          </p>
          <p>
            🌟 I'm excited to embark on this journey of continuous learning and
            growth, driven by my passion for web development. My mission is to
            create solutions that not only solve problems but also leave a
            positive mark in the digital world. 💡
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
