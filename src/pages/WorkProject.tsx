import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";

const WorkProject = () => {
  const { projectId } = useParams();
  const project = siteContent.projects.find((p) => p.id === projectId);

  if (!project) return <Navigate to="/work" />;

  return (
    <Layout>
      {/* Hero image */}
      <div className="h-[80vh] bg-cinza flex items-center justify-center">
        <span className="text-muted-foreground">Imagem principal do projeto</span>
      </div>

      {/* Project info */}
      <section className="px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <h1 className="text-3xl md:text-4xl font-bold italic">{project.title}</h1>
          <p className="text-base md:text-lg leading-relaxed text-foreground/80">
            {project.description}
          </p>
        </div>

        {/* Gallery */}
        <div className="space-y-4 mb-24">
          {/* Full width images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-cinza rounded-xl aspect-[4/3] flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Imagem editável</span>
            </div>
            <div className="bg-cinza rounded-xl aspect-[4/3] flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Imagem editável</span>
            </div>
          </div>
          <div className="bg-cinza rounded-xl aspect-video flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Imagem editável (full width)</span>
          </div>
          <div className="bg-cinza rounded-xl aspect-video flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Imagem editável (full width)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-cinza rounded-xl aspect-[4/3] flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Imagem editável</span>
            </div>
            <div className="bg-cinza rounded-xl aspect-[4/3] flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Imagem editável</span>
            </div>
          </div>
        </div>

        {/* Ficha Técnica */}
        <div className="max-w-md">
          <h3 className="text-sm font-bold mb-6">{project.ficha}</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold">Creative Direction</p>
              <p className="text-sm text-muted-foreground">{project.credits.creativeDirection}</p>
            </div>
            <div>
              <p className="text-sm font-bold">Design</p>
              <p className="text-sm text-muted-foreground">{project.credits.design}</p>
            </div>
            <div>
              <p className="text-sm font-bold">Motion Design</p>
              <p className="text-sm text-muted-foreground">{project.credits.motionDesign}</p>
            </div>
            <div>
              <p className="text-sm font-bold">Strategy & Copywriting</p>
              <p className="text-sm text-muted-foreground">{project.credits.strategyCopywriting}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkProject;
