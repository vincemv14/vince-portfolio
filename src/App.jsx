import React, { useState } from 'react';
import './App.css';
import heroImage from './assets/01_VINCE VILLANUEVA.JPG';
import kumpasImg from './assets/projects/kumpas.png';
import refreshImg from './assets/projects/refresh.png';
import safespaceImg from './assets/projects/safespace.png';
import rcyImg from './assets/projects/rcy.png';
import dailycheckImg from './assets/projects/dailycheck.png';
import homecreditImg from './assets/projects/homecredit.png';
import hcpowerbiImg from './assets/projects/hcpowerbi.png';
import paymentpowerbiImg from './assets/projects/paymentpowerbi.png';
import unsdnImg from './assets/arts/unsdn.png';
import anilagImg from './assets/arts/anilag.png';
import foiImg from './assets/arts/foi.png';
import tsinelasImg from './assets/arts/tsinelas.png';
import muralImg from './assets/arts/mural.png';
import skfedImg from './assets/arts/skfed.jpg';
import youthweekImg from './assets/arts/youthweek.jpg';
import gradImg from './assets/achievements/grad.jpg';
import mostoutstandingImg from './assets/achievements/mostoutstanding.jpg';
import studentexcellenceImg from './assets/achievements/studentexcellence.jpg';
import dangalnigattayawImg from './assets/achievements/dangalnigattayaw.jpg';
import yearrepImg from './assets/achievements/yearrep.jpg';
import samsungcreateImg from './assets/events/samsungcreate.jpg';
import startupImg from './assets/events/startup.png';
import iotconImg from './assets/events/iotcon.png';
import bethesparkImg from './assets/events/bethespark.png';
import sosconImg from './assets/events/soscon.png';
import vballImg from './assets/events/vball.jpg';
import skImg from './assets/events/sk.png';
import redcrossImg from './assets/events/redcross.jpg';

