import "./DefaultPicture.css"

function DefaultPicture (props) {
    return (<div className="DefaultPicture">
        {props.firstName.charAt(0)}
    </div>);
}

export default DefaultPicture;
