import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import SectionHeadline from "./SectionHeadline";
const AllQuestions = [
  {
    question: "Q: How do I get started?",
    answer:
      "A: Take the plunge and experience the amazing benefits of martial arts - with the flexibility of no long-term commitment and free intro lessons. Contact us today to learn more about signing up and jumpstart your journey!",
    isOpen: false,
  },
  {
    question: "Q: Which martial art should I study?",
    answer:
      "A: It depends on your goals and interests. Different martial arts emphasize different skills, such as kicking, punching, grappling, and so forth. Think about what type of skills you want to learn and then research different martial arts to find out which one would best suit your needs.",
    isOpen: false,
  },
  {
    question: "Q: How much does it cost?",
    answer:
      "A: Your intro lessons are FREE! For memberships, our dues are very reasonable when you consider the extraordinary credentials of our teaching staff and the quality of our facility. Stop in to watch a class and discuss specific rates for your training. Our long-time members tell us that the confidence, calmness, and success skills they've learned while training are priceless!",
    isOpen: false,
  },
  {
    question: "Q: Will I learn to defend myself?",
    answer:
      "A:  Taking self-defense classes can help you learn the skills you need to defend yourself. You will learn techniques for blocking, punching, and kicking, as well as strategies for avoiding and de-escalating dangerous situations.",
    isOpen: false,
  },
  {
    question: "Q: What is a fair monthly dues rate?",
    answer:
      "A: It depends on what the school offers. Martial arts schools  charge  between $90 - $500 per month, and each school should offer benefits that justify the price. ",
    isOpen: false,
  },
  {
    question: "Q: How many martial arts are there?",
    answer:
      "A:While there are 180 styles of martial arts, the most common you might have heard of are Judo, Karate, MMA, Kung Fu, Tai Chi, Krav Maga, and Jiu-Jitsu. They have been developed in areas such as Japan, China, and Israel.",
    isOpen: false,
  },
  {
    question: "Q: Where can I learn more about the different martial arts?",
    answer:
      "A:You can find a lot of information about martial arts online. There are videos, articles, and websites dedicated to different martial arts styles and techniques. You can also find local martial arts classes or clubs in your area to learn more about the different martial arts.",
    isOpen: false,
  },

  {
    question: "Q: How long does it take to get a black belt?",
    answer:
      "A: Achieving a black belt requires dedication and hard work, but the rewards you reap are invaluable. With commitment and practice, you'll not only become better at your martial art, but also gain greater physical and mental fitness, close friendships, and important life skills.",
    isOpen: false,
  },
  {
    question: "Q: How many days does it take to learn martial arts?",
    answer:
      "A: Learning the basics of a martial art can take several months to a year, while mastering advanced techniques and skills can take several years of dedicated practice. However, progress is not always linear, and there may be times when progress seems slow or stagnant.",
    isOpen: false,
  },
  {
    question: "Q: What is martial arts career?",
    answer:
      "A: About the Career. Martial arts is a traditional form of combat practised for self defence, competitions, law enforcement purposes, entertainment, physical, mental, and spiritual development. It is believed to be mainly of East origin and is classified into armed and unarmed arts.",
    isOpen: false,
  },
];

const Faqs = () => {
  const [questions, setQuestions] = useState(AllQuestions);

  const toggleQns = (index) => {
    setQuestions((prevQns) =>
      prevQns.map((q, i) =>
        i === index ? { ...q, isOpen: !q.isOpen } : { ...q, isOpen: false }
      )
    );
  };

  return (
    <div className='wrapper section-padding flex flex-col items-center gap-5'>
      <SectionHeadline h2='Frequently Asked Questions' />

      <div className=' w-[60%] overflow-x-hidden'>
        {questions.map((q, index) => (
          <div key={index} className=''>
            <span
              onClick={() => toggleQns(index)}
              className='text-xl  p-5 cursor-pointer gap-10 flex items-center justify-between border-t'
            >
              {q.question}:
              {q.isOpen ? (
                <h2>
                  <IoMdArrowDropdown />
                </h2>
              ) : (
                <h2>
                  <IoMdArrowDropup />
                </h2>
              )}
            </span>
            {q.isOpen && <p className=' mb-5 px-5'>{q.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
