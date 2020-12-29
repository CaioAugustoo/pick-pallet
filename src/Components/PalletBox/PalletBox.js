import React, { useEffect, useState } from "react";

import { Wrapper } from "./style";
import base_url from "../../services/api_url";
import { Container } from "../../style/GlobalStyle";
import Pallets from "./Pallets";

const Pallet = () => {
  const [pallets, setPallets] = useState(null);
  const [limit, setLimit] = useState(18);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    const total = 18;
    const fetchAllPallets = async () => {
      const response = await fetch(
        `${base_url}?_limit=${limit}&_sort=published_at%3ADESC`
      );
      const json = await response.json();
      if (response.ok && json.length < total) setInfinite(false);
      setPallets(json);
    };
    fetchAllPallets();
  }, [limit]);

  useEffect(() => {
    let wait = false;

    const infiniteScroll = () => {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.85 && !wait) {
          setLimit(limit => limit + 18);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    };

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite, pallets]);

  return (
    <Container>
      <Wrapper>
        {pallets !== null && pallets.length !== undefined && (
          <Pallets pallets={pallets} />
        )}
      </Wrapper>
    </Container>
  );
};

export default Pallet;
