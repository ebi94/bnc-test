import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, Avatar } from 'antd';
import { LikeOutlined, EllipsisOutlined, EyeOutlined, StarOutlined, StarFilled } from '@ant-design/icons';
import Header from '../../components/Header';
import { ListCardWrapper, CardWrapper, ImageCardWrapper } from './index.style'
import { list } from '../../services/getData';

const { Meta } = Card;

const Index = () => {
  const [listMovies, setListMovies] = useState([]);
  const [listFav, setListFav] = useState();

  const getListMovies = async () => {
    const res = await list();
    console.log('res', res)
    const data = res && res.data && res.data.data;
    setListMovies(data)
  };

  const checkFav = (id) => {
    return listFav.indexOf(id) === -1 ? true : false;
  }

  useEffect(() => {
    getListMovies();
    const fav = localStorage.getItem('fav') ? localStorage.getItem('fav') : [];
    setListFav(fav);
  }, []);

  return (
    <>
      <Header />
      <ListCardWrapper>
        {listMovies.map(item => 
          checkFav(item.id) ? 
          '' :
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
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                title={item.title}
                description={
                  <>
                    {item.year}<br/>
                    {[...Array(+item.rating).keys()].map((value, i) => (
                      <StarFilled className="star-rating" />
                    ))}
                    {[...Array(5 - +item.rating).keys()].map((value, i) => (
                      <StarOutlined />
                    ))}
                  </>
                }
              />
            </Card>
          </CardWrapper>
          )
        }
      </ListCardWrapper>
    </>
  );
};

export default Index;
