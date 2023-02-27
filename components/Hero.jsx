import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components";

export const Hero = () => {
  return (
    <section className="-mt-8 sm:-mt-12 p-8 sm:p-12 bg-[linear-gradient(rgba(51,65,85,0.5),rgba(51,65,85,0.5),rgba(51,65,85,0.5),rgba(51,65,85,1)),url(/images/hero.webp)] bg-no-repeat bg-cover">
      <Container extraClasses="grid min-h-[600px] md:min-h-[800px] place-content-center gap-10 justify-items-center text-center">
        <span>
          <h1 className="capitalize max-w-4xl sm:mt-10 gradientize">
            Effortless group management with Groupify.
          </h1>

          <Link
            href="/group"
            className="p-4 px-6 rounded-lg block w-fit shadow-md hover:bg-cyan-800 text-lg bg-cyan-700 mx-auto mt-5"
          >
            Get started
          </Link>
        </span>

        <Image
          className="border border-slate-500 shadow-lg  rounded-md overflow-hidden"
          src="/images/heroImg.png"
          width={600}
          height={600}
          alt="example"
        />
      </Container>
    </section>
  );
};
