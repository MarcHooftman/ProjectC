import { useState } from "react";

const upArrow = require("../../assets/up-arrow.png");
const downArrow = require('../../assets/down-arrow.png');


const ForumPostCard = () => {
    const [collapse, setCollapse] = useState<boolean>(true);

    return (
        <details className="card my-3">
            <summary className="card-header d-flex justify-content-between align-items-center" onClick={() => setCollapse(!collapse)}>
                <div className="poster-pfp"></div>
                <div className="d-flex justify-content-between align-items-center flex-grow-1 mx-4">
                    <div className="">
                        <h2 className="fs-5 m-0">
                            <strong>gebruiker12345</strong>
                        </h2>
                        <h3 className="fs-6 m-0 opacity-50 text-dark">
                            lid sinds 2014
                        </h3>
                    </div>
                    <span className="d-flex gap-2">
                        <a href="#" className="tag btn btn-primary btn-sm">Tag 1</a>
                        <a href="#" className="tag btn btn-primary btn-sm">Tag 2</a>
                        <a href="#" className="tag btn btn-primary btn-sm">Tag 3</a>
                    </span>
                    <span className="opacity-50 text-dark">3 uur geleden</span>
                </div>
                <img className="arrow-icon" src={collapse ? upArrow : downArrow} />
            </summary>
            <p className='card-body'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptates repudiandae sapiente nemo tempora! Quibusdam quas molestiae non nesciunt ad quisquam excepturi reiciendis in? Enim possimus debitis dignissimos quidem asperiores.
                Hic voluptatum autem, voluptates commodi dolorem et quisquam perspiciatis obcaecati tempore rerum. Perferendis dolor fugiat temporibus libero, recusandae, non a sit necessitatibus autem quam ipsum ipsa neque commodi itaque explicabo!
                Rem autem delectus incidunt quos ex distinctio ducimus quisquam quis ad magnam dolorum odit eum ipsa ipsam nam non dolore doloribus nisi, dolorem placeat? Ut fugiat expedita excepturi possimus soluta.
                Repudiandae facere reprehenderit consectetur esse molestias recusandae facilis explicabo, adipisci tempore! Velit vitae dignissimos mollitia, tempore sapiente repellat quo sed quam, officiis deserunt possimus eligendi modi. Eligendi quos quibusdam mollitia.
                Hic possimus enim soluta voluptatem quo repellendus maxime doloremque aut eius ipsa tempora obcaecati, sit similique sint tempore quas qui odit. Optio sint ea illum repellendus tenetur sapiente quisquam vero.
                Neque tempora, voluptates doloremque quia nesciunt inventore laudantium ipsa tempore eligendi itaque nisi? Perferendis ipsum aperiam earum eum aliquid quasi praesentium cupiditate, deleniti sapiente! Odio fugit nisi eveniet minus necessitatibus?
                Reprehenderit sit doloremque aspernatur voluptate ipsam dolores, officiis sed fuga inventore! Nulla magnam molestiae consectetur iure, eius esse autem sed praesentium atque, explicabo rerum! Minus hic eligendi odit commodi ab?
                Vero, beatae corporis optio quod sapiente dolorum perferendis ipsa quos quae dolores, consequatur sunt ratione quis vitae soluta, at quia nihil odio voluptas eveniet libero. Quibusdam dicta iusto aut facere!
            </p>
        </details>
    )
}

export default ForumPostCard;