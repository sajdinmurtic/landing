const Testimonials = () => {
    const testimonials = [
      { 
        title: "John Doe", 
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      
      },
      {
        title: "John Doe",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        title: "John Doe",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
    
    ]
    return (
      
        <div className='container'>
          <div className='section-title'>
            <h2 className="test-title">Testimonials</h2>
             </div>
          <div className='row'>
            {testimonials.map((d) => (
                  <div key={`${d.title}`} className='col-md-4'>
                    
                  <div className='test-desc'>
                    <img src="/images/image4.png" alt="" className="img-fluid mx-auto d-block"/>
                      <h3>{d.title}</h3>
                      <p>{d.desc}</p>
                      
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
    
    )
  }
export default Testimonials