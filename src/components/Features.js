const Features = () => {
    const features = [
      { 
        title: "Feature", 
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      ]
    return (
      
        <div className='container'>
          <div className='feature-title'>
            <h2>Features</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
            
            <div className="row">
            
            <img src="/images/image3.png" alt="" className="image"></img>
          
          <div className="col-lg-6 col-sm-6 col-xs-12">
            {features.map((d) => (
                  <div key={`${d.title}`} className='feature-text'>
                    
                      <h3>{d.title}</h3>
                      <p>{d.desc}</p>
                      </div>
              ))
              }
              </div>
          </div>
        </div>
      </div>
    )
  }
export default Features