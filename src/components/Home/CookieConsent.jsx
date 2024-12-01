import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if the "cookieBy" cookie is already set
    if (!document.cookie.includes("cookieBy=codinglab")) {
      // Delay showing the consent box by 3000ms (3 seconds)
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 3000);

      // Cleanup the timer if component unmounts before timeout
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Set cookie for 1 month (60s * 60m * 24h * 30d)
    document.cookie = "cookieBy=codinglab; max-age=" + 60 * 60 * 24 * 30;
    setShowConsent(false); // Hide consent box
  };

  const handleDecline = () => {
    setShowConsent(false); // Just hide consent box if declined
  };

  if (!showConsent) return null; // Do not render component if consent is not needed

  return (
    <div className="wrapper-cookie">
      <div className='cookie'>
        <i className="bx bx-cookie"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className="bi bi-cookie" viewBox="0 0 16 16">
  <path d="M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
  <path d="M8 0a7.96 7.96 0 0 0-4.075 1.114q-.245.102-.437.28A8 8 0 1 0 8 0m3.25 14.201a1.5 1.5 0 0 0-2.13.71A7 7 0 0 1 8 15a6.97 6.97 0 0 1-3.845-1.15 1.5 1.5 0 1 0-2.005-2.005A6.97 6.97 0 0 1 1 8c0-1.953.8-3.719 2.09-4.989a1.5 1.5 0 1 0 2.469-1.574A7 7 0 0 1 8 1c1.42 0 2.742.423 3.845 1.15a1.5 1.5 0 1 0 2.005 2.005A6.97 6.97 0 0 1 15 8c0 .596-.074 1.174-.214 1.727a1.5 1.5 0 1 0-1.025 2.25 7 7 0 0 1-2.51 2.224Z"/>
</svg></i>
        <h2>Cookies</h2>
      </div>

      <div className="data">
        <p>
          This website uses cookies to help you have a superior and more relevant
          browsing experience on the website. <a href="/policies-privacy">Read more...</a>
        </p>
      </div>

      <div className="buttons">
        <button className="button" onClick={handleAccept}>Accept</button>
        <button className="button" onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default CookieConsent;
