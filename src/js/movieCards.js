export const movieCards = (data) => {
  const container = document.querySelector(".card-ctn");
  const body = document.querySelector("body");

  const card = document.createElement("div");
  card.setAttribute("class", "card");
  container.append(card);
  card.addEventListener("click", function(){
      movieInformation();
  });
  
  const visuals = document.createElement("div");
  visuals.setAttribute("class", "visuals");
  card.append(visuals);

  const thumbnail = document.createElement("img");
  thumbnail.setAttribute("class", "thumbnail");
  thumbnail.src = data.coverImg;
  visuals.append(thumbnail);

  const openVideo = () => {
    const videoModal = document.createElement("div");
    videoModal.setAttribute("class", "videoModal");
    const closeTrailerWindow = (e) => {
      e.target.className.includes("videoModal") ? e.target.remove() : null;
    };
    window.addEventListener("touchstart", closeTrailerWindow);
    window.addEventListener("click", closeTrailerWindow);

    const video = document.createElement("iframe");
    video.setAttribute("class", "video-trailer");
    video.setAttribute("target", "_parent");
    video.setAttribute("allowfullscreen", "true");
    video.src = `${data.trailer}`;
    videoModal.append(video);
    body.append(videoModal);
  };

  const trailer = document.createElement("a");
  trailer.setAttribute("id", "trailer");
  trailer.setAttribute("class", "fas fa-play-circle");
  trailer.addEventListener("click", () => {
    openVideo();
  });
  visuals.append(trailer);

  const info = document.createElement("div");
  info.setAttribute("class", "info");
  card.append(info);

  const title = document.createElement("h1");
  title.setAttribute("class", "title");
  title.innerText = data.title;
  info.append(title);

  const specInfo = document.createElement("p");
  specInfo.setAttribute("class", "specInfo");
  specInfo.innerText = `${data.genres} | ${data.length} | ${data.age} år`;
  info.append(specInfo);

  
  /*   const rating = document.createElement("span");
  rating.setAttribute("class", "rating");
  rating.innerText = data.rating;
  info.append(rating); */

const mainContent = document.getElementById("movies");
  
function movieInformation(title, backgroundImg, coverImg, description, genres, length, age, rating) {

     mainContent.innerText ="";
    //  document.getElementById("carousel").innerText= "";

  const movieInfoModal = document.createElement("div");
  movieInfoModal.setAttribute("id", "movieInfoWrapper");
  movieInfoModal.style.display = "block";
  mainContent.append(movieInfoModal);
  

  const movieTitle = document.createElement("h1");
  movieTitle.setAttribute("id", "movieTitel");
  movieTitle.innerText =`${data.title}`;
  movieInfoModal.append(movieTitle);

const movieBackgroundImage = document.createElement("img");"backgroundImg"
movieBackgroundImage.setAttribute("id", "backgroundImg");
movieBackgroundImage.src=`${data.backgroundImg}`;
movieBackgroundImage.innerText=`${backgroundImg}`;
movieInfoModal.append(movieBackgroundImage);
  const movieCoverInfo = document.createElement("img");
  movieCoverInfo.setAttribute("id", "movieImgInfo");
  movieCoverInfo.src =`${data.coverImg}`;
  movieCoverInfo.innerText =`${coverImg}`;
  movieInfoModal.append(movieCoverInfo);
  


  const movieSmallText = document.createElement("p");
  movieSmallText.setAttribute("id", "smallText");
  movieSmallText.textContent = (`Genre: ${data.genres}, Längd: ${data.length}, Rek Ålder: ${data.age}, Rating: ${data.rating}`);
  movieInfoModal.append(movieSmallText);
  
  const movieInfoText= document.createElement("p1");
  movieInfoText.setAttribute("id","movieInfoText");
  movieInfoText.innerText= `${data.description}`;
  movieInfoModal.append(movieInfoText);
  
  const bookMovie = document.createElement("button");
  bookMovie.setAttribute("id", "movieBooking-cta");
  bookMovie.innerText =`Book Tickets`;
  movieInfoModal.append(bookMovie);

};
};