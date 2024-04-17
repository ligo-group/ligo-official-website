import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import Header from "../../layouts/partials/Header";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import Footer from "../../layouts/partials/Footer";

const WhitePaper = async () => {
  const data: RegularPage = getListPage("contact/_index.md");

  return (
    <>
      <Header />

      <main className="dark:bg-darkmode-theme-light">
        <SeoMeta
          title="Ligo Layer 2 Staking"
          meta_title="Ligo Network Layer 2 Stake and Earn $igo"
          description="Dive into our staking products Ligo Network"
          image=""
        />
        <section className="section-sm">
          <div className="container">
            <div className="max-w-7xl mx-auto sm:px-12 px-4 py-12">

              <h1 className="text-4xl dark:font-light font-medium text-center pb-4 text-[#4ae52e] dark:text-[#4ae52e]">Download Desktop App</h1>


              <div className="justify-center align-center text-center m-auto pb-24">

                <Link
                  className="btn  btn-outline-primary w-auto"
                  href="https://github.com/ligo-group/ligo-core/releases"
                  target="_blank"
                  rel="noopener"
                >
                  <FaGithub className="w-4 h-4 mr-4 inline-block" />
                  Latest release
                </Link>
              </div>

              <h1 className="text-4xl dark:font-light font-medium text-center pb-24 text-[#4ae52e] dark:text-[#4ae52e]">Ligo Mainnet Reward Guide</h1>


              <div className="lg:mx-40 md:mx-24  mx-8">
                <section className="mt-8 mb-12 ">
                  <h2 className="text-3xl font-light mb-6">Reward Guide - English</h2>
                  <ol className="list-decimal pl-4 space-y-3 text-lg leading-relaxed font-light">
                    <li>Citizen registration fee is 1,000,000 $iGO.</li>
                    <li>Senator registration fee is 10,000,000 $iGO. To officially become a senator, a citizen&apos;s vote is required. The voting power of citizens equals the asset weight in the citizen pool. More than 2/3 of the total network assets must vote in favor for one to become a new senator.</li>
                    <li>The first phase supports BTC cross-chain deposits (other inscribed assets like $Ligo will be implemented within this month April, and asset management partners are accelerating the launch).</li>
                    <li>$iGO is the functional token on the LIGO #BTC L2 blockchain. 4.5 trillion are obtained by mining block producers. Mining rewards are distributed as follows:
                      <ul className="list-disc pl-8 mt-2 space-y-2">
                        <li>20% for the technical development and operations team for seventy years,</li>
                        <li>30% to Senators,</li>
                        <li>50% to Citizens and their supporters.</li>
                        <li>Of this, Citizens can draw no more than 20% from the block reward (out of the 50% allocated to them).</li>
                      </ul>
                      Specific mining and block production earnings are as follows: The first year’s reward per block is 142,694 IGOs, decreasing by 20% each year until the seventieth year when it reaches 0 IGOs.
                    </li>
                    <li>Ordinary users can earn block rewards through voting. Voting rewards are distributed based on the asset weight of the voting users. The formula is:
                      <small>(User&apos;s staked amount (IGO, BTC, etc.)) / (Total staked by that Citizen) * Block reward * 50% * (1 - Citizen&apos;s reward draw ratio)</small>
                      The staking weight of BTC or other cross-chain assets is determined based on the ratio provided by the price feeders.
                    </li>
                    <li>To incentivize Citizens to refer users, Citizens who refer users can receive 0-20% (the ratio is set by the user, with the system default being 10%) of the pool rewards as a management fee.</li>
                    <li>Senators evenly split a 30% fixed block reward. Cross-chain withdrawals require approval from 2/3 of the senators to be completed.</li>
                  </ol>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-light mb-6">激励指南 - 中文</h2>
                  <ol className="list-decimal pl-4 space-y-3 text-lg leading-relaxed font-light">
                    <li>公民注册费用1000000 $iGO；</li>
                    <li>议员注册费用10000000 $iGO 需要公民投票才能正式成为议员，公民投票的权重等于公民矿池的资产权重，需超过2/3的全网总资产投票通过才能成为新议员；</li>
                    <li>第一期支持BTC跨链充值（其他铭文资产如$Ligo将在本月内实现，资产管理合作伙伴正在加快上线进程）；</li>
                    <li>$iGO是LIGO链上的功能代币，4.5万亿由挖矿出块者获得，挖矿奖励分配如下：
                      <ul className="list-disc pl-8 mt-2 space-y-2">
                        <li>20%技术开发运维团队七十年费用，</li>
                        <li>30%议员，</li>
                        <li>50%公民及其支持者，</li>
                        <li>其中，公民可以从块奖励中抽取不超过20%（从分配给他们的50%中）。</li>
                      </ul>
                      具体的挖矿产块收益如下：第一年每块奖励142694 IGO，每年减少20%，直到第七十年减至0 IGO。
                    </li>
                    <li>普通用户可以通过投票获得区块奖励。投票奖励根据投票用户的资产权重分配。公式为：
                      <small>（用户质押数（IGO、BTC等））/（该Citizen质押总数）* 区块奖励 * 50% * （1 - citizen质押抽成比例）</small>
                      BTC或其他跨链资产的质押权重根据喂价人提供的比例确定。
                    </li>
                    <li>为了激励Citizen推荐用户，Citizen推荐用户可以获得0-20%（比例自行设定，系统默认为10%）的矿池奖励作为管理费。</li>
                    <li>议员平均分配30%的固定块奖励。跨链提现需要2/3议员的批准才能完成。</li>
                  </ol>
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
