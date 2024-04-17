import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import Header from "../../layouts/partials/Header";
import Footer from "../../layouts/partials/Footer";

const WhitePaper = async () => {
  const data: RegularPage = getListPage("contact/_index.md");
  const { contact_form_action } = config.params;

  return (
    <>
      <Header />

      <main className="dark:bg-darkmode-theme-light">

           <SeoMeta
        title="Ligo Layer 2 Whitepaper"
        meta_title="Ligo Network Layer 2 Whitepaper"
        description="Dive into the innovative consensus and architecture ofP Ligo Network"
        image=""

      />
      <section className="section-sm">
        <div className="container ">

          <div className="max-w-7xl mx-auto py-12">
            <h1 className="text-4xl dark:font-light font-medium text-center  pb-24 text-[#4ae52e] dark:text-[#4ae52e] ">Ligo Layer 2 Whitepaper</h1>

            <div className="lg:mx-40 md:mx-24 mx-8">

              <section className="mt-8 mb-12 ">
                <h2 className="text-3xl font-light mb-6">Executive Summary</h2>
                <p className="text-lg leading-relaxed font-light mb-4">
                  Ligo Layer 2 seeks to resolve significant challenges faced by the Bitcoin network by introducing a second-layer solution designed to enhance scalability and reduce transaction fees. This initiative integrates with the Bitcoin Virtual Machine (BVM), ensuring compatibility and flexibility for developers to create innovative decentralized applications (dApps).
                </p>
                <p className="text-lg leading-relaxed font-light">
                  The whitepaper outlines our decentralized approach that extends Bitcoin&apos;s functionality without compromising its core attributes of security and transparency.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-light mb-6">Detailed Architecture</h2>
                <p className="text-lg leading-relaxed font-light mb-4">
                  Ligo Layer 2 is architected to function as a robust sidechain alongside the main Bitcoin blockchain, utilizing a decentralized consensus mechanism known as Random Pool Proof of Multi-properties (RPPOM). This architecture supports high transaction throughput, reduced latency, and compatibility with existing Ethereum-based applications.
                </p>
                <p className="text-lg leading-relaxed font-light">
                  Our layered architecture separates computation and consensus processes, allowing for efficient resource management and enhanced security.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-light mb-6">Consensus Mechanism and Roles</h2>
                <p className="text-lg leading-relaxed font-light mb-4">
                  The RPPOM consensus mechanism underpinning Ligo Layer 2 supports a dynamic participant model comprising three key roles: Senators, Citizens, and Tourists. Each role has distinct responsibilities and rewards mechanisms designed to sustain network integrity and encourage active participation.
                </p>
                <p className="text-lg leading-relaxed font-light">
                  <strong>Senators:</strong> Act as validators who manage network security and transaction verification. They are elected based on their stake and are responsible for proposing and validating blocks.
                </p>
                <p className="text-lg leading-relaxed font-light">
                  <strong>Citizens:</strong> Perform roles similar to miners in traditional blockchains but operate under a proof of stake model. Citizens support the network through transaction processing and receive rewards based on their level of participation.
                </p>
                <p className="text-lg leading-relaxed font-light">
                  <strong>Tourists:</strong> Users who interact with the network occasionally and contribute to network security through lightweight tasks. Tourists participate mainly through transactions and can earn rewards for various network support activities.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-light mb-6">Tokenomics and Economic Model</h2>
                <p className="text-lg leading-relaxed font-light mb-4">
                  Ligo Layer 2 introduces a dual-token system, with $LIGO serving as the governance token and $wLIGO used for transaction fees. This economic model incentivizes participants to maintain and secure the network, while also facilitating efficient resource allocation.
                </p>
                <p className="text-lg leading-relaxed font-light">
                  The tokens are designed to support a sustainable growth model, with mechanisms in place to encourage long-term holding and participation in governance.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-light mb-6">Security Features</h2>
                <p className="text-lg leading-relaxed font-light mb-4">
                  Ligo Layer 2 employs multiple layers of security protocols to protect against both external attacks and internal fraud. This includes advanced cryptographic techniques, regular security audits, and a multi-signature scheme that ensures all transactions are authenticated and verifiable.
                </p>
                <p className="text-lg leading-relaxed font-light">
                  The architecture also includes automated systems for detecting and responding to security threats in real-time, ensuring the integrity and reliability of the network.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-light mb-6">Future

                  Prospects</h2>
                <p className="text-lg leading-relaxed font-light">
                  As Ligo Layer 2 continues to evolve, it aims to expand its capabilities to support more complex applications and larger transaction volumes. Future developments include enhancements to the consensus algorithm, deeper integration with Bitcoin and other blockchain ecosystems, and continuous improvements to user experience and network performance.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-light mb-6">Conclusion</h2>
                <p className="text-lg leading-relaxed font-light">
                  The introduction of Ligo Layer 2 represents a significant milestone in the evolution of the Bitcoin ecosystem. It addresses fundamental challenges and lays the groundwork for a more scalable, secure, and user-friendly blockchain environment.
                </p>
              </section>
            </div>
          </div>



        </div>
      </section>
      </main>


      <Footer />
    </>
  );
};

export default WhitePaper;
