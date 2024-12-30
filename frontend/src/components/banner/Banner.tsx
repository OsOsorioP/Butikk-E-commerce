import { Link } from "react-router-dom";

interface BannerProps {
    title: string;
    text: string;
}

export const Banner = ({ title, text }:BannerProps) => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-container">
            <div className="text-side">
              <div className="text">
                <h2>{title}</h2>
                <p> {text} </p>
                <Link onClick={() => window.scrollTo(0, 0)} to="/categories/all">
                  <button>Shop now</button>
                </Link>
              </div>
            </div>
            <div className="img-side">
              <img src={""} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
