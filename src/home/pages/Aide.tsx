import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import faqCategories from "../../data/dummyaide";

type FAQSectionProps = {
  title: string;
  questions: string[];
};

const FAQSection = ({ title, questions }: FAQSectionProps) => {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      {questions.map((question, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50"
        >
          <span className="text-gray-700">{question}</span>
          <ChevronDown size={20} className="text-gray-400" />
        </div>
      ))}
    </div>
  );
};

function Aide() {
  const [activeSection, setActiveSection] = useState<string>("Générale");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    faqCategories.forEach((category) => {
      sectionRefs.current[category.title] = document.getElementById(
        category.title
      );
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "Générale";
      faqCategories.forEach((category) => {
        const section = sectionRefs.current[category.title];
        if (section && section.getBoundingClientRect().top < 50) {
          currentSection = category.title;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (title: string) => {
    const section = sectionRefs.current[title];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(title);
    }
  };

  return (
    <>
      <section className="text-white bg-[#085F28] py-20 lg:py-32 mb-12 flex items-center flex-col gap-5">
        <h1 className="text-3xl font-bold">Besoin d'aide ?</h1>
        <p className="text-center md:w-[37rem] text-pretty">
          Si vous avez besoin d'une aide quelconque, répondez à notre FAQ et
          faites nous en part.
        </p>
      </section>
      <section className="max-w-6xl px-4 py-8 mx-auto">
        <div className="flex flex-col-reverse gap-10 lg:flex-row ">
          <div className="lg:w-3/4 lg:pr-8">
            {faqCategories.map((category) => (
              <div key={category.title} id={category.title}>
                <FAQSection
                  title={category.title}
                  questions={category.questions}
                />
              </div>
            ))}
          </div>
          <div className="mt-8 lg:w-1/4 lg:mt-0">
            <div className="sticky p-4 bg-white rounded-lg shadow-sm top-4">
              <h3 className="mb-4 font-semibold">Sections</h3>
              {faqCategories.map((category) => (
                <button
                  key={category.title}
                  className={`block w-full text-left py-2 ${
                    activeSection === category.title
                      ? "text-green-600 font-semibold underline"
                      : "text-gray-600 hover:text-green-600"
                  }`}
                  onClick={() => scrollToSection(category.title)}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aide;
