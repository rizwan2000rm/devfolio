import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Rizwan Memon | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-1/2">
        <div className="container max-h-96 mx-auto flex justify-evenly text-primary-400">
          <div className="flex flex-col justify-between">
            <nav>
              <a href="">Github</a>
              <a href="">LinkedIn</a>
              <a href="">Twitter</a>
            </nav>
            <div className="place-self-end">
              <h3 className="font-display text-3xl">Hello I am</h3>
              <h1 className="font-bold font-serif text-7xl leading-12">
                Rizwan
                <br />
                Memon
              </h1>
              <p className="font-bold text-xl m-0">Software Developer</p>
            </div>
          </div>
          <div className="">
            <img
              className="max-h-96"
              src="/potrait.png"
              alt="Potrait with a cartoon effect"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
