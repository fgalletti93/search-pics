import React, { useEffect, useRef, useState } from "react";

export const ImageCard = ({ image }) => {
  const imageRef = useRef();
  const [span, setSpan] = useState();

  const setSpans = () => {
      const height = imageRef.current.clientHeight;
      
      const spans = Math.ceil(height / 10);
      setSpan(spans);
    };

    useEffect(() => {
      imageRef.current.addEventListener("load", setSpans);
    });

  return (
    <div style={{ gridRowEnd: `span ${span}` }}>
      <img ref={imageRef} alt={image.description} src={image.urls.regular} />
    </div>
  );
};
// class ImageCard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {spans: 0};
//         this.imageRef = React.createRef();
//     }

//     componentDidMount() {
//         this.imageRef.current.addEventListener('load', this.setSpans);
//     }

//     setSpans = () => {
//         const height = this.imageRef.current.clientHeight;

//         const spans = Math.ceil(height / 10)
//         this.setState({ spans })
//     }

//     render() {
//         console.log(this.props)
//         const {description, urls} = this.props.image
//         return (
//             <div style={{gridRowEnd: `span ${this.state.spans}`}}>
//                 <img
//                 ref={this.imageRef}
//                 alt={description}
//                 src={urls.regular}/>
//             </div>
//         )
//     }
// }

// export default ImageCard;
