import PublicHeader from "@/shared/components/PublicHeader";

const HomePage = () => (
  <main>
    <PublicHeader />
    <div className="flex h-screen flex-col items-center justify-center gap-6 p-6 md:px-18 md:pb-10 md:text-center lg:gap-10 lg:px-32 lg:pb-16">
      <h1 className="text-4xl leading-tight font-bold md:max-w-3xl lg:max-w-4xl lg:text-5xl">
        Learn Studio is a{" "}
        <span className="text-primary-accent">Learning Management System</span>{" "}
        for instructors and students
      </h1>
      <p className="text-primary-grey text-lg md:max-w-4xl lg:max-w-3xl lg:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
        laudantium modi officiis repellat voluptas! Dicta eos harum molestiae
        vel voluptate?
      </p>
    </div>
  </main>
);
export default HomePage;
