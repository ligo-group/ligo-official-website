import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import SeoMeta from "@/partials/SeoMeta";
import { Button, Feature } from "@/types";
import Link from "next/link";
import { title } from "process";
import { FaCheck } from "react-icons/fa";
import { Icons } from "../layouts/components/Icons";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const callToAction = getListPage("sections/call-to-action.md");

  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;


  return (
    <>
      <Header />
      <main className="dark:bg-darkmode-theme-light px-12 sm:px-4">
        <SeoMeta title="Ligo Network Layer 2 Bitcoin"
          meta_title="Ligo Network the fastest BTC Layer 2  "
          description="High performance Bitcoin Layer 2 available on mainnet"
        />
        <section className="section pt-14 h-screen">
          <div className="container">
            <div className="row justify-center">
              <div className="lg:col-10 md:col-9 mb-8 text-center">


                <h1
                  className="mb-4 xs:text-4xl text-2xl font-normal dark:font-light text-[#4ae52e] font-primary dark:text-[#4ae52e]"
                  dangerouslySetInnerHTML={markdownify(banner.title)}
                />
                <h3
                  className="font-light xs:text-5xl text-4xl "
                  dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
                />


                {banner.button!.enable && (
                  <Link
                    className="btn btn-outline-primary mt-12"
                    href={banner.button!.link}
                    target={
                      banner.button!.link.startsWith("http") ? "_blank" : "_self"
                    }
                    rel="noopener"
                  >
                    Start Staking
                  </Link>
                )}

                {banner.image && (
                  <div className="col-12 mt-12 ">

                    <div className="md:w-[35%] m-auto w-[80%] text-black dark:text-white">
                      {Icons.shape}
                    </div>

                  </div>
                )}

              </div>

            </div>
          </div>
        </section>

        <section className="section pt-0 sm:mt-16 md:mt-0 xs:mt-0 ">
          <div className="container">
            <div className="row">
              <div className="mx-auto mb-12 text-center md:col-10 lg:col-8 xl:col-10">
                <h2 className="mb-10 text-5xl font-light">A High-Performance BTC Layer 2 </h2>
                <p className="mb-8  font-light text-white text-2xl"> The first fully-decentralized Layer 2 with fast and cheap transactions</p>
              </div>
              <div className="flex md:justify-between md:flex-row flex-col items-center w-full lg:px-32 xs:px-8 ">

                <div className="w-full m-auto text-center px-8 mb-8">
                  <div className="min-h-32 flex items-end pb-6 justify-center">
                    <span className="sm:w-24 sm:h-24 w-[60%] h-[60%] inline-block sm:inline-flex items-end  text-black dark:text-[#4ae52e] opacity-100">
                      {Icons.fast}
                    </span>
                  </div>

                  <p className="text-center sm:text-lg text-xl font-light text-black dark:text-white">
                    From Bitcoin 7 TPS to LIGO with up to 30,000 TPS or more
                  </p>
                </div>
                <div className="w-full m-auto text-center px-8 mb-8">
                  <div className="min-h-32 flex items-end pb-6 justify-center">
                    <span className="sm:w-24 sm:h-24 w-[60%] h-[60%] inline-block sm:inline-flex x items-end  text-black dark:text-[#4ae52e] opacity-100">
                      {Icons.decentralized}
                    </span>
                  </div>
                  <p className="text-center sm:text-lg text-xl  font-light text-black dark:text-white">
                    Innovative consensus  offering more security and decentralization
                  </p>
                </div>
                <div className="w-full m-auto text-center px-8 mb-8">
                  <div className="min-h-32 flex items-end pb-6 justify-center">
                    <span className="sm:w-24 sm:h-24 w-[60%] h-[60%]  inline-block sm:inline-flex  items-end text-black dark:text-[#4ae52e] opacity-100">
                      {Icons.compatible}
                    </span>
                  </div>
                  <p className="text-center sm:text-lg text-xl font-light text-black dark:text-white">
                    Solution fully programmable with gaming language LUA
                  </p>
                </div>


              </div>
            </div>
          </div>
        </section>


        <section className="partnership-section py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-32">
              <h2 className="text-5xl font-light">Strategic Partnerships</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              <div className="flex flex-col mb-6 md:mb-0 w-full md:w-1/3">
                <div className="mb-4 flex justify-center md:justify-center">
                  <ImageFallback src="/images/sinohope.png" alt="Sinohope Logo" width={200} height={50} />

                </div>
                <div className="text-center">
                  <h3 className="text-xl font-light dark:text-[#4ae52e] mb-2">Sinohope</h3>
                  <p className="text-xl font-light ">
                    Through partnering with Sinohope, Ligo Network secures an advanced stance in asset protection and management,
                    empowering our technology with leading MPC solutions. This synergy aims to set new standards in blockchain security and trust.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-6 md:mb-0 w-full md:w-1/3">
                <div className="mb-4 flex justify-center md:justify-center">
                  <ImageFallback src="/images/waterdrip.png" alt="Waterdrip Capital Logo" width={200} height={50}  />

                </div>
                <div className="text-center">
                  <h3 className="text-xl font-light dark:text-[#4ae52e] mb-2">Waterdrip Capital</h3>
                  <p className="text-xl font-light">
                    Waterdrip Capital&apos;s early investment has been a driving force, enabling Ligo Network to pioneer innovative BTC Layer 2 solution.
                    Their support highlights our shared commitment to evolving digital asset infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>





        {features.map((feature, index: number) => (
          <section
            key={index}
            className={`section-sm mt-4 `}
          >
            <div className="container mt-4">
              <div className="row items-center justify-between">
                <div
                  className={`mb:md-0 mb-6 md:col-5 ${index % 2 !== 0 && "md:order-2"
                    }`}
                >


                  <ImageFallback
                   className="brightness-90"
                    src={feature.image}
                    height={480}
                    width={520}
                    alt={feature.title}
                  />
                </div>
                <div
                  className={`md:col-7 lg:col-6 ${index % 2 !== 0 && "md:order-1"
                    }`}
                >
                  <h2
                    className="mb-4 dark:text-[#4ae52e] font-light"
                    dangerouslySetInnerHTML={markdownify(feature.title)}
                  />
                  <p
                    className="mb-8 text-lg"
                    dangerouslySetInnerHTML={markdownify(feature.content)}
                  />
                  <ul>
                    {feature.bulletpoints.map((bullet: string) => (
                      <li className="relative mb-4 pl-6 text-white " key={bullet}>
                        <FaCheck className={"absolute left-0 top-1.5 dark:text-[#4ae52e]"} />
                        <span dangerouslySetInnerHTML={markdownify(bullet)} />
                      </li>
                    ))}
                  </ul>
                  {feature.button.enable && (
                    <Link
                      className="btn btn-primary mt-5"
                      href={feature.button.link}
                    >
                      {feature.button.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        <CallToAction data={callToAction} /></main>
      <Footer />
    </>
  );
};

export default Home;
