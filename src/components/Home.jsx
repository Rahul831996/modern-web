import React from 'react'
import vg from '../images/2.png'
import  { 
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook
} from "react-icons/ai"

const Home = () => {
  return (
    <> 
          <div className="home" id='home'>
            <main>
                <h1>techtack</h1>
                <p>Provide solution to all kind tech startups</p>
            </main>
          </div>

          <div className="home2">
            <img src={vg} alt="graphics" />
            <div>
                <p>
                    we are one and only solution to the tech problems you face
                    every day. we are leading tech giant whose aim is to solve the problems you facing today, work with us and do improments in tech.
                </p>
            </div>
          </div>
          <div className="home3" id='about'>           
            <div>
            <h1>who we are?</h1> 
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus totam maiores at dolores dicta in fuga labore. Perspiciatis ratione similique quisquam inventore unde accusamus ipsa obcaecati, earum perferendis soluta explicabo omnis molestiae alias est blanditiis, veniam fugiat? Corrupti quos reiciendis nam laborum ipsam quisquam eius ab nemo dolor quasi quia aperiam, ex et explicabo minus culpa consequatur modi.</p>
            </div>
          </div>

          <div className="home4" id='brands'>
            <div>
              <h1>Brands</h1>

              <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>

                <div style={{animationDelay:"0.6s"}}>
                    <AiFillAmazonCircle />
                    <p>Amazone</p>
                </div>

                <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube />
                    <p>YouTube</p>
                </div>

                <div style={{animationDelay:"0.1s"}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>

                <div style={{animationDelay:"0.5s"}}>
                    <AiFillFacebook />
                    <p>Facebook</p>
                </div>
              </article>
            </div>
          </div>
    </>
  )
}

export default Home;