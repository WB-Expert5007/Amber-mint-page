import React from "react"
import settings from "../../../config/settings.json"
import Image from "../image"
import { ExpandedHeroTree } from "../../../lib/locales"
import useLocales from "../../hooks/useLocales"
import useHeroStatuses from "../../hooks/useHeroStatuses"
import bgBlueCurve from "../../../config/images/bg-blue-curve.svg"
import bgGradientCurve from "../../../config/images/bg-gradient-curve.svg"

const Hero: React.FC<{ heroTree: ExpandedHeroTree }> = ({ heroTree }) => {
  const { locale } = useLocales()

  const { saleStatus, userStatus } = useHeroStatuses()
  const hero = heroTree[saleStatus][userStatus]

  return (
    <div className="bg-background">
      <div
        style={{
          backgroundImage: `url(${bgGradientCurve})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${bgBlueCurve})`,
            backgroundSize: "80% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="px-[8rem] sm:px-[8rem] flex justify-center items-center mx-auto pt-[6.6rem] backdrop-blur-[90px] min-h-[100vh] text-center sm:text-start"
            style={{
              backgroundColor: "rgba(217, 217, 217, 0.01)",
            }}
          >
            <div className="space-y-8 lg:w-[58%] xl:w-[38%]">
              <h1 className="text-3xl font-bold text-white">{locale?.title}</h1>
              <p className="text-sm text-white">{locale?.description}</p>
              <div className="bg-white active:bg-slate-200 hover:bg-slate-100 | cursor-pointer rounded-3xl p-4 w-max flex justify-between items-center space-x-4 mx-auto md:mx-0">
                <div
                  className="rounded-full p-[0.15rem]"
                  style={{
                    background:
                      "linear-gradient(42deg, rgb(255, 188, 221) 0%, rgb(255, 211, 202) 50%, rgb(6, 164, 255) 100%)",
                  }}
                >
                  <div className="rounded-full p-[0.15rem] bg-white">
                    <div className="border-2 border-black rounded-full p-2 bg-[#E3E8FF]">
                      <Image src={settings.cardIcon} alt="card" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{locale?.mint3DNFT}</h4>
                  <p className="text-sm">{locale?.billedOnce}</p>
                </div>
              </div>
            </div>
            <Image
              src={settings.manNft}
              alt="nft-demo"
              className="h-[80vh] hidden md:block"
            />
          </div>
        </div>
      </div>

      <div className="w-[40%] md:w-[55%] mx-auto xl:w-[60%]">
        <div className="pt-12 flex justify-between text-center lg:text-start">
          <div className="w-[100%] lg:w-[50%] space-y-4">
            <h1 className="text-3xl font-bold">{locale?.recentlyMinted}</h1>
            <div className="flex items-center justify-center lg:justify-start space-x-8">
              <button
                className="btn btn-sm bg-white btn-outline capitalize rounded-2xl text-xs gap-1 font-bold"
                style={{
                  border: "1px solid rgba(57, 19, 184, 0.2)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
                {locale?.prevNFT}
              </button>
              <button
                className="btn btn-sm bg-white btn-outline capitalize rounded-2xl text-xs gap-1 font-bold visited:text-slate-50"
                style={{
                  border: "1px solid rgba(57, 19, 184, 0.2)",
                }}
              >
                {locale?.nextNFT}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-[50%] hidden lg:block">
            <p className="text-sm font-semibold">{locale.mintDescription}</p>
          </div>
        </div>

        <div className="mt-12 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-2">
          <div className="rounded-3xl bg-[#06A4FF] w-[180px] h-[320px] flex justify-center items-center relative">
            <Image
              src={settings.manNft}
              alt="nft-card"
              className="w-[100%] h-[100%]"
            />
            <div className="flex items-center flex-col absolute bg-black/40 w-full bottom-0 rounded-b-3xl h-[48%] backdrop-blur-lg text-white">
              <h5 className="text-xl font-semibold mt-5">DJ Smokeout</h5>
              <p className="text-[0.86em] my-2">Rarity: 335.5</p>
              <button
                className="btn btn-outline btn-sm bg-white gap-2 font-semibold capitalize rounded-full"
                style={{
                  border: "1px solid rgba(57, 19, 184, 0.2)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
          <div className="rounded-3xl bg-accent w-[180px] h-[320px] flex justify-center items-center relative">
            <Image
              src={settings.manNft}
              alt="nft-card"
              className="w-[100%] h-[100%]"
            />
            <div className="flex items-center flex-col absolute bg-black/40 w-full bottom-0 rounded-b-3xl h-[48%] backdrop-blur-lg text-white">
              <h5 className="text-xl font-semibold mt-5">DJ Smokeout</h5>
              <p className="text-[0.86em] my-2">Rarity: 335.5</p>
              <button
                className="btn btn-outline btn-sm bg-white gap-2 font-semibold capitalize rounded-full"
                style={{
                  border: "1px solid rgba(57, 19, 184, 0.2)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
          <div
            className="rounded-3xl w-[180px] h-[320px] flex justify-center items-center relative"
            style={{
              background:
                "linear-gradient(224deg, rgb(110, 204, 255) 0%, rgb(255, 211, 202) 70%, rgba(255, 188, 221, 0) 100%)",
            }}
          >
            <Image
              src={settings.manNft}
              alt="nft-card"
              className="w-[100%] h-[100%]"
            />
            <div className="flex items-center flex-col absolute bg-black/40 w-full bottom-0 rounded-b-3xl h-[48%] backdrop-blur-lg text-white">
              <h5 className="text-xl font-semibold mt-5">DJ Smokeout</h5>
              <p className="text-[0.86em] my-2">Rarity: 335.5</p>
              <button
                className="btn btn-outline btn-sm bg-white gap-2 font-semibold capitalize rounded-full"
                style={{
                  border: "1px solid rgba(57, 19, 184, 0.2)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
          <div className="rounded-3xl bg-[#06A4FF] w-[180px] h-[320px] flex justify-center items-center relative">
            <Image
              src={settings.manNft}
              alt="nft-card"
              className="w-[100%] h-[100%]"
            />
            <div className="flex items-center flex-col absolute bg-black/40 w-full bottom-0 rounded-b-3xl h-[48%] backdrop-blur-lg text-white">
              <h5 className="text-xl font-semibold mt-5">DJ Smokeout</h5>
              <p className="text-[0.86em] my-2">Rarity: 335.5</p>
              <button
                className="btn btn-outline btn-sm bg-white gap-2 font-semibold capitalize rounded-full"
                style={{
                  border: "1px solid rgba(57, 19, 184, 0.2)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
