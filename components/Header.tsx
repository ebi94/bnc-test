import React, { useState } from 'react';
import Link from 'next/link';
import { Affix, Menu } from 'antd';
import { HomeOutlined, UnorderedListOutlined, HeartOutlined } from '@ant-design/icons';

const Header = (props) => {

  const {selectedMenu} = props;
  const [current, setCurrent] = ('home');
  const handleClick = e => {
    setCurrent(e.key)
  }

  return (
    <Affix offsetTop={0}>
      <Menu mode="horizontal" onClick={() => handleClick} selectedKeys={selectedMenu}	>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link href="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="fav" icon={<HeartOutlined />}>
            <Link href="/favorite">
              Favorite Movies
            </Link>
          </Menu.Item>
          <Menu.Item key="detail" icon={<UnorderedListOutlined />}>
            <Link href="#">
              Detail Movies
            </Link>
          </Menu.Item>
      </Menu>
    </Affix>
  );
};

export default Header;
