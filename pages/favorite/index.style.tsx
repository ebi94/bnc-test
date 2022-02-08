import styled from 'styled-components';

const ListCard = styled.div`
  position: relative;
`;

export const CardWrapper = styled.div`
    flex: 0 0 30%;
    margin: 20px auto;

    @media only screen and (max-width: 480px) {
        flex: 0 0 90%;
    }

    .card-img {
        object-fit: cover;
        width: 100%;
        transition: transform .5s ease;
    }

    .card-img:hover {
        transition: transform .5s ease;
        transform: scale(1.1);
    }

    .star-rating {
        color: #08c;
    }
`;

export const ImageCardWrapper = styled.div`
    height: 270px;
    position: relative;
    overflow: hidden;
}
`;

export const ListCardWrapper = styled.div`
  position: relative;
  margin: 30px 0;
  border-radius: 3px;
  align-items: flex-start;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export default ListCard;