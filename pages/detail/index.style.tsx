import styled from 'styled-components';

const Detail = styled.div`
  position: relative;
`;

export const DetailWrapper = styled.div`
    position: relative;
    margin: 30px 0;
    padding: 30px;

    @media only screen and (max-width: 480px) {
        margin: 0;
        padding: 10px;
    }

    .detail-img {
        height: 450px;
        object-fit: cover;
    }

    .star-rating {
        color: #08c;
    }

`;

export const Description = styled.p`
    font-size: 16px;
`;

export default Detail;