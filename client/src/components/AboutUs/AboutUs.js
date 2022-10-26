import React from 'react'
import '../AboutUs/AboutUs.css'
const AboutUs = () => {
  return (
    <div>
      <div className='container-1'>
          <h3>Hello , I am krushna Durole</h3>
          <p>I am student at vit pune , ENTC-2024. </p>
          Reach Out to Me : 
          <div><a href='https://github.com/krushnadurole'>Github</a> </div>
          <div><a href='https://www.linkedin.com/in/krushna-durole-0357931b9/'>linkedin</a></div>
          <div><a href="mailto:krushna.durole20@vit.edu">Email</a></div>
          {/* <div><a href=''>ContactNum</a></div> */}

      </div>
      <div className='container-2'>
        <div>
          <h1>Hello Guys !!!</h1>
          <p>
            WE are here to make a good and wide network of vitians
            so that they Software Developers or any other domain Enginners
            can come up together and build something innovative.
          </p>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  From where this idea I got?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body bd">
                  Actually one day , me and my friend wants to go to a hackathon
                  but for that hackathon we need someone who know blockchain technology very well.
                  and another guy who knows hardware (electronics good enough);

                  But we were not able to find them and end up with not partipating in hackathon.
                  so we were upset because of this .
                  then I though that there should be a platform on which our
                  college developers can showcase their skills through linkedin kind
                  of profile so that whenerver anyone need some help of any technology then
                  he/she can take help from that guy.

                  so if you want to help or get help then  what you are waiting for ?
                  go and sign up and immeadiately create your developer profile.

                  soon we are launching a requirement feature in which any one upload
                  the requirements on the platform. so that developer can also reach to
                  the someone who need his help.
                  its just like
                  thursty person going to river or vice versa
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  Features that are available for you
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body bd">
                  Features List
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  Features that will be avaialbe soon for You
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body bde  ">
                  That's Surpise buddy !!!
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs

