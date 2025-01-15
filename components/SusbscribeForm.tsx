import React from "react";
import Head from "next/head";

const SubscribeForm = () => {
  return (
    <div id="mc_embed_shell">
      <Head>
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        />
        <script
          type="text/javascript"
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function($) {
              window.fnames = new Array(); 
              window.ftypes = new Array();
              fnames[1]='FNAME';ftypes[1]='text';
              fnames[0]='EMAIL';ftypes[0]='email';
              fnames[2]='LNAME';ftypes[2]='text';
              fnames[3]='ADDRESS';ftypes[3]='address';
              fnames[4]='PHONE';ftypes[4]='phone';
              fnames[5]='BIRTHDAY';ftypes[5]='birthday';
              fnames[6]='COMPANY';ftypes[6]='text';
            }(jQuery));
            var $mcj = jQuery.noConflict(true);`,
          }}
        ></script>
      </Head>
      <style jsx>{`
        #mc_embed_signup {
          background: #fff;
          clear: left;
          font: 14px Helvetica, Arial, sans-serif;
          width: 600px;
        }
      `}</style>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us9.list-manage.com/subscribe/post?u=8f4c18d2201cbcf728436b648&amp;id=787cc9fe87&amp;f_id=00c7c2e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">Name</label>
              <input
                type="text"
                name="FNAME"
                className="text"
                id="mce-FNAME"
                defaultValue=""
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                defaultValue=""
                required
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-5000px" }}
            >
              <input
                type="text"
                name="b_8f4c18d2201cbcf728436b648_787cc9fe87"
                
                defaultValue=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                />
                <p style={{ margin: "0 auto" }}>
                  <a
                    href="http://eepurl.com/i7ONrA"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: "transparent",
                        borderRadius: "4px",
                      }}
                    >
                      <img
                        className="refferal_badge"
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                        alt="Intuit Mailchimp"
                        style={{
                          width: "220px",
                          height: "40px",
                          display: "flex",
                          padding: "2px 0",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
