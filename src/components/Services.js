  const Services = () => {
    const services = [
      { 
        title: "Analysis", 
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        
      },
      {
        title: "Development",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        
      },
      { 
        title: "Design",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      }
    ]
    return (
      <div className='services'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className='row'>
            {services.map((d) => (
                  <div key={`${d.title}`} className='col-md-4'>
                    
           <div className='service-desc'>
             <img src="/images/image2.png" alt="" className="img-fluid mx-auto d-block"/>
                    
                      <h3>{d.title}</h3>
                      <p>{d.desc}</p>
                       <p>{d.image}</p>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    )
  }
export default Services