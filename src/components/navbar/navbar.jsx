import React, { useState } from 'react';
import Style from './navbar.module.css';
import logoPNG from '../../assets/navbar/logo/Frame 22.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  const navItems = [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'About us',
      link: '/about'
    },
    {
      text: 'Service',
      link: '/services'
    },
    {
      text: 'Page',
      pages: [
        {
          text: 'Detail Service',
          link: '/detail-service'
        },
        {
          text: 'Pricing Plan',
          link: '/pricing-plan'
        }
      ]
    },
    {
      text: 'Blog',
      link: '/blog'
    }
  ];

  const [items, setItems] = useState(navItems);
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePageClick = (index) => {
    console.log('Item with pages clicked');
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className={Style.container}>
      {/* Brand Name */}
      <div className={Style.brandName}>
        <img src={logoPNG} alt="Logo" />
      </div>

      <ul className={Style.navItems}>
        {items.map((item, index) => (
          <li key={index} onClick={() => handlePageClick(index)}>
            <Link
              to={item.link ? item.link : '#'}
            >
              {item.text}
              {item.pages ? (
                <i className={`fa-solid ${index === activeIndex ? 'fa-angle-down' : 'fa-angle-right'}`}></i>
              ) : null}
            </Link>
            {item.pages && (
              <ul className={index === activeIndex ? Style.active : ''}>
                {item.pages.map((page, pageIndex) => (
                  <li key={pageIndex}>
                    <Link to={page.link}>{page.text}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <a className={Style.contactUS} href="#">Contact US</a>
    </section>
  );
}

export default Navbar;
