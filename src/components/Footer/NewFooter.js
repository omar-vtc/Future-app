import { useTranslation } from "react-i18next";

function NewFooter(props) {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>{t("Get In Touch")}</h2>
                <p>
                  {/* Please send us an email and we will get back to you as soon as
                  possible. */}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>{t("Contact-Info")}</h3>
              <p>
                <span>
                  <i className="fa bi bi-map"></i> {t("Address")}
                </span>
                {props.data ? t(props.data.address) : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa bi bi-phone"></i> {t("Phone")}
                </span>{" "}
                {props.data ? t(props.data.phone) : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa bi bi-envelope"></i> {t("Email")}
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa bi bi-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa bi bi-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFooter;
