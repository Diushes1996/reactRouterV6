import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            this page doesn't exist <Link to="/" />
        </div>
    )
}

export default NotFoundPage;