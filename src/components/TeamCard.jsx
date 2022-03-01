import React from "react";
function Hover3D(pageX, pageY, config) {
    const { width, height, rotation, shine, rgb_from, rgb_to } = config,
        centerX = width / 2,
        centerY = height / 2,
        el = ReactDOM.findDOMNode(this),
        offsetX = (pageX - el.offsetLeft) / width,
        offsetY = (pageY - el.offsetTop) / height,
        deltaX = pageX - el.offsetLeft - centerX,
        deltaY = pageY - el.offsetTop - centerY,
        widthMultiplier = 360 / width,
        rotateX = (deltaY - offsetY) * (rotation / 100 * widthMultiplier),
        rotateY = (offsetX - deltaX) * (rotation / 100 * widthMultiplier),
        angleRad = Math.atan2(deltaY, deltaX),
        angleRaw = angleRad * 180 / Math.PI - 90,
        angle = angleRaw < 0 ? angleRaw + 360 : angleRaw;

    this.setState(() => {
        return {
            rotate_3D: {
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            },
            gradient_3D: {
                backgroundImage: `linear-gradient(${angle}deg, rgba(${rgb_from}, ${shine /
                    10}) 0%, rgba(${rgb_to}, .8) 50%)`
            }
        };
    });
}

const config_3dCard = {
    width: 285,
    height: 356,
    rotation: 9,
    shine: 7,
    rgb_from: "64,70,99",
    rgb_to: "64,78,99"
};

export default function Card({ image, series }) {
    state = {
        gradient_3D: {},
        rotate_3D: {}
    };
    handleMove = ({ pageX, pageY }) =>
        Hover3D.call(this, pageX, pageY, config_3dCard);
    handleTouchMove = event => {
        event.preventDefault();
        const { pageX, pageY } = event.touches[0];
        this.handleMove({ pageX, pageY });
    };
    handleLeave = () => {
        this.setState({
            gradient_3D: {},
            rotate_3D: {}
        });
    };
    const { itemData } = this.props;
    const { gradient_3D, rotate_3D } = this.state;
    return (
        <a
            href="#"
            className="List__item Card"
            onMouseMove={this.handleMove}
            onTouchMove={this.handleTouchMove}
            onMouseLeave={this.handleLeave}
            onTouchEnd={this.handleLeave}
        >
            <div className="rotate_3D" style={rotate_3D}>
                <img src={image} />
            </div>
            <div>
                <p>{series}</p>
            </div>
        </a>
    );

}
