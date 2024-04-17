import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import Header from "../../layouts/partials/Header";
import Footer from "../../layouts/partials/Footer";

const Team = async () => {

  return (
    <>
      <Header />

      <SeoMeta
        title="Ligo Network Team"
        meta_title="Ligo Network Layer 2 Whitepaper"
        description="Dive into the innovative consensus and architecture ofP Ligo Network"
        image=""

      />
      <section className="section-sm">
        <div className="container">
          <div className="max-w-7xl mx-auto px-12 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl dark:font-light font-medium text-center mb-12 text-[#4ae52e] dark:text-[#4ae52e]">Meet Our Team</h1>
              <p className="mt-3">The innovative minds behind our project.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Lisa Bechina", role: "Global CEO", imgSrc: "https://via.placeholder.com/150", description: "Lisa is a technology leader and serial entrepreneur. Previous fintech and web3 found." },
                { name: "Dr. Simon XU", role: "CTO", imgSrc: "https://via.placeholder.com/150", description: "Simon is a fintech entrepreneur with 10 years R&D experience in Blockchain." },
                { name: "Dr. Vincent", role: "R&D", imgSrc: "https://via.placeholder.com/150", description: "Dr. Vincent has a master in Blockchain, he won the ETH Global Competitiosn twice as a champion." },
                { name: "Vincent Lieu", role: "Business Developer", imgSrc: "https://via.placeholder.com/150", description: "Vincent is an experienced project manager in the web3 industry." },
                { name: "David He", role: "Co-founder", imgSrc: "https://via.placeholder.com/150", description: "HP ES Manager, over 15 years Web2 & Web3 Business Development for Start-up and MNCs" },
                { name: "Gerish He", role: "India Market CEO", imgSrc: "https://via.placeholder.com/150", description: "Girish  specialized in enterprise digital solution." }

              ].map(member => (
                <div key={member.name} className="rounded-lg shadow p-6 space-y-3">
                  <div className="text-center">
                    <h3 className="text-xl font-medium ">{member.name}</h3>
                    <p className="text-sm font-light text-[#4ae52e]">{member.role}</p>
                    <p className="text-md font-light ">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Team;
