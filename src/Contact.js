function Contact() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <section className='contact-container'>
      <img className="contact-image" src="https://media-exp1.licdn.com/dms/image/C5603AQGVH2neRdC69w/profile-displayphoto-shrink_800_800/0/1585000630069?e=1670457600&v=beta&t=-2pK7hbda6u7HCUsR4aU4_YMh2h5P8c7KatEPMLfosA" width="210" height="210" alt="about"></img>
      <div className="contact-text">
      <h2 className="header"> about me.</h2>
      <p className="text">
        I'm a geographer and computer science student from Berlin, Germany.
        Designing interactive maps within a web framework combines these two disciplines perfectly. <br></br><br></br>
        Since 2021, I am working <a href="https://www.pik-potsdam.de/en" target="_blank"> @Potsdam-Institute for Climate-Impact Research </a> in the UNHCR Sahel project
        as a research assistant where I am contributing in data preprocessing and presentation on our website <a href="http://kfo.pik-potsdam.de//index_en.html?language_id=en" target="_blank"> KlimafolgenOnline</a>.<br></br><br></br>
        I'm keen to dive more into web development frameworks as well as extending my skills in cybersecurity!
      </p>
      </div>
      <div className="button-bontainer">
        <button className="contact-buttons" onClick={() => {
          window.open('mailto:pia.wolffram@yahoo.de')
        }}>EMAIL</button>
        <button className="contact-buttons" onClick={() => {
          openInNewTab('https://github.com/Piviwo');
        }}>GITHUB</button>
        <button className="contact-buttons" onClick={() => {
          openInNewTab('https://www.linkedin.com/in/pia-wolffram-a72986197/');
        }}>LINKED-IN</button>
      </div>
    </section>
  );
}

export default Contact;
