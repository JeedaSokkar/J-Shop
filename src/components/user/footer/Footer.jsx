import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import style from './footer.module.css';
import Container from 'react-bootstrap/Container';
export default function Footer() {
  return (
    <footer className={`${style.footer}`}>
           <Container>
      <div className="py-4">
        <div className="d-flex justify-content-between align-items-center">
          {/* عنوان الـ Footer */}
          <div className={`${style.title} footer-item`}>
            J-Shop
          </div>
          
          {/* الأيقونات الاجتماعية */}
          <div className="footer-item px-3">
            <FaFacebook size={30} />
          </div>
          <div className="footer-item px-3">
            <FaInstagram size={30} />
          </div>
          <div className="footer-item px-3">
            <FaTwitter size={30} />
          </div>
          <div className="footer-item px-3">
            <FaWhatsapp size={30} />
          </div>
        </div>
      </div>
      </Container>
    </footer>
  );
}
