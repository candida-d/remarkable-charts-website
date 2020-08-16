import React from "react";
import classnames from "classnames";
import { useHistory } from "@docusaurus/router";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
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
    <Layout title={`Contact`} description="Contact">
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>Contact</h1>
        </div>
        <div>
          <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
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
              <small className={classnames(styles.formText, styles.textMuted)}>
                We'll never share your email with anyone else.
              </small>
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
            </p>
            <p>
              <label className={styles.label}>Message</label>
              <br />
              <textarea
                className={styles.formControl}
                name="message"
                rows="5"
                onChange={handleChange}
              />
            </p>
            <p>
              <button className="button button--primary" type="submit">
                Send
              </button>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}
