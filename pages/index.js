import { Container, Modal } from "@/components";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Groupify - Effortless Grouping</title>
        <meta
          name="description"
          content="Streamline your group projects with Groupify - the effortless way to
            group teams."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="-mt-8 sm:-mt-12 p-8 sm:p-12 bg-[linear-gradient(rgba(51,65,85,0.5),rgba(51,65,85,0.5),rgba(51,65,85,0.5),rgba(51,65,85,1)),url(/images/hero.webp)] bg-no-repeat bg-cover">
        <Container extraClasses="grid min-h-[600px] md:min-h-[800px] place-content-center gap-10 justify-items-center text-center">
          <h1 className="capitalize max-w-4xl text-transparent mx-auto bg-gradient-to-b from-slate-50 to-slate-500 bg-clip-text fill-transparent">
            Streamline your group projects with Groupify - the effortless way to
            group teams.
          </h1>

          <Image
            className="border border-slate-500 shadow-lg  rounded-md overflow-hidden"
            src="/images/heroImg.png"
            width={600}
            height={600}
            alt="example"
          />
        </Container>
      </header>

      <main>
        <Container extraClasses="py-10">
          <h2>How to use</h2>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            temporibus delectus molestiae eaque magnam nostrum saepe nam non
            voluptates, omnis, quidem doloribus, obcaecati dicta porro
            recusandae iure harum minus. Voluptatibus!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam
            assumenda debitis tempore ad dolores, incidunt molestiae delectus
            rem non et nihil doloribus ullam odio, dolor natus magni quod at!
            Commodi suscipit quibusdam voluptatum itaque recusandae voluptatibus
            asperiores sint ducimus natus deleniti laboriosam similique
            reprehenderit omnis culpa quam excepturi, aperiam eveniet
            reiciendis, incidunt nobis porro ullam. Iste laudantium voluptates
            ducimus reprehenderit repellat quam eveniet? Placeat quos beatae
            similique aperiam, blanditiis recusandae voluptates. Atque numquam
            doloremque debitis consectetur delectus. Quas, harum. Aliquid
            sapiente obcaecati earum, in illo ullam ratione itaque? Doloremque
            quia consequuntur adipisci laborum labore libero. Error eos delectus
            officia. In commodi vero dolorum laudantium, doloribus animi,
            adipisci quibusdam architecto eos enim tenetur quos ratione sequi
            explicabo minima beatae. Voluptatum sit ipsum aspernatur repudiandae
            dolor laudantium iure odio facere expedita voluptatibus ad optio
            nihil cumque nemo animi sunt reprehenderit, modi veniam quibusdam.
            Dolorum itaque magni atque sunt autem consequuntur officia corporis
            eligendi neque aliquid quasi non sint, quis distinctio mollitia
            ducimus esse quos cum voluptas? Consectetur quas obcaecati, modi,
            nulla dolorum et omnis recusandae mollitia soluta exercitationem
            iure dignissimos hic aperiam ullam quos vero, reprehenderit eligendi
            ex natus quae blanditiis alias laudantium fugit ipsam. Soluta quam
            cumque, a dignissimos saepe facere deleniti rerum ducimus placeat
            deserunt recusandae at aliquid libero ipsum. Placeat quos minus
            soluta quibusdam in corrupti, nisi libero dignissimos? Vitae
            provident molestias nulla necessitatibus quos illo aliquid totam
            saepe hic beatae consequatur enim dolore, facere tempore cupiditate
            sint illum voluptatibus a ratione? Veritatis deleniti sapiente harum
            quo maxime odio, amet autem veniam dolore officia nemo accusamus.
            Accusantium quod porro asperiores, minus maiores culpa harum
            laudantium ratione, eligendi cumque quisquam quae. Voluptatem quis
            omnis officia ratione eaque, repellat accusamus vel cupiditate
            eligendi deleniti harum ex sapiente at sed, ipsa iure minus optio
            beatae blanditiis vitae repudiandae. Nemo placeat inventore
            recusandae sunt. Porro aliquam ea eligendi rerum nam facilis impedit
            voluptatum recusandae ullam, dolores cumque itaque corrupti soluta
            pariatur maxime, reiciendis saepe perferendis corporis. Beatae
            assumenda nemo reprehenderit quibusdam ab eius iusto, eum mollitia
            facilis impedit suscipit maiores fugit, nesciunt neque quae pariatur
            tempore natus et optio placeat vel amet? Illo natus quae cum neque
            sit est ullam, hic quia officia dolorem porro nemo veritatis sed
            cupiditate odio iste blanditiis possimus molestiae explicabo
            doloribus. Quos, inventore quasi! Voluptates, ea modi, pariatur
            vitae quos impedit velit, rerum quidem amet magnam eius quae placeat
            maxime nihil perferendis vero saepe! Velit aut iure cum, eveniet
            sint fugiat minus suscipit harum omnis rem, ad at ipsa voluptatem
            optio minima molestias dolores explicabo earum. Aliquid vero
            deleniti totam sunt adipisci, beatae blanditiis obcaecati cumque
            exercitationem assumenda natus nam facere saepe vel optio esse
            corporis recusandae in. Laborum quos nostrum repudiandae deserunt
            praesentium sunt enim, dignissimos nobis quo animi possimus iste
            sequi impedit explicabo vitae aliquid necessitatibus molestiae
            tenetur ratione, debitis consequuntur! Nam porro ab aliquid modi
            assumenda quos, doloribus voluptatibus maiores dolorem iusto non
            nisi nulla iure mollitia labore. Doloremque saepe tenetur et cum
            dolorum perspiciatis labore, id, sit praesentium alias at unde
            veniam accusantium.
          </p>
        </Container>
      </main>
    </>
  );
}
