import { useState, useEffect } from "react";
import DetailedCard from "../../components/common/Cards/DetailedCard";

export default function Favorites() {
  const [favs, setFavs] = useState([] as []);

  async function initialData() {
    const {
      data: { anime },
    } = await (await fetch(import.meta.env.VITE_URI_KEY)).json();
    setFavs(anime);
  }

  useEffect(() => {
    initialData();
  }, []);

  return (
    <>
      <div className="container">
        {favs.map(
          ({
            title,
            images: {
              jpg: { large_image_url },
            },
          }) => {
            return <DetailedCard title={title} image={large_image_url} />;
          }
        )}
      </div>

      <div className="container"></div>
    </>
  );
}
