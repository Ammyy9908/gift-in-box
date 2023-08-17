import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

function index() {
  return (
    <main>
      <Head>
        <title>Terms of Service - Giftinbox</title>
        <meta name="description" content="Description of my page" />
        <meta name="keywords" content="my, page, keywords" />
        <meta property="og:title" content="My Page Title" />
        <meta property="og:description" content="Description of my page" />
        <meta property="og:image" content="URL to image" />
        {/* Add other SEO-related tags here */}
      </Head>
      <Header />
      <div className="py-12 w-[90%] mx-auto">
        <h1 className="text-3xl text-center">Terms of Service</h1>
        <div className="mt-8">
          <p>
            <strong>Effective Date:</strong> [Date]
          </p>
          <h2 className="text-xl">1. Introduction</h2>
          <p className="mb-6">
            Welcome to Giftinbox. These Terms of Service govern your use of our
            website and services. By accessing or using our website, you agree
            to be bound by these Terms. If you do not agree with these Terms,
            please do not use our website or services.
          </p>
          <h2 className="text-xl">2. Use of Our Website</h2>
          <ul className="mb-6">
            <li>
              You must be at least 18 years old or the age of legal majority in
              your jurisdiction to use our website and services.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials and agree to be solely responsible for all
              activities that occur under your account.
            </li>
            <li>
              You agree not to use our website for any unlawful or unauthorized
              purpose.
            </li>
          </ul>
          <h2 className="text-xl">3. Intellectual Property</h2>
          <ul className="mb-6">
            <li>
              The content and materials on our website, including but not
              limited to text, images, graphics, logos, and trademarks, are the
              property of Giftinbox and protected by applicable intellectual
              property laws.
            </li>
            <li>
              You may not reproduce, distribute, modify, display, or use any of
              our intellectual property without our prior written consent.
            </li>
          </ul>
          <h2 className="text-xl">4. Products and Services</h2>
          <ul className="mb-6">
            <li>
              Our website may offer information about our gifting services,
              including but not limited to curated gifts for corporations and
              events.
            </li>
            <li>
              The descriptions, images, and prices of our products and services
              are subject to change without notice.
            </li>
            <li>
              We reserve the right to modify or discontinue any product or
              service without liability.
            </li>
          </ul>
          <h2 className="text-xl">5. Limitation of Liability</h2>
          <ul className="mb-6">
            <li>
              We strive to provide accurate and reliable information on our
              website. However, we do not guarantee the accuracy, completeness,
              or reliability of any content or materials.
            </li>
            <li>
              In no event shall [Your Company Name] be liable for any direct,
              indirect, incidental, special, or consequential damages arising
              from or related to your use of our website or services.
            </li>
          </ul>
          <h2 className="text-xl">6. Indemnification</h2>
          <p className="mb-6">
            You agree to indemnify and hold Giftinbox harmless from any claims,
            liabilities, damages, expenses, or losses arising from your use of
            our website or services or violation of these Terms.
          </p>
          <h2 className="text-xl">7. Termination</h2>
          <ul className="mb-6">
            <li>
              We may terminate or suspend your access to our website and
              services at any time without notice and for any reason.
            </li>
            <li>
              Upon termination, the provisions of these Terms that are intended
              to survive termination will remain in effect.
            </li>
          </ul>
          <h2 className="text-xl">8. Governing Law</h2>
          <p className="mb-6">
            These Terms of Service shall be governed by and construed in
            accordance with the laws of Gurugram,Haryana,India.
          </p>
          <h2 className="text-xl">9. Changes to Terms of Service</h2>
          <p className="mb-6">
            We reserve the right to update or modify these Terms of Service at
            any time. We will notify you of any material changes by posting the
            updated Terms on our website.
          </p>
          <h2 className="text-xl">10. Contact Us</h2>
          <address className="mb-6">
            Giftinbox
            <br />
            <a href="mailto:care@giftinbox.in">care@giftinbox.in</a>
            <br />
            302,Udyog Vihar, Phase 2 Gurgaon, 122008
            <br />
            Mobile: 9811870360
          </address>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default index;
