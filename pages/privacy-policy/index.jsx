import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

function index() {
  return (
    <main>
      <Head>
        <title>Privacy Policy - Giftinbox</title>
        <meta name="description" content="Description of my page" />
        <meta name="keywords" content="my, page, keywords" />
        <meta property="og:title" content="My Page Title" />
        <meta property="og:description" content="Description of my page" />
        <meta property="og:image" content="URL to image" />
        {/* Add other SEO-related tags here */}
      </Head>
      <Header />
      <div className="py-12 w-[90%] mx-auto">
        <h1 className="text-3xl text-center">Privacy Policy</h1>
        <div className="mt-8">
          <p>
            <strong>Date:</strong> 06-08-2023
          </p>
          <h2 className="text-xl">1. Introduction</h2>
          <p>
            Giftnbox is committed to protecting the privacy and security of your
            personal information. This Privacy Policy explains how we collect,
            use, disclose, and protect your information when you interact with
            our website and our services.
          </p>
          <h2 className="text-xl">2. Information We Collect</h2>
          <p className="mb-6">
            We may collect the following types of information:
          </p>
          <ul>
            <li>
              Personal Information: This includes information that can identify
              you, such as your name, email address, phone number, and company
              details. We collect this information when you voluntarily provide
              it to us, such as when you fill out contact forms or request a
              quote.
            </li>
            <li>
              Non-Personal Information: This includes anonymous data, such as
              website usage statistics and analytics, which cannot be used to
              directly identify you. We may collect this information using
              cookies and similar technologies.
            </li>
          </ul>
          <h2 className="text-xl">3. How We Use Your Information</h2>
          <p className="mb-6">
            We may use the collected information for the following purposes:
          </p>
          <ul>
            <li>To provide and improve our services.</li>
            <li>To respond to your inquiries and fulfill your requests.</li>
            <li>
              To personalize your experience and present content relevant to
              your interests.
            </li>
            <li>To send you marketing communications, with your consent.</li>
            <li>To protect our rights and the rights of our users.</li>
          </ul>
          <h2 className="text-xl">4. Cookies and Similar Technologies</h2>
          <p className="mb-6">
            Our website may use cookies and similar technologies to enhance your
            browsing experience and gather information about how you use our
            site. You can control cookies through your browser settings or
            preferences.
          </p>
          <h2 className="text-xl">5. Third-Party Services</h2>
          <p className="mb-6">
            We may use third-party service providers to assist us in various
            aspects of our business, such as analytics, marketing, and customer
            support. These third parties may have access to your information
            only to perform specific tasks on our behalf and are obligated not
            to disclose or use it for any other purpose.
          </p>
          <h2 className="text-xl">6. Data Security</h2>
          <p className="mb-6">
            We implement reasonable security measures to protect your
            information from unauthorized access, loss, misuse, or alteration.
            However, please be aware that no method of transmission over the
            internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
          <h2 className="text-xl">7. Your Choices</h2>
          <p className="mb-6">You have the right to:</p>
          <ul>
            <li>Access, correct, or delete your personal information.</li>
            <li>Object to the processing of your information.</li>
            <li>Opt-out of marketing communications.</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information
            provided in Section 8.
          </p>
          <h2 className="text-xl">8. Contact Us</h2>
          <address className="mb-6">
            Giftinbox
            <br />
            <a href="mailto:care@giftinbox.in">care@giftinbox.in</a>
            <br />
            302,Udyog Vihar, Phase 2 Gurgaon, 122008
            <br />
            Mobile: 9811870360
          </address>
          <h2 className="text-xl">9. Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. We will notify you of any material changes by
            posting the updated policy on our website. Your continued use of our
            services after such modifications constitutes your acceptance of the
            revised policy. Remember to review and adapt the privacy policy to
            comply with applicable laws and regulations in your jurisdiction. If
            you are unsure about the legal requirements or specific clauses to
            include, consider seeking legal advice to ensure your privacy policy
            is comprehensive and compliant.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default index;
