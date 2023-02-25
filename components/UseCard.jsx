import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Container } from "./Container";

export const UseCard = ({
  carousel,
  caseList,
  background,
  reverse,
  ...rest
}) => {
  const [showing, setShowing] = useState(0);

  const { title1, title2, desc, image } = caseList[showing];

  const handleSkip = useCallback(
    (direction = "next") => {
      setShowing((prev) => {
        if (direction !== "next") {
          //   skip backward
          if (prev > 0) {
            return prev - 1;
          } else {
            return caseList.length - 1;
          }
        } else {
          //   skip forward
          if (prev < caseList.length - 1) {
            return prev + 1;
          } else {
            return 0;
          }
        }
      });
    },
    [caseList]
  );

  useEffect(() => {
    const interval = setInterval(() => handleSkip(), 5000);

    return () => clearInterval(interval);
  }, [handleSkip]);

  return (
    <div className="use-card py-5" {...rest}>
      <Container extraClasses="grid grid-cols-1  md:grid-cols-2 gap-10">
        {reverse ? (
          <>
            <CardText
              background={background}
              carousel={carousel}
              desc={desc}
              handleSkip={handleSkip}
              title1={title1}
              title2={title2}
            />

            <CardImage image={image} reverse={reverse} />
          </>
        ) : (
          <>
            <CardImage image={image} />

            <CardText
              background={background}
              carousel={carousel}
              desc={desc}
              handleSkip={handleSkip}
              reverse={reverse}
              title1={title1}
              title2={title2}
            />
          </>
        )}
      </Container>
    </div>
  );
};

const CardImage = ({ image, reverse }) => (
  <div className={clsx("image ", reverse && "row-start-1 md:col-start-2")}>
    <div className="wrapper m-auto w-full rounded-md overflow-hidden shadow-md shadow-slate-800 border border-slate-500 hover:border-slate-400 hover:shadow-lg transition-all duration-300 ease-out">
      <Image
        className="w-full h-full"
        src={image}
        width={500}
        height={350}
        alt="generated"
      />
    </div>
  </div>
);

const CardText = ({
  title1,
  title2,
  carousel,
  desc,
  handleSkip,
  background = "/images/one.png",
}) => (
  <div
    className="text flex flex-col items-center  md:items-start text-center md:text-start bg-no-repeat bg-contain bg-center"
    style={{ backgroundImage: `url(${background})` }}
  >
    <h3 className="text-cyan-500">{title1}</h3>

    <div>
      <h4>{title2}</h4>
      <p className="text-slate-300 max-w-sm md:w-full">{desc}</p>
    </div>

    {carousel && (
      <div className="flex gap-2">
        <button className="btn dark px-3" onClick={() => handleSkip("prev")}>
          <HiArrowLeft />
        </button>

        <button className="btn dark px-3" onClick={() => handleSkip()}>
          <HiArrowRight />
        </button>
      </div>
    )}

    <Link href="/group" className="btn primary mt-5">
      Try it out
    </Link>
  </div>
);
