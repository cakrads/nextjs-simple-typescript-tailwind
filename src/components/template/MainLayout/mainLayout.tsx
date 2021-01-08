import React, { Fragment, } from 'react';
import Head from 'next/head';
import Footer from '@components/organism/Footer';
import { IMainLayout } from '@interfaces/template';


export const MainLayout: React.FC = (props: IMainLayout) => {

  const { children, metSEO } = props;
  const { title = '', description = '' } = metSEO || {};

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <link href="/favicon.ico" rel="icon" />
        <meta content={description} name="description"/>
        <meta charSet="utf-8" />
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      <div className="container mx-auto px-8">
        {children}
      </div>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
