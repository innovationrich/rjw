import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How can I find jobs hiring immediately near me?",
    answer:
      "Use our job search platform to find immediate hiring opportunities in your area. We list jobs from warehouses, retail stores, restaurants, and other employers looking to hire today. You can search by location, job type, and filter for immediate hiring positions.",
  },
  {
    question: "Do I need experience for immediate hiring jobs?",
    answer:
      'Many immediate hiring positions don\'t require experience. Entry-level jobs in warehouses, retail, fast food, and customer service often provide on-the-job training. Look for positions marked as "No Experience Required" or "Entry Level."',
  },
  {
    question: "How quickly can I start working after applying?",
    answer:
      "Many employers offering immediate hiring can have you start within 24-48 hours of applying. Some positions offer same-day interviews and next-day start dates, especially in high-demand industries like warehousing and food service.",
  },
  {
    question: "What types of jobs hire immediately?",
    answer:
      "Common immediate hiring jobs include warehouse workers, retail associates, fast food crew members, customer service representatives, delivery drivers, security guards, and cleaning staff. These industries often have high turnover and constant hiring needs.",
  },
  {
    question: "What should I bring to an immediate hiring interview?",
    answer:
      "Bring multiple copies of your resume, a valid ID, Social Security card, and any relevant certifications. Some employers may conduct on-the-spot hiring, so be prepared to fill out paperwork and potentially start orientation immediately.",
  },
  {
    question: "Are immediate hiring jobs legitimate?",
    answer:
      "Yes, many legitimate employers offer immediate hiring, especially in industries with high demand for workers. However, be cautious of scams. Legitimate employers will never ask for money upfront or request personal financial information during the initial application process.",
  },
]

export function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about finding jobs that hire immediately.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
