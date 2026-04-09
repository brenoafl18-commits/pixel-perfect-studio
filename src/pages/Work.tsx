import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";

const Work = () => {
  return (
    <Layout>
      <section className="px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteContent.projects.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="group block"
            >
              <div className="bg-cinza rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-[0.98]">
                <span className="text-muted-foreground text-sm">
                  {project.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Work;
