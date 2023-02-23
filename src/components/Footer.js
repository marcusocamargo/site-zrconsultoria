import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} ZR Consultoria. Todos os direitos reservados.
                    </span>
                </div>
                <a
                    href="https://www.whatsapp.com/catalog/5515974022214/?app_absent=0"
                    target="_blank"
                    className="whatsapp"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a
                    href="https://www.instagram.com/zrconsultoriaautomotiva/"
                    target="_blank"
                    className="instagram"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;