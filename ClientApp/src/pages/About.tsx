import Layout from "../components/Layout";

import './About.scss'

const empty = require('../assets/empty.jpg')
const map = require("../assets/map-image.png")

const About = () => {
  return <Layout>
    <h1 className='about-title my-5'>Over Antes</h1>
    <div className="intro">
      <img className="antes-picture" src={empty} />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus exercitationem tempora eos, facere, facilis repellendus cum ipsa officiis numquam saepe accusamus totam quo excepturi nisi vel nesciunt illo at temporibus.
        Ducimus eaque hic corrupti autem consequuntur, deleniti tenetur aspernatur nostrum consequatur excepturi explicabo et, sint praesentium enim quibusdam, illo molestiae doloribus quia ipsum cum dolorem. Hic saepe quos et itaque?
        Quisquam neque dolore facilis, voluptatibus quia ipsam obcaecati numquam explicabo adipisci modi ratione deleniti culpa dolorem labore consequatur corporis nobis debitis harum, similique tempora molestias ad? Aspernatur voluptate eaque nisi.
        Minus incidunt inventore nemo corrupti quisquam? Reiciendis beatae animi quis totam debitis sint voluptatem sed ab consequatur temporibus aut facere, blanditiis assumenda magnam quisquam ullam magni tempora illo! Nemo, reprehenderit!
        Architecto, doloribus iure! Ab consectetur placeat dicta dolorem at itaque sit sint magnam, quam cupiditate deleniti quae optio aliquam deserunt a nisi excepturi. Culpa nihil blanditiis molestias, ab sapiente odit?
        Neque dolorum laboriosam dicta officia doloribus aspernatur officiis qui adipisci quisquam. Reprehenderit fugiat accusamus, ipsum ab enim cupiditate dignissimos eligendi pariatur provident fugit numquam consequuntur necessitatibus ut ullam expedita nulla.
        Autem odio consequatur quas enim facilis ipsam, delectus nemo culpa, temporibus vero sapiente alias in dicta assumenda obcaecati! Maxime dolores corporis est dicta illo. Voluptatibus quas labore repudiandae natus eligendi.
        Voluptate eligendi quas, hic provident natus ipsam. Ipsum culpa, atque optio sequi iure aut laboriosam tempore illum magnam ea ut tenetur sapiente eum, nulla delectus ratione fugit velit minus qui.
        Aperiam iure impedit itaque incidunt quisquam amet delectus debitis, reiciendis nulla qui ipsa ducimus excepturi quia adipisci modi dolor sed laudantium ratione nobis error distinctio fugiat deserunt totam maiores. Obcaecati.
        Ducimus placeat laborum tempora sit quae, corrupti cupiditate aperiam sunt quas architecto? Debitis, veniam delectus? Sunt velit neque iusto suscipit dolor ut corrupti modi, cum, recusandae possimus nulla, fugit corporis!</p>
    </div>
    <div className="general-info my-5">
      <h2 className="info-title mb-4">Algemene informatie</h2>
      <div className="general-info-table">
        <div className="keys">
          <div><strong>Telefoon</strong></div>
          <div><strong>Noodnummer</strong></div>
          <div><strong>Adres</strong></div>
          <div><strong>Postadres</strong></div>
        </div>
        <div className="values">
          <div>010 12 34 567</div>
          <div>06 12 34 56 78</div>
          <div>Nepstraat 123a</div>
          <div>Postbus 8549, 3009 AM Rotterdam</div>
        </div>
      </div>
    </div>
    <img className="map-image mb-5" src={map} />
  </Layout>;
};

export default About;
