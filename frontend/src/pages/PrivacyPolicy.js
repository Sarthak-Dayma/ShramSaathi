// src/pages/PrivacyPolicy.js
import React from 'react';
import './PrivacyPolicy.css'; // We'll create this next

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <section className="privacy-hero-section">
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us.</p>
      </section>

      <section className="privacy-content-section">
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us when you create an account,
          post a job, apply for a job, or otherwise communicate with us. This may include
          your name, email address, phone number, work experience, and other details.
          {/* Add more specific details as needed */}
        </p>

        <h2>2. How We Use Information</h2>
        <p>
          We use the information we collect to connect job seekers with employers,
          operate and improve our services, communicate with you, and ensure platform security.
          {/* Elaborate on usage */}
        </p>

        <h2>3. Information Sharing</h2>
        <p>
          We may share your information with potential employers (if you are a job seeker)
          or potential candidates (if you are an employer) as necessary to facilitate the
          hiring process. We do not sell your personal information to third parties.
          {/* Detail sharing policies */}
        </p>

        <h2>4. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your information. However,
          no system is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2>5. Your Choices</h2>
        <p>
          You can review and update your account information through your profile settings.
          You may also contact us to request deletion of your account.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of
          any significant changes by posting the new policy on our site.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at
          [Your Contact Email/Link].
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;