import Layout from "@theme/Layout";
import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import { useHistory } from "@docusaurus/router";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function GetAddin() {
  const [state, setState] = React.useState({});

  const history = useHistory();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => history.push(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <Layout
      title={`Coming soon`}
      description="Remarkable Charts is currently in private beta. Sign up to get your invitation."
    >
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>Coming soon</h1>
          <p>
            Remarkable Charts is currently in private beta. Sign up to get your
            invitation.
          </p>
        </div>
        <div>
          <form
            name="coming-soon"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="coming-soon" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <div className={styles.formGroup}>
              <label className={styles.label} for="name">
                Your name
              </label>
              <input
                className={styles.formControl}
                type="text"
                if="name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <p>
              <label className={styles.label}>Your email</label>
              <br />
              <input
                className={styles.formControl}
                type="email"
                name="email"
                onChange={handleChange}
              />
              <small className={classnames(styles.formText, styles.textMuted)}>
                We'll never share your email with anyone else.
              </small>
            </p>
            <p>
              <button className="button button--primary" type="submit">
                Sign up
              </button>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}