function App() {
  const [activeTab, setActiveTab] = useState('tech');
  const [selectedProject, setSelectedProject] = useState(null);

const tsinelasDetail = {
    title: "22nd Liliw Tsinelas Festival",
    vision: "Highlighting local tourism and the vibrant spirit of the youth through 'Liliw sa Makabagong Panahon'. This piece bridges the gap between the rich heritage of Liliw and rapid modernization.",
    elements: ["Cultural Heritage", "Youth Leadership", "Traditional Craftsmanship"],
    quote: "Isang pagpupugay sa sining at kultura ng ating bayan."
  };

const muralDetail = {
    title: "Liliw Mural Attraction",
    vision: "Glad to be part of Liliw first Mural Attraction showcasing Liliw artist expertise",
    elements: ["Cultural Heritage", "Youth Leadership", "Traditional Craftsmanship"],
    quote: "Isang pagpupugay sa sining at kultura ng ating bayan."
  };

const skfedDetail = {
    title: "Liliw SK Federation Digital Art Competition 2024",
    vision: "Glad to be part of Liliw first Mural Attraction showcasing Liliw artist expertise",
    elements: ["Cultural Heritage", "Youth Leadership", "Traditional Craftsmanship"],
    quote: "Isang pagpupugay sa sining at kultura ng ating bayan."
  };

  return (
    <div className="portfolio-container">
      <header className="hero-header">
        <img src={heroImage} alt="Vince Villanueva" className="profile-pic" />
        <h1>Vince M. Villanueva</h1>
        <p className="subtitle">Data Analyst | Project Manager | UX Designer | Digital Artist</p>
        
        <div className="nav-buttons">
          <button onClick={() => setActiveTab('tech')} className={activeTab === 'tech' ? 'active' : ''}>Technical Projects</button>
          <button onClick={() => setActiveTab('art')} className={activeTab === 'art' ? 'active' : ''}>Bins Art Gallery</button>
          <button onClick={() => setActiveTab('events')} className={activeTab === 'events' ? 'active' : ''}>Events Attended</button>
          <button onClick={() => setActiveTab('achievements')} className={activeTab === 'achievements' ? 'active' : ''}>Achievements</button>
        </div>
      </header>

      <main className="content-area">
        
        {/* Technical Projects Section */}
        {activeTab === 'tech' && (
          <div className="project-section">
            <h2 className="section-title">Core Projects</h2>
            
            <div className="project-card horizontal">
              <img src={kumpasImg} alt="Kumpas Project" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Kumpas</h3>
                <p className="role-tag">Lead UI/UX Designer</p>
                <p>Tasked with designing the Kumpas website to highlight key features and provide an overview of the application tailored for the deaf community.</p>
              </div>
            </div>

            <div className="project-card horizontal">
              <img src={refreshImg} alt="Refresh Project" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Refresh</h3>
                <p className="role-tag">IOT Data Analyst and UI/UX Designer</p>
                <p>Led the end-to-end development of an IoT-based solution to monitor food spoilage, integrating computer vision, mobile app features, and user-centered design.</p>
              </div>
            </div>

            <div className="project-card horizontal">
              <img src={dailycheckImg} alt="Daily Check Project" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Daily Check</h3>
                <p className="role-tag">UI/UX Designer</p>
                <p>Developed an intuitive and visually consistent mobile interface that enhances student engagement, attendance monitoring, communication, and overall user experience.</p>
              </div>
            </div>

            <div className="project-card horizontal">
              <img src={safespaceImg} alt="Safe Space Project" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Safe Space</h3>
                <p className="role-tag">UI/UX Developer</p>
                <p>Created a user-centered interface that promotes mental wellness through intuitive navigation, mood tracking, community interaction, and a safe digital environment for self-expression.</p>
              </div>
            </div>

            <div className="project-card horizontal">
              <img src={rcyImg} alt="Red Cross Project" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Red Cross Youth</h3>
                <p className="role-tag">UI/UX Developer</p>
                <p>Design and implement intuitive digital interfaces to streamline volunteer management, scheduling, and reporting for humanitarian impact.</p>
              </div>
            </div>

            <div className="project-card horizontal">
              <img src={paymentpowerbiImg} alt="Payment Analytics Project" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Payment Analytics Power Bi</h3>
                <p className="role-tag">Business Analyst and Power Bi Developer</p>
                <p>Built a Power BI payment analytics dashboard focused on Environment 1 campaigns, visualizing total payments, payment distribution per bank and touchpoints (SMS, Calls, Email), and daily payment trends through interactive charts and reports.</p>
              </div>
            </div>

            <div className="project-card horizontal">
              <img src={homecreditImg} alt="Home Credit Project" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Home Credit</h3>
                <p className="role-tag">Full-Stack Product Engineer</p>
                <p>I acted as the End-to-End Developer. I designed the user experience and interface to ensure financial data was easy to read, then built the entire web application. I also set up the cloud infrastructure on Supabase to handle large data imports, ensuring that the system could automatically process and visualize complex payment metrics in real-time.</p>
              </div>
            </div>

            <div className="project-card horizontal">
              <img src={hcpowerbiImg} alt="HC POWER BI Project" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Home Credit Power BI</h3>
                <p className="role-tag">Data Analyst and Power Bi Developer</p>
                <p>Developed an interactive Microsoft Power BI dashboard for Home Credit analytics featuring PTP amount monitoring, slicers, bar and line charts, and multi-page reporting to analyze collection performance and trends.</p>
              </div>
            </div>
          </div>
        )}

        {/* ART GALLERY*/}
{activeTab === 'art' && (
  <div className="art-grid">
    <h2 className="section-title">Sari-Saring Sining ni Bins</h2>
    
    {/* TSINELAS FESTIVAL */}

    <div className="project-card horizontal">
      <img src={tsinelasImg} alt="Tsinelas Art" className="project-img-thumb" />
      <div className="project-info-horizontal">
        <h3>22nd Liliw Tsinelas Festival</h3>
        <p className="role-tag">3rd Place | April 30, 2026</p>
        <p>Won 3rd place with "Liliw sa Makabagong Panahon," highlighting local tourism and the vibrant spirit of the youth.</p>
        
        <div className="project-links">
          {/* Change this link to a button to trigger the state */}
          <button 
            onClick={() => setSelectedProject(tsinelasDetail)} 
            className="text-link-btn"
          >
            See Full Description
          </button>

          <span className="separator"> | </span>
          <a href="https://www.facebook.com/share/v/1LvDkKLiti/" target="_blank" rel="noreferrer" className="text-link">
            View on Facebook
          </a>
        </div>
      </div>
    </div>
          
          {/* SK FED */}

            <div className="project-card horizontal">
              <img src={skfedImg} alt="SK FED Art" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>SK Federation Competition</h3>
                <p className="role-tag">Champion</p>
                <p>Awarded Champion for digital poster design promoting community involvement and youth leadership.</p>

                <div className="project-links">
          {/* Change this link to a button to trigger the state */}
          <button 
            onClick={() => setSelectedProject(skfedDetail)} 
            className="text-link-btn"
          >
            See Full Description
          </button>

          <span className="separator"> | </span>
          <a href="https://www.facebook.com/SKFEDERATIONLILIW/posts/pfbid02xMfk4wrNozELNm3eMssDi5MUzhY6XGK2RcgkRFuomjD7E4Et3AtNfgMABkoAiesMl" target="_blank" rel="noreferrer" className="text-link">
            View on Facebook
          </a>
        </div>
              </div>
            </div>

          {/* LILIW MURAL */}
            <div className="project-card horizontal">
              <img src={muralImg} alt="Liliw Mural Art" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Liliw Community Mural</h3>
                <p className="role-tag">Mural Artist</p>
                <p>Collaborated on a large-scale traditional mural project representing the cultural heritage of Liliw, Laguna.</p>
              
              <div className="project-links">
          {/* Change this link to a button to trigger the state */}
          <button 
            onClick={() => setSelectedProject(muralDetail)} 
            className="text-link-btn"
          >
            See Full Description
          </button>

          <span className="separator"> | </span>
          <a href="https://www.facebook.com/MayorIdeMonleon/posts/pfbid0quWt3q2fecWMxqKKPiM2NFZyTVvUigbuTa6TbwV2uWwkzZFbCzQoJga7y5m72U2ol" target="_blank" rel="noreferrer" className="text-link">
            View on Facebook
          </a>
        </div>
      </div>
      </div>

            <div className="project-card horizontal">
              <img src={unsdnImg} alt="UNSDN Art" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>United Nations Digital Art Competition</h3>
                <p className="role-tag">National Participant</p>
                <p>My artwork, "Tagpi-tagping Tagumpay," visualizes progress as a collective tapestry where sectors like agriculture and technology intersect to form a unified future.

It represents the idea that our individual efforts are "patches" of a larger picture, proving that true regional success is only achieved when every community is woven into the story.</p>
              
              <div className="project-links">
          {/* Change this link to a button to trigger the state */}
          <button 
            onClick={() => setSelectedProject(skfedDetail)} 
            className="text-link-btn"
          >
            See Full Description
          </button>

          <span className="separator"> | </span>
          <a href="https://www.facebook.com/photo/?fbid=1315217263983365&set=a.488074903364276" target="_blank" rel="noreferrer" className="text-link">
            View on Facebook
          </a>
        </div>
      </div>
     </div>

            <div className="project-card horizontal">
              <img src={anilagImg} alt="Liliw Mural Art" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Anilag 2026 Logo Making Contest</h3>
                <p className="role-tag">Participant</p>
                <p>My logo uses the iconic Philippine jeepney to symbolize Laguna’s hospitality and its vibrant role as a major hub for world-class trade and tourism. It visualizes the province as an inviting journey, weaving together our famous local products and landmark destinations into a single, unified celebration of "Lagunense" pride.</p>
              
              <div className="project-links">
          {/* Change this link to a button to trigger the state */}
          <button 
            onClick={() => setSelectedProject(skfedDetail)} 
            className="text-link-btn"
          >
            See Full Description
          </button>

          <span className="separator"> | </span>
          <a href="https://www.facebook.com/photo/?fbid=33162463306731084&set=a.26678460445131435" target="_blank" rel="noreferrer" className="text-link">
            View on Facebook
          </a>
        </div>
      </div>
    </div>

            <div className="project-card horizontal">
              <img src={foiImg} alt="Liliw Mural Art" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>FOI Philippines Digital Art Competition</h3>
                <p className="role-tag">National Participant</p>
                <p>In my digital poster, I portray freedom of information as a radiant light bulb that dispels the darkness of fake news and misinformation. It serves as a visual reminder that "Katotohanan ay Kalayaan", empowering every citizen to stay informed and connected through transparent access to the truth.</p>
              
              <div className="project-links">
          {/* Change this link to a button to trigger the state */}
          <button 
            onClick={() => setSelectedProject(skfedDetail)} 
            className="text-link-btn"
          >
            See Full Description
          </button>

          <span className="separator"> | </span>
          <a href="https://www.facebook.com/photo/?fbid=1465750860468376&set=a.1465796527130476" target="_blank" rel="noreferrer" className="text-link">
            View on Facebook
          </a>
        </div>
      </div>
    </div>

            <div className="project-card horizontal">
              <img src={youthweekImg} alt="Liliw Mural Art" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Liliw Youth Week Painting Competition</h3>
                <p className="role-tag">Champion</p>
                <p>My artwork for Youth Week '21, which earned 1st place, serves as a call to action for the youth to champion both human and planetary health through sustainable habits like recycling and conservation. It emphasizes that our collective efforts in environmental stewardship are vital</p>
              
              <div className="project-links">
          {/* Change this link to a button to trigger the state */}
          <button 
            onClick={() => setSelectedProject(skfedDetail)} 
            className="text-link-btn"
          >
            See Full Description
          </button>

          <span className="separator"> | </span>
          <a href="https://www.facebook.com/photo/?fbid=2909061779354304&set=a.282195163906474" target="_blank" rel="noreferrer" className="text-link">
            View on Facebook
          </a>
        </div>
      </div>
    </div>
  </div>
        )}

        {/* EVENTS Section */}
        {activeTab === 'events' && (
          <div className="events-grid">
            <h2 className="section-title">Major Milestones</h2>
            
            <div className="project-card horizontal">
              <img src={samsungcreateImg} alt="Graduation" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Samsung Create: Ideate to Elevate</h3>
                <p className="role-tag">National Participant</p>
                <p>Representing PLM in the Samsung Create National Ideathon and our pride to bring the Deaf Filipino community to the national stage. Through our project, we aimed to show that the community deserves to be heard and that promoting Filipino Sign Language is a vital investment in an inclusive future.</p>
              
              <div className="project-links">
          {/* Change this link to a button to trigger the state */}
          <button 
            onClick={() => setSelectedProject(skfedDetail)} 
            className="text-link-btn"
          >
            See Full Description
          </button>

          <span className="separator"> | </span>
          <a href="https://www.facebook.com/vince.villanueva.355/posts/pfbid02DeZjJ2xHXk7TQ4GJ3WvVpAeKUyiQEaXszQfa6qZMve9gDnzYVshscC1xnAzMNTLJl" target="_blank" rel="noreferrer" className="text-link">
            View on Facebook
          </a>
        </div>
      </div>
    </div>

            <div className="project-card horizontal">
              <img src={startupImg} alt="Student Excellence" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>DICT NCR Philippine Startup 9</h3>
                <p className="role-tag">Participant and Top 6</p>
                <p>We elevate the Deaf community to a regional stage through our project, "Kumpas". By reaching the Top 15 in the Philippine Startup Challenge 9, we aim to champion Filipino Sign Language and demonstrate the business potential of inclusive, accessible technology.</p>
              <div className="project-links">
          {/* Change this link to a button to trigger the state */}
          <button 
            onClick={() => setSelectedProject(skfedDetail)} 
            className="text-link-btn"
          >
            See Full Description
          </button>

          <span className="separator"> | </span>
          <a href="https://www.facebook.com/vince.villanueva.355/posts/pfbid0fWgAy6tj3mXtatuqxUY5wCjZn8DXTDu5q71HyCQgk3rGy5kn1tchH5ipL9Bd3uALl" target="_blank" rel="noreferrer" className="text-link">
            View on Facebook
          </a>
        </div>
      </div>
    </div>

            <div className="project-card horizontal">
              <img src={iotconImg} alt="Student Excellence" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Internet of Things Conference</h3>
                <p className="role-tag">Volunteer Organizer</p>
                <p>Volunteered at the IoT Conference 2024, I contributed to the production and partnership teams to highlight the intersection of cloud technology and sustainable IoT education.</p>
              <div className="project-links">
          {/* Change this link to a button to trigger the state */}
          <button 
            onClick={() => setSelectedProject(skfedDetail)} 
            className="text-link-btn"
          >
            See Full Description
          </button>

          <span className="separator"> | </span>
          <a href="https://www.facebook.com/AWSCloudClubHaribon/posts/pfbid02Ey1gh8udEKHB6CrhMjWiNSs3Gxabgxwrh49BPQAwNZ5wwg776iq5qEWcYBDc3f9Ml" target="_blank" rel="noreferrer" className="text-link">
            View on Facebook
          </a>
        </div>
      </div>
    </div>

            <div className="project-card horizontal">
              <img src={bethesparkImg} alt="Student Excellence" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Be The Spark: Leadership Camp</h3>
                <p className="role-tag">Computer Engineering Representative</p>
                <p>My leadership training at the Riverview Resort focused on refining my "Head, Heart, and Hands" to better serve the PLM community. Through collaborative workshops, I strengthened my ability to lead with both integrity and excellence as a student representative.</p>
              <div className="project-links">
          {/* Change this link to a button to trigger the state */}
          <button 
            onClick={() => setSelectedProject(skfedDetail)} 
            className="text-link-btn"
          >
            See Full Description
          </button>

          <span className="separator"> | </span>
          <a href="https://www.facebook.com/angpamantasan/posts/pfbid0M9LBi5TEoUy8XSj6gg67Pp588JXF32b6BMjTGHLvupLMPAsv6MjvS24ucYX4zk1al" target="_blank" rel="noreferrer" className="text-link">
            View on Facebook
          </a>
        </div>
      </div>
    </div>

            <div className="project-card horizontal">
              <img src={sosconImg} alt="Student Excellence" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Samsung Open Source Conference</h3>
                <p className="role-tag">Event Participant</p>
                <p>Attended the SOSCON 2025 and 2026 and understanding the value of Open Source projects</p>
              </div>
            </div>

            <div className="project-card horizontal">
              <img src={vballImg} alt="Student Excellence" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>PLM College of Engineering Volleyball</h3>
                <p className="role-tag">Varsity Player</p>
                <p>Played as varsity player and represent College of Engineering during the Intramurals 2024</p>
              <div className="project-links">
          {/* Change this link to a button to trigger the state */}
          <button 
            onClick={() => setSelectedProject(skfedDetail)} 
            className="text-link-btn"
          >
            See Full Description
          </button>

          <span className="separator"> | </span>
          <a href="https://www.facebook.com/photo/?fbid=122121547514365063&set=a.122102576192365063" target="_blank" rel="noreferrer" className="text-link">
            View on Facebook
          </a>
        </div>
      </div>
    </div>

            <div className="project-card horizontal">
              <img src={skImg} alt="Student Excellence" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Sangguniang Kabataan ng San Isidro</h3>
                <p className="role-tag">Leadership Seminar Guest Speaker</p>
                <p>During the 2nd Katipunan ng Kabataan Assembly, I led a leadership training session focused on empowering my fellow youth. As an SK Kagawad, my role was to facilitate growth and inspire active participation within our community</p>
              
              <div className="project-links">
          {/* Change this link to a button to trigger the state */}
          <button 
            onClick={() => setSelectedProject(skfedDetail)} 
            className="text-link-btn"
          >
            See Full Description
          </button>

          <span className="separator"> | </span>
          <a href="https://www.facebook.com/sksanisidroliliw/posts/pfbid02DAcBJ9jysKfsX6ByZfmHss1YqAHgXCd2JH9tiNTsvbCXy6S7sWoDQtaSuSY4wW8Fl" target="_blank" rel="noreferrer" className="text-link">
            View on Facebook
          </a>
        </div>
      </div>
    </div>

            <div className="project-card horizontal">
              <img src={redcrossImg} alt="Student Excellence" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Philippine Red Cross Marikina Chapter</h3>
                <p className="role-tag">Youth Volunteer Instructor</p>
                <p>I co-led the formation course and investiture for over 80 participants in Marikina City. My goal was to foster a space where elementary students could experience the joy of learning while gaining essential knowledge in volunteerism and humanitarian service.</p>
              
              <div className="project-links">
          {/* Change this link to a button to trigger the state */}
          <button 
            onClick={() => setSelectedProject(skfedDetail)} 
            className="text-link-btn"
          >
            See Full Description
          </button>

          <span className="separator"> | </span>
          <a href="https://www.facebook.com/vince.villanueva.355/posts/pfbid0KEA1SzmmZW6o9J2HfWFLTdkQfE8cn7NR1faa48FGAfG9sT2D2sg3kfQBZusSUmHtl" target="_blank" rel="noreferrer" className="text-link">
            View on Facebook
          </a>
        </div>
              </div>
            </div>
          </div>
        )}

        {/* Achievements Section */}
        {activeTab === 'achievements' && (
          <div className="achievements-grid">
            <h2 className="section-title">Major Milestones</h2>
            
            <div className="project-card horizontal">
              <img src={gradImg} alt="Graduation" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>BS Computer Engineering</h3>
                <p className="role-tag">Magna Cum Laude</p>
                <p>Graduated with latin honors from Pamantasan ng Lungsod ng Maynila.</p>
              </div>
            </div>

            <div className="project-card horizontal">
              <img src={studentexcellenceImg} alt="Student Excellence" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Student Excellence Awardee</h3>
                <p className="role-tag">University-wide Recognition</p>
                <p>Awarded as the Student Excellence Awardee from the College of Engineering, a university recognition.</p>
              </div>
            </div>

            <div className="project-card horizontal">
              <img src={mostoutstandingImg} alt="Student Excellence" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Student Excellence Awardee</h3>
                <p className="role-tag">University-wide Recognition</p>
                <p>Recognized as the Most Outstanding Engineering Student in the College of Engineering.</p>
              </div>
            </div>

            <div className="project-card horizontal">
              <img src={yearrepImg} alt="Student Excellence" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Institute of Computer Engineers PLM</h3>
                <p className="role-tag">4th Year Batch Representative</p>
                <p>Served as batch representative and lead the events for 4th year Computer Engineers</p>
              </div>
            </div>

            <div className="project-card horizontal">
              <img src={dangalnigattayawImg} alt="Dangal Ni Gat Tayaw" className="project-img-thumb" />
              <div className="project-info-horizontal">
                <h3>Dangal ni Gat Tayaw</h3>
                <p className="role-tag">Pinakanatatanging Kabataan sa Kolehiyo</p>
                <p>An award recognizing outstanding youth contributions to the municipality of Liliw.</p>
              </div>
            </div>
          </div>
        )}
      </main>

    {/* MODAL LOGIC - Placed inside the main return, at the very bottom */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-x" onClick={() => setSelectedProject(null)}>×</button>
            <h2 className="modal-title">{selectedProject.title}</h2>
            <div className="modal-scroll-area">
              <p><strong>The Vision:</strong> {selectedProject.vision}</p>
              {selectedProject.elements && (
                <ul>
                  {selectedProject.elements.map((el, i) => (
                    <li key={i}>• {el}</li>
                  ))}
                </ul>
              )}
              <p className="modal-quote"><em>"{selectedProject.quote}"</em></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;