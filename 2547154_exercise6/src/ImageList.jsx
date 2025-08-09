import Card from './Card';

function ImageList({ images }) {
    const renderedImages = images.map((fact, index) => {
        return <Card facts={fact} key={index} />;
    });

    return <div className="flex flex-wrap justify-center">{renderedImages}</div>;
}

export default ImageList;
