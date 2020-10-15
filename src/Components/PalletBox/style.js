import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 55px;
`;

export const BoxPallet = styled.div`
  width: 230px;
  height: 280px;
  box-shadow: var(--box-shadow);
  border-radius: 0.3125rem;
  padding: 20px 15px;
  margin: 10px;
  transition: all .3s ease;
`;

export const PalletColors = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 250px;

  div {
    height: 50px;

    p {
      opacity: 0;
      position: relative;
      bottom: -21px;
      text-transform: uppercase;
      width: 80px;
      padding: 2px 5px;
      background: rgba(0, 0, 0, 0.1);
      letter-spacing: 1px;
      border-radius: 2px;
      color: var(--secondary-bg);
      cursor: pointer;
      transition: all .2s ease;
      border: none;

      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }
    &:hover {
      p {
        opacity: 1;
      }
    } 
  }

  div:first-child {
    width: 100%;
    height: 100px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    p {
      opacity: 0;
      position: relative;
      bottom: -71px;
      text-transform: uppercase;
      width: 76px;
      padding: 2px 5px;
      background: rgba(0, 0, 0, 0.1);
      letter-spacing: 1px;
      border-radius: 2px;
      color: var(--secondary-bg);
      cursor: pointer;
      transition: all .2s ease;
      border: none;

      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }
    &:hover {
      p {
        opacity: 1;
      }
    }
  }
  div:last-child {
    width: 100%;
    height: 35px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    p {
      opacity: 0;
      position: relative;
      bottom: -6px;
      text-transform: uppercase;
      width: 76px;
      padding: 2px 5px;
      background: rgba(0, 0, 0, 0.1);
      letter-spacing: 1px;
      border-radius: 2px;
      color: var(--secondary-bg);
      cursor: pointer;
      transition: all .2s ease;
      border: none;

      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }
    &:hover {
      p {
        opacity: 1;
      }
    }
  }
`;