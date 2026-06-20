import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '@/components/Header';
import Credentials from '@/components/Credentials';
import Footer from '@/components/Footer';

const CredentialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Credentials | Ozony Tech</title>
        <meta
          name="description"
          content="View Ozony Tech credentials, including verified technical training that supports practical IT support, networking, troubleshooting, and security services."
        />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />
        <link rel="canonical" href="https://ozony.tech/credentials" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ozony.tech/credentials" />
        <meta property="og:site_name" content="Ozony Tech" />
        <meta property="og:title" content="Credentials | Ozony Tech" />
        <meta
          property="og:description"
          content="Verified technical training supporting Ozony Tech IT, networking, troubleshooting, and security services."
        />
        <meta
          property="og:image"
          content="https://ozony.tech/images/ozony-og-preview.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Credentials | Ozony Tech" />
        <meta
          name="twitter:description"
          content="Verified technical training supporting Ozony Tech IT, networking, troubleshooting, and security services."
        />
        <meta
          name="twitter:image"
          content="https://ozony.tech/images/ozony-og-preview.png"
        />
      </Helmet>

      <div className="min-h-screen app-bg text-white">
        <Header />

        <main className="pt-24">
          <Credentials />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CredentialsPage;