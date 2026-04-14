import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, GraduationCap, School, BookOpen, ArrowUp } from 'lucide-react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) { link.href = '/favicon.ico.png'; }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_na7yw09', 'template_t3wod2t', form.current, 'vkmWxfA5zjiReoaLH')
      .then(() => {
          setIsSent(true);
          setTimeout(() => setIsSent(false), 5000);
          e.target.reset();
      }, (err) => {
          console.error("FAILED...", err);
          alert("Email failed to send."); 
      });
  };

  const animations = {
    left: { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.8 } } },
    right: { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.8 } } },
    pop: { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 120 } } },
    slideUp: { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } }
  };

  

  return (
    <div id="home" style={{ backgroundColor: '#050505', color: 'white', minHeight: '100vh', overflowX: 'hidden' }}>
      <motion.div style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: '5px', backgroundColor: '#00f2ff', zIndex: 3000, transformOrigin: "0%" }} />

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top py-3" style={{ backdropFilter: 'blur(15px)', background: 'rgba(5,5,5,0.7)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container">
          <a className="navbar-brand fw-bold text-white fs-3" href="#home">SABIR<span className="text-info">.</span>ALI</a>
          <div className="d-none d-md-block">
            <ul className="navbar-nav gap-4 mx-auto">
              {['About', 'Education', 'Experience', 'Projects', 'Contact'].map(item => (
                <li key={item}><a className="nav-link text-white small tracking-widest fw-bold nav-hover" href={`#${item.toLowerCase()}`}>{item.toUpperCase()}</a></li>
              ))}
            </ul>
          </div>
          <a href="#contact" className="btn btn-info rounded-pill px-4 fw-bold shadow-sm">HIRE ME</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="vh-100 d-flex align-items-center container pt-5">
        <div className="row w-100 align-items-center">
            <motion.div initial="hidden" animate="visible" variants={animations.left} className="col-lg-8">
                <h6 className="text-info fw-bold mb-3 tracking-widest">MERN STACK SPECIALIST</h6>
                <h1 className="display-1 fw-bold mb-4" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 0.85 }}>
                    SABIR ALI<br/><span className="text-info">CODE. DESIGN. DOMINATE.</span>
                </h1>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={animations.pop} className="col-lg-4 text-center">
                <div className="position-relative d-inline-block">
                    <div style={{ position: 'absolute', inset: '-10px', background: 'linear-gradient(45deg, #00f2ff, transparent)', borderRadius: '30px', filter: 'blur(20px)', opacity: 0.3 }}></div>
                    <img src="/favicon.ico.png" alt="Sabir Ali" className="img-fluid shadow-lg" style={{ width: '300px', height: '350px', objectFit: 'cover', borderRadius: '30px', border: '2px solid rgba(0, 242, 255, 0.3)', position: 'relative', zIndex: 1 }} />
                </div>
            </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animations.pop} className="p-5 rounded-5" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 className="display-5 fw-bold mb-4">What Makes Me Unique?</h2>
          <p className="text-secondary lead">
            Learning <strong>Mobile Apps and .NET</strong> gave me a deep understanding of software logic that many web developers lack. I bridge the gap between complex backend logic and pixel-perfect <strong>MERN Stack</strong> visuals.
          </p>
          <div className="d-flex flex-wrap gap-2 mt-4">
            {['MongoDB', 'Express', 'React', 'Node', 'HTML5', 'CSS3', 'JS','Mysql','SQL','C','C++','C#'].map(skill => (
              <span key={skill} className="badge border border-info px-3 py-2 rounded-pill text-info">{skill}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section (Original Layout & Animations Preserved) */}
      <section id="education" className="py-5 container">
        <motion.h2 initial="hidden" whileInView="visible" variants={animations.left} className="display-4 fw-bold mb-5">Education</motion.h2>
        <div className="row g-4">
          {[
            { title: "Matriculation", place: "Ghulaman-Abbas School", icon: <School size={30}/> },
            { title: "Interculation", place: "Habib Public High School", icon: <School size={30}/> },
            { title: "Bachelor's (BSCS)", place: "Salim Habib University", icon: <GraduationCap size={30}/>, tag: "Ongoing" },
            { title: "Diploma (3-Year)", place: "Aptech Pakistan", icon: <BookOpen size={30}/> }
          ].map((edu, i) => (
            <div key={i} className="col-md-6 col-lg-3">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={animations.pop} className="p-4 h-100 rounded-4 border border-secondary" style={{ background: 'rgba(255,255,255,0.01)' }}>
                <div className="text-info mb-3">{edu.icon}</div>
                <h5 className="fw-bold">{edu.title}</h5>
                <p className="small text-secondary">{edu.place}</p>
                {edu.tag && <span className="badge bg-info text-dark small">{edu.tag}</span>}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
      {/* Experience Section */}
<section id="experience" className="py-5 container">
  <motion.h2 
    initial="hidden" 
    whileInView="visible" 
    variants={animations.left} 
    className="display-4 fw-bold mb-5"
  >
    Experience
  </motion.h2>

  <motion.div 
    initial="hidden" 
    whileInView="visible" 
    variants={animations.slideUp} 
    className="p-5 rounded-5 position-relative overflow-hidden"
    style={{ 
      background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(0,0,0,0.6))', 
      border: '1px solid rgba(255,255,255,0.12)',
      backdropFilter: 'blur(12px)'
    }}
  >

    {/* Glow Effect */}
    <div style={{
      position: 'absolute',
      top: '-50px',
      right: '-50px',
      width: '200px',
      height: '200px',
      background: '#00f2ff',
      filter: 'blur(120px)',
      opacity: 0.12
    }}></div>

    <h4 className="text-info fw-bold mb-3">💼 Trainee Developer</h4>

    <p className="text-secondary lead">
      Worked as a <strong>Trainee Developer at CISPL Software House</strong> for one month, 
      where I gained hands-on experience in real-world development environments, 
      collaborated on projects, and strengthened my understanding of professional workflows.
    </p>

    <ul className="text-secondary mt-4">
      <li>Assisted in developing and maintaining web applications</li>
      <li>Worked with modern development tools and frameworks</li>
      <li>Improved debugging and problem-solving skills</li>
      <li>Learned industry-level coding practices and teamwork</li>
    </ul>

  </motion.div>
</section>
{/* Projects Section */}
<section id="projects" className="py-5 container">
  <motion.h2 
    initial="hidden" 
    whileInView="visible" 
    variants={animations.left} 
    className="display-4 fw-bold mb-5"
  >
    Projects & Experience
  </motion.h2>

  <motion.div 
    initial="hidden" 
    whileInView="visible" 
    variants={animations.slideUp} 
    className="p-5 rounded-5 position-relative overflow-hidden"
    style={{ 
      background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(0,0,0,0.6))', 
      border: '1px solid rgba(255,255,255,0.12)',
      backdropFilter: 'blur(12px)'
    }}
  >

    {/* Glow Effect */}
    <div style={{
      position: 'absolute',
      top: '-60px',
      right: '-60px',
      width: '250px',
      height: '250px',
      background: '#00f2ff',
      filter: 'blur(140px)',
      opacity: 0.12
    }}></div>

    {/* Featured */}
    <div className="mb-5">
      <h4 className="text-info fw-bold mb-3"> Featured Project</h4>

      <p className="text-secondary lead">
        Developed a <strong>production-ready MERN Stack E-Commerce Jewelry Platform</strong> 
        engineered with scalable architecture and modern UI/UX. The application includes 
        advanced features such as dynamic product management, optimized cart logic, and 
        secure <strong>Stripe payment gateway integration</strong> — delivering a complete 
        real-world online shopping experience.
      </p>
    </div>

    <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

    {/* Frontend Work */}
    <div className="my-5">
      <h4 className="text-info fw-bold mb-3"> Frontend E-Commerce Experience</h4>

      <p className="text-secondary lead">
        Built <strong>multiple responsive e-commerce websites using HTML, CSS, and JavaScript</strong>, 
        focusing on performance, accessibility, and user-centered design. These projects strengthened 
        my expertise in crafting smooth user journeys, clean UI systems, and real-world business logic 
        implementation.
      </p>
    </div>

    <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

    {/* Ongoing */}
    <div className="mt-5">
      <h4 className="text-info fw-bold mb-3"> Ongoing Development</h4>

      <p className="text-secondary  lead">
        Currently developing a <strong>Hotel Management System</strong>, focused on building a 
        scalable and efficient booking platform with clean architecture, optimized backend logic, 
        and a seamless user experience.
      </p>
    </div>

  </motion.div>
</section>  
      {/* Contact Section */}
      <section id="contact" className="py-5 container mb-5">
        <div className="row g-5">
          <motion.div initial="hidden" whileInView="visible" variants={animations.left} className="col-lg-5">
            <h2 className="display-3 fw-bold">Let's Talk.</h2>
            <div className="mt-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="p-3 rounded-circle bg-dark border border-info"><Mail className="text-info" /></div>
                <span className="fw-bold fs-5">ssabiralii110@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" variants={animations.right} className="col-lg-7">
            <form ref={form} onSubmit={sendEmail} className="p-5 rounded-5" style={{ background: '#0a0a0a', border: '1px solid #1a1a1a' }}>
              <input type="text" name="user_name" placeholder="Name" className="form-control custom-input mb-4" required />
              <input type="email" name="user_email" placeholder="Email" className="form-control custom-input mb-4" required />
              <textarea name="message" rows="5" placeholder="Project Details" className="form-control custom-input mb-4" required></textarea>
              <button type="submit" className="btn btn-info w-100 py-3 fw-bold">
                {isSent ? "SENT SUCCESSFULLY!" : "SEND MESSAGE"}
              </button>
            </form>
          </motion.div>
        </div>  
      </section>

      {/* IMPROVED FOOTER SECTION */}
      <footer className="pt-5 pb-4 border-top border-secondary" style={{ background: '#050505' }}>
        <div className="container">
          <div className="row gy-4 mb-5">
            <div className="col-lg-4">
              <a className="fw-bold text-white fs-3 text-decoration-none" href="#home">SABIR<span className="text-info">.</span>ALI</a>
              <p className="text-secondary mt-3 text-white pe-lg-5">Crafting scalable MERN stack solutions with a focus on high-performance logic and clean design.</p>
              <div className="d-flex gap-3  mt-4">
                <a href="#" className="footer-social-link"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/sabir-ali-b16ba32a7/" className="footer-social-link"><Linkedin size={20} /></a>
                <a href="mailto:ssabiralii110@gmail.com" className="footer-social-link"><Mail size={20} /></a>
              </div>
            </div>
            <div className="col-6 col-lg-2 offset-lg-2">
              <h6 className="fw-bold text-white mb-4">Quick Links</h6>
              <ul className="list-unstyled">
                {['About', 'Education', 'Projects', 'Contact'].map(link => (
                  <li key={link} className="mb-2"><a href={`#${link.toLowerCase()}`} className="text-secondary  text-white text-decoration-none footer-nav-link">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-lg-3 text-white ">
              <h6 className="fw-bold text-white mb-4">Contact Info</h6>
              <p className="text-secondary  mb-2 text-white small">Karachi, Pakistan</p>
              <p className="text-secondary mb-0  text-white small">ssabiralii110@gmail.com</p>
            </div>
            <div className="col-12 col-lg-1 text-lg-end">
              <a href="#home" className="btn btn-outline-info rounded-circle p-3 scroll-up">
                <ArrowUp size={20} />
              </a>
            </div>
          </div>
          
        </div>
      </footer>

      <style>{`
        .custom-input { background: transparent !important; border: 1px solid #333 !important; color: white !important; padding: 15px !important; border-radius: 10px !important; }
        .custom-input::placeholder { color: #888 !important; }
        .custom-input:focus { border-color: #00f2ff !important; box-shadow: 0 0 10px rgba(0, 242, 255, 0.2) !important; outline: none; }
        .footer-social-link { color: #666; transition: 0.3s ease; }
        .footer-social-link:hover { color: #00f2ff; transform: translateY(-3px); }
        .footer-nav-link:hover { color: #00f2ff !important; padding-left: 5px; transition: 0.3s; }
        .nav-hover:hover { color: #00f2ff !important; transition: 0.3s; }
        .scroll-up:hover { background: #00f2ff !important; color: black !important; border-color: #00f2ff !important; }
      `}</style>
    </div>
  );
};

export default App;

