import React from "react";
import ILoading from "../../Interfaces/ILoading";
import Lottie from "react-lottie";
import * as loadingAnimation from "../../assets/LottieAnimations/loading.json";
import * as errorAnimation from "../../assets/LottieAnimations/error.json";
import * as noData from "../../assets/LottieAnimations/no-data.json";
import * as init from "../../assets/LottieAnimations/init.json";
import "./Loading.scss";

export default function Loading({ state, statusTxt }: ILoading) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData:
      state === "loading"
        ? loadingAnimation
        : state === "error"
        ? errorAnimation
        : state === "init"
        ? init
        : noData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="loading-wrapper">
      <div>
        <Lottie options={defaultOptions} height={200} width={200} />
        <b className={`${state}`}>{statusTxt}</b>
      </div>
    </div>
  );
}
