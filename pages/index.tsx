import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, Avatar } from 'antd';
import { HeartOutlined, HeartFilled, EllipsisOutlined, EyeOutlined, StarOutlined, StarFilled } from '@ant-design/icons';
import Header from '../components/Header';
import { ListCardWrapper, CardWrapper, ImageCardWrapper } from './index.style'
import { list } from '../services/getData';

const { Meta } = Card;

const Index = () => {
  const [listMovies, setListMovies] = useState([]);
  const [listFav, setListFav] = useState();

  const getListMovies = async () => {
    const res = await list();
    const data = res && res.data && res.data.data;
    setListMovies(data);
  };

  const checkFav = (id) => {
    return listFav.indexOf(id) === -1 ? true : false;
  }

  const addFav = (id) => {
    const check = checkFav(id);
    if(check) {
      setListFav([...listFav, id])
    }
  }

  const removeFav = (id) => {
    const array = [...listFav]; // make a separate copy of the array
    const index = array.indexOf(id)
    if (index !== -1) {
      array.splice(index, 1);
      setListFav(array);
    }
  }

  useEffect(() => {
    getListMovies();
    const fav = localStorage.getItem('fav') ? localStorage.getItem('fav') : [];
    setListFav(fav);
  }, []);

  useEffect(() => {
    console.log('list fav', listFav)
    localStorage.setItem('fav', listFav);
  }, [listFav])

  return (
    <>
      <Header />
      <ListCardWrapper>
        {listMovies.map(item => (
          <CardWrapper key={item.id}>
            <Card
              cover={
                <ImageCardWrapper>
                  <img
                    alt={item.title}
                    src={item.imageUrl}
                    className="card-img"
                  />
                </ImageCardWrapper>
              }
              actions={[
                <Link href={`/detail/${item.id}`}><EyeOutlined key="view" /></Link>,
                checkFav(item.id) ? <HeartOutlined key="like" onClick={() => addFav(item.id)} /> : <HeartFilled key="like" onClick={() => removeFav(item.id)} className="heart-fav"/>,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                title={item.title}
                description={
                  <>
                    {item.year}<br/>
                    {[...Array(+item.rating).keys()].map((value, i) => (
                      <StarFilled className="star-rating"/>
                    ))}
                    {[...Array(5 - +item.rating).keys()].map((value, i) => (
                      <StarOutlined />
                    ))}
                  </>
                }
              />
            </Card>
          </CardWrapper>
          ))
        }
      </ListCardWrapper>
    </>
  );
};

export default Index;
