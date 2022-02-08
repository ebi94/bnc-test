import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Divider, Descriptions, Image } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import Header from '../../components/Header';
import { detail } from '../../services/getData';
import { DetailWrapper, Description } from './index.style'

const DetailPage = (props) => {
    const { data } = props;
    
    return(
        <>
        <Header />
        <DetailWrapper>
            <Row justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={6}>
                    <Image
                        alt={data.title}
                        src={data.imageLargeUrl}
                        className="detail-img"
                    />
                </Col>
                <Col span={10}>
                    <Descriptions title="Movies Info">
                        <Descriptions.Item label="Title">{data.title}</Descriptions.Item>
                        <Descriptions.Item label="Genre">{data.genre}</Descriptions.Item>
                        <Descriptions.Item label="Duration">{data.duration}</Descriptions.Item>
                        <Descriptions.Item label="Release">{data.releaseDate}</Descriptions.Item>
                        <Descriptions.Item label="Year">{data.year}</Descriptions.Item>
                    </Descriptions>
                    <>
                        <br/>
                        {[...Array(+data.rating).keys()].map((value, i) => (
                            <StarFilled className="star-rating"/>
                        ))}
                        {[...Array(5 - +data.rating).keys()].map((value, i) => (
                            <StarOutlined />
                        ))}
                    </>
                    <Description>
                        {data.desc}
                    </Description>
                </Col>
            </Row>
        </DetailWrapper>
        </>
    )
}


DetailPage.propTypes = {
	data: PropTypes.object.isRequired,
};

DetailPage.getInitialProps = async ctx => {
	const { query } = ctx;
	let data;
	const res = await detail(query.id);

	if (res.status === 200) {
        const val = res.data && res.data.data;
		data = val;
	} else {
		data = {};
	}
	return {
		data
	};
};

export default DetailPage;