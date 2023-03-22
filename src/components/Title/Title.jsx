import "./style.scss";

const Title = ({background, title}) => {
    return (
        <div className="title-container">
            <span className="background">{background}</span>
            <h2>{title}</h2>
            <span className="line"></span>
        </div>
    )
}

export default Title;