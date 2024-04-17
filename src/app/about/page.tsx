import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;

  return (
    <>

      <Header />
      <main className="dark:bg-darkmode-theme-light">
        <SeoMeta
          title={title}
          meta_title={meta_title}
          description={description}
          image={image}
        />
        <section className="section-sm min-h-screen">
          <div className="container">

            <section className="section-sm pt-0 mt-0">
              <div className="container">
              <div className="lg:mx-40 md:mx-24 mx-8">
                  {image && (
                    <ImageFallback
                      className="mx-auto mb-6 rounded-lg"
                      src={image}
                      width={300}
                      height={300}
                      alt={title}
                    />
                  )}
                  <div className="text-center  mt-12 mb-12">
                    <h1 className="text-4xl font-light  mb-12  dark:text-[#4ae52e]">About Ligo Network</h1>
                    <p className="text-2xl  font-light leading-relaxed">
                      Inspired by the groundbreaking discovery of gravitational waves, Ligo Network represents a pivotal leap in blockchain technology. Just as gravitational waves opened a new window into the cosmos, Ligo Network unveils unprecedented possibilities for the Bitcoin ecosystem through its innovative Layer 2 solutions.
                    </p>
                  </div>
                  <div className="mb-12">
                    <h2 className="text-3xl font-light mb-6">Our Mission</h2>
                    <p className="text-lg font-light leading-relaxed">
                      Ligo Network is committed to enhancing Bitcoin&apos;s utility and scalability. Our technology facilitates seamless, efficient, and decentralized applications on Bitcoin, vastly expanding its use cases. With up to 30,000 transactions per second, we transform Bitcoin into a highly scalable and interactive platform, ready to host a diverse range of applications including DeFi, NFTs, and more.
                    </p>
                  </div>
                  <div className="mb-12">
                    <h2 className="text-3xl font-light mb-6">Innovation at the Core</h2>
                    <p className="text-lg font-light leading-relaxed">
                      Leveraging our EVM-compatible Layer 2 blockchain, Ligo Network ensures robust decentralization and security. Our platform is not just a network; it’s a breeding ground for innovation, enabling developers and enterprises to build on the stalwart foundation of Bitcoin with the flexibility and speed previously seen only in Ethereum.
                    </p>
                  </div>
                  <div className="mb-12">
                    <h2 className="text-3xl font-light mb-6">Community and Growth</h2>
                    <p className="text-lg font-light leading-relaxed">
                      At Ligo Network, we are building more than technology; we are cultivating a community. With over 10,000,000 projected Web3 users and a thriving ecosystem of more than 10,000 dApps, our network is set to become a central hub in the blockchain space. Backed by strategic partnerships and a global community, we are on a rapid trajectory towards reshaping the future of decentralized applications.
                    </p>
                  </div>
                  <div className="mb-12">
                    <h2 className="text-3xl font-light mb-6">Join Us on Our Journey</h2>
                    <p className="text-lg font-light leading-relaxed">
                      Dive into the next generation of blockchain technology with Ligo Network. Join our community to be part of a transformative movement, harness the power of Bitcoin like never before, and help us build a decentralized future that echoes the fundamental principles of blockchain: transparency, security, and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </section>
      </main>
      <Footer />
    </>


  );
};

export default About;
