import React from 'react';
import styled from 'styled-components';


const StyledGalleryBody = styled.body`





img,
figure
 {
    margin: 0;
    padding: 0;
    border: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}



.page-content__gallery {
    width: 100%
}


.gallery__flow {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    padding: 1.5vw
}

.gallery__isle {
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    width: 25%;
    padding: 1.5vw
}

.gallery__isle-inner {
    position: relative;
    z-index: 5;
    width: 100%;
    height: 0;
    padding-bottom: 70%;
    background-color: #fff;
    -webkit-box-shadow: 0 .1vw 1vw -.1vw rgba(0, 0, 0, .4);
    box-shadow: 0 .1vw 1vw -.1vw rgba(0, 0, 0, .4);
    -webkit-border-radius: .5vw;
    border-radius: .5vw;
    overflow: hidden
}

.gallery__isle-inner_big {
  position: relative;
  z-index: 5;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-color: #fff;
  -webkit-box-shadow: 0 .1vw 1vw -.1vw rgba(0, 0, 0, .4);
  box-shadow: 0 .1vw 1vw -.1vw rgba(0, 0, 0, .4);
  -webkit-border-radius: .5vw;
  border-radius: .5vw;
  overflow: hidden
}

.gallery__isle-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden
}

.gallery__preview {
    position: relative;
    width: 100%;
    height: 100%
}

.gallery__preview-image {
    width: 100%;
    height: 100%;
    overflow: hidden
}

.gallery__preview-image img {
    display: block;
    width: 100%;
    min-height: 100%
}



@media screen and (max-width:2560px) {
    .gallery__isle {
        width: 33.3%
    }
}

@media screen and (max-width:1760px) {
    .gallery__isle {
        width: 50%
    }
}

@media screen and (max-width:960px),
screen and (max-height:640px) {
    .page-header__title {
        font-size: 50px
    }
}

@media screen and (max-width:960px) {
    .gallery__flow {
        padding: 20px
    }

    .gallery__isle {
        width: 100%;
        padding: 20px
    }

    .gallery__isle-inner {
        -webkit-box-shadow: 0 2px 20px -2px rgba(0, 0, 0, .4);
        box-shadow: 0 2px 20px -2px rgba(0, 0, 0, .4);
        -webkit-border-radius: 5px;
        border-radius: 5px
    }

    
}


@media screen and (max-width:640px) {
    .gallery__flow {
        padding: 15px
    }

    .gallery__isle {
        padding: 15px
    }
}

@media screen and (max-width:480px) {
    .gallery__flow {
        padding: 10px
    }

    .gallery__isle {
        padding: 15px 10px
    }

}


`;

const Gallery = () => (




  <StyledGalleryBody>

    <div className="gallery">
      <div className="gallery__inner">
        <div className="gallery__flow">
                      
          <div className="gallery__isle">
            <div className="gallery__isle-inner_big">
              <div className="gallery__isle-content">
                <figure className="gallery__preview">
                  <div className="gallery__preview-image"><img
                    src="https://bit.ly/3nBP90o"
                    alt="street art"></img></div>
                </figure>
              </div>
            </div>
          </div>

          <div className="gallery__isle">
            <div className="gallery__isle-inner_big">
              <div className="gallery__isle-content">
                <figure className="gallery__preview">
                  <div className="gallery__preview-image"><img
                    src="https://bit.ly/3nBP90o"
                    alt="street art"></img></div>
                </figure>
              </div>
            </div>
          </div>


          <div className="gallery__isle">
            <div className="gallery__isle-inner_big">
              <div className="gallery__isle-content">
                <figure className="gallery__preview">
                  <div className="gallery__preview-image"><img
                    src="https://bit.ly/3nBP90o"
                    alt="street art"></img></div>
                </figure>
              </div>
            </div>
          </div>





          <div className="gallery__isle">
            <div className="gallery__isle-inner">
              <div className="gallery__isle-content">
                <figure className="gallery__preview">
                  <div className="gallery__preview-image"><img
                    src="https://bit.ly/3bLLzy6"
                    alt="street art"></img></div>
                </figure>
              </div>
            </div>
          </div>

         
         
         
         
         
         
         
         
         
         
        </div>
      </div>
    </div>
  </StyledGalleryBody>
);

export default Gallery;
