import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";

const About = () => {
  const { about } = siteContent;

  return (
    <Layout>
      {/* Hero image */}
      <div className="h-[80vh] bg-cinza flex items-center justify-center">
        <span className="text-muted-foreground">Imagem editável</span>
      </div>

      {/* Quem Somos */}
      <section className="px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">{about.title}</h1>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
            {about.description}
          </p>
        </div>

        {/* Language toggle placeholder */}
        <div className="flex gap-8 mb-32">
          <span className="text-sm font-bold cursor-pointer">PT</span>
          <span className="text-sm text-muted-foreground cursor-pointer">EN</span>
        </div>

        {/* Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {about.team.map((member) => (
            <div key={member.name} className="flex gap-4">
              <div className="bg-cinza rounded-2xl w-72 h-72 flex-shrink-0 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Foto editável</span>
              </div>
              <div className="flex flex-col justify-between py-2">
                <div>
                  <h2 className="text-2xl font-bold">{member.name}</h2>
                  <p className="text-lg">{member.role}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
