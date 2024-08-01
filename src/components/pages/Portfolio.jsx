import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { portfolio } from "../data/dummydata";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];

export const Portfolio = () => {
  const [list, setLists] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  const [activeItem, setActiveItem] = useState(null);

  const filterItems = (category) => {
    if (category === "all") {
      setLists(portfolio);
    } else {
      const newItems = portfolio.filter((item) => item.category === category);
      setLists(newItems);
    }
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const closeDetails = () => {
    setActiveItem(null);
  };

  const handleSwiperClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <article>
        <div className='container'>
          <Heading title='Portfolio' />
          <div className='catButton'>
            {category.map((category, index) => (
              <button
                key={index}
                className='primaryBtn'
                onClick={() => filterItems(category)}
                data-aos='zoom-out-down'
              >
                {category}
              </button>
            ))}
          </div>
          <div className='content grid3'>
            {list.map((item, index) => (
              <div
                key={index}
                className='box'
                data-aos='fade-up'
                onClick={() => handleItemClick(item)}
              >
                <div className='img'>
                  <img src={item.cover} alt='' />
                </div>
                <div className='overlay'>
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <VisibilityOutlinedIcon />
                </div>
              </div>
            ))}
          </div>
          {activeItem && (
            <div className='portfolio-item-details' onClick={closeDetails}>
              <div className='row' onClick={handleSwiperClick}>
                <button className='close-btn' onClick={closeDetails}>✖</button>
                
                <div className='info'>
                  <h3>Project info</h3>
                  <ul>
                    <li>Date - <span>{activeItem.date}</span></li>
                    <li>Tools - <span>{activeItem.tools}</span></li>
                  </ul>
                </div>
                <div className='screenshots'>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                  >
                    {activeItem.screenshots.map((screenshot, index) => (
                      <SwiperSlide key={index}>
                        <img src={screenshot} alt={`screenshot-${index}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
};
