import React, {FunctionComponent} from 'react'
import {NextSeo} from 'next-seo'

type LayoutProps = {
  frontMatter: any
}

const UltimateGuideLayout: FunctionComponent<LayoutProps> = ({
  children,
  frontMatter,
}) => {
  const {
    title,
    description,
    titleAppendSiteName = false,
    url,
    ogImage,
  } = frontMatter
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        titleTemplate={titleAppendSiteName ? undefined : '%s'}
        openGraph={{
          title,
          description,
          url,
          images: ogImage ? [ogImage] : undefined,
        }}
        canonical={url}
      />
      <div className="prose md:prose-xl max-w-4xl mx-auto">
        <h1 className="text-xl">{title}</h1>
        {children}
      </div>
    </>
  )
}

export default UltimateGuideLayout
