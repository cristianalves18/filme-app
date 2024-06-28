
import { useEffect, useState } from "react"

import { Background } from "./components/background";
import { Header } from "./components/header";
import { DescriptionMovie } from "./components/description-movie";
import { Movies } from "./components/movies/indes";
import { Video } from "./components/video";
import { apiData } from "./components/api/data";
import axios from "axios";

const DEFAULT_MOVIE = {

  
  title: "Avengers endGame",
  description: 'Avengers: Endgame é um filme de super-herói americano de 2019, baseado na equipe Vingadores da Marvel Comics. Produzido pela Marvel Studios e distribuído pela Walt Disney Studios Motion Pictures, é a sequência direta de Avengers: Infinity War e o vigésimo segundo filme do Universo Cinematográfico Marvel. ',
  imageSmall: "https://falaanimal.com.br/wp-content/uploads/2019/04/vingadoresultimato1_10042019-701x1024.jpg",
  imageBanner: "https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/bltb9972eda8f4c3a4e/5dfb940346bc275c7135777e/AvengersEndgame_Hero1_L.jpg?imageManager=true&width=1920",
  linkVideo: "4QRdB4RAQMs",
  category: "movies",

};

function App() {
  const [video, setVideo,] = useState(apiData?.movies[0])
  const [moviesData, setMoviesData] = useState([]);
  const [playVideo, setPlayVideo] = useState(false);
  const baseUrl = 'http://localhost:3003'

  const { title, description, linkVideo, imageBanner } = video;

  const apiDataMovies = moviesData?.movies?.length > 0 ? moviesData : apiData;

  useEffect(() => {
    const getMoviesAndCategories = async () => {
      const { data } = await axios.get(`${baseUrl}/movies-categories`);
      setMoviesData(data);
    };
    getMoviesAndCategories();
  }, []);

  const handleOpenPlayVideo = () => setPlayVideo(true);
  const handleClosePlayVideo = () => setPlayVideo(false);

  const handleVideo = (data) => {
    setVideo(data);
    window.scrollTo({ top: 0 });
  }

  return (
    <Background
      imageBanner={imageBanner}>

      <Header />
      <DescriptionMovie
        title={title}
        description={description}
        handleOpenPlayVideo={handleOpenPlayVideo} />
      <Movies data={apiData} handleVideo={(data) => handleVideo(data)}
      />
      <Video
        playVideo={playVideo}
        handleClosePlayVideo={handleClosePlayVideo}
        linkVideo={linkVideo}
      />

    </Background>
  );
}

export default App;