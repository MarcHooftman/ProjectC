import { useState } from "react";
import "./ForumPostExample.scss"

import upArrow from "../assets/up-arrow.png";
import downArrow from '../assets/down-arrow.png';
import { Collapse } from "reactstrap";

const ForumPostExample = () => {
    const [collapse, setCollapse] = useState<boolean>(true);
    return <div className="example-forum-post">
        <div className="forum-post-header">
            <div className="poster-pfp"></div>
            <div className="poster-header">
                <span className="headers">
                    <span className="poster-name">gebruiker12345</span>
                    <span className="tags">
                        <button className="tag tag-1">tag 1</button>
                        <button className="tag tag-2">tag 2</button>
                        <button className="tag tag-3">tag 3</button>
                    </span>

                    <span className="post-time">3 uur geleden</span>
                    <button className="collapse-button" onClick={() => setCollapse(!collapse)}>
                        <img className="arrow-icon" src={collapse ? upArrow : downArrow} />
                    </button>
                </span>
                <div className="divider-one"></div>
            </div>
        </div>

        {collapse ? <div className="content-section">
            <h2>Titel van de forum post</h2>
            <p className="text-truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptates repudiandae sapiente nemo tempora! Quibusdam quas molestiae non nesciunt ad quisquam excepturi reiciendis in? Enim possimus debitis dignissimos quidem asperiores.
                Hic voluptatum autem, voluptates commodi dolorem et quisquam perspiciatis obcaecati tempore rerum. Perferendis dolor fugiat temporibus libero, recusandae, non a sit necessitatibus autem quam ipsum ipsa neque commodi itaque explicabo!
                Rem autem delectus incidunt quos ex distinctio ducimus quisquam quis ad magnam dolorum odit eum ipsa ipsam nam non dolore doloribus nisi, dolorem placeat? Ut fugiat expedita excepturi possimus soluta.
                Repudiandae facere reprehenderit consectetur esse molestias recusandae facilis explicabo, adipisci tempore! Velit vitae dignissimos mollitia, tempore sapiente repellat quo sed quam, officiis deserunt possimus eligendi modi. Eligendi quos quibusdam mollitia.
                Hic possimus enim soluta voluptatem quo repellendus maxime doloremque aut eius ipsa tempora obcaecati, sit similique sint tempore quas qui odit. Optio sint ea illum repellendus tenetur sapiente quisquam vero.
                Neque tempora, voluptates doloremque quia nesciunt inventore laudantium ipsa tempore eligendi itaque nisi? Perferendis ipsum aperiam earum eum aliquid quasi praesentium cupiditate, deleniti sapiente! Odio fugit nisi eveniet minus necessitatibus?
                Reprehenderit sit doloremque aspernatur voluptate ipsam dolores, officiis sed fuga inventore! Nulla magnam molestiae consectetur iure, eius esse autem sed praesentium atque, explicabo rerum! Minus hic eligendi odit commodi ab?
                Vero, beatae corporis optio quod sapiente dolorum perferendis ipsa quos quae dolores, consequatur sunt ratione quis vitae soluta, at quia nihil odio voluptas eveniet libero. Quibusdam dicta iusto aut facere!
            </p>
        </div> : <></>}

        <Collapse className="content-section" isOpen={!collapse}>
            <h2>Titel van de forum post</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptates repudiandae sapiente nemo tempora! Quibusdam quas molestiae non nesciunt ad quisquam excepturi reiciendis in? Enim possimus debitis dignissimos quidem asperiores.
                Hic voluptatum autem, voluptates commodi dolorem et quisquam perspiciatis obcaecati tempore rerum. Perferendis dolor fugiat temporibus libero, recusandae, non a sit necessitatibus autem quam ipsum ipsa neque commodi itaque explicabo!
                Rem autem delectus incidunt quos ex distinctio ducimus quisquam quis ad magnam dolorum odit eum ipsa ipsam nam non dolore doloribus nisi, dolorem placeat? Ut fugiat expedita excepturi possimus soluta.
                Repudiandae facere reprehenderit consectetur esse molestias recusandae facilis explicabo, adipisci tempore! Velit vitae dignissimos mollitia, tempore sapiente repellat quo sed quam, officiis deserunt possimus eligendi modi. Eligendi quos quibusdam mollitia.
                Hic possimus enim soluta voluptatem quo repellendus maxime doloremque aut eius ipsa tempora obcaecati, sit similique sint tempore quas qui odit. Optio sint ea illum repellendus tenetur sapiente quisquam vero.
                Neque tempora, voluptates doloremque quia nesciunt inventore laudantium ipsa tempore eligendi itaque nisi? Perferendis ipsum aperiam earum eum aliquid quasi praesentium cupiditate, deleniti sapiente! Odio fugit nisi eveniet minus necessitatibus?
                Reprehenderit sit doloremque aspernatur voluptate ipsam dolores, officiis sed fuga inventore! Nulla magnam molestiae consectetur iure, eius esse autem sed praesentium atque, explicabo rerum! Minus hic eligendi odit commodi ab?
                Vero, beatae corporis optio quod sapiente dolorum perferendis ipsa quos quae dolores, consequatur sunt ratione quis vitae soluta, at quia nihil odio voluptas eveniet libero. Quibusdam dicta iusto aut facere!
            </p>
        </Collapse>
    </div>
}

export default ForumPostExample;