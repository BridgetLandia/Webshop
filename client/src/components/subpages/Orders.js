import React from 'react'
import sheep from '../../assets/sheep.svg'
import pulover from '../../assets/pulover.jpg'
import baby from '../../assets/baby.jpg'
import { Container, Row } from 'reactstrap';




export default function Orders() {
    return (
        <div>
            <Container fluid={true} id="order_container">
            <Row id="order_title">
                    <h3>Egyedi Megrendelések</h3>
                </Row>
             <Row id="order_image_wrapper">
                <img className="order_img" alt="" src={baby}></img>
                <div id="order_text">
                <div>
                <p>Ha valami igazán különlegessel szeretnéd meglepni babátváró ismerőseid vagy éppen magadat, állok rendelkezésedre.
                Bármilyen ötlettel is fordulj hozzám, megpróbálom azt életre kelteni.
                Küldj egy képet vagy rajzot az elképzeléseidről a 
                drschvarczne@gmail.com email címre vagy keress a +36 30 6678694-es telefonszámon.
                    Ár kategóriák:
                </p>
                </div>
                <div>
                <ul>
                <li>Egyedi játékok</li>
                <li>Kisbaba holmik</li>
                <li>Meseszép kötött pulcsik</li>
                <li>Patchworks</li>
                <li>Kiegészítők télre</li>
                </ul>
                </div>
                </div>
                <img className="order_img" alt="" src={pulover}></img>
                </Row>
                <div>
                <img id="img_sheep" alt="" src={sheep}></img>
                </div>
            </Container>
            
        </div>
    )
}
