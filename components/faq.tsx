import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQProps {
  faqs?: { question: string; answer: string }[]
}

export function FAQ({ faqs }: FAQProps) {
  const defaultFaqs = [
    {
      question: "How quickly can I find a job?",
      answer:
        "Many jobs listed on our platform are for immediate hire. Depending on your qualifications and the employer's needs, you could start working within days.",
    },
    {
      question: "Are there jobs available without prior experience?",
      answer:
        "Yes, we feature a variety of entry-level positions and jobs that offer on-the-job training. Look for listings marked 'no experience required' or 'entry-level'.",
    },
    {
      question: "Can I find remote jobs?",
      answer:
        "Use our search filters to specifically look for 'remote' positions to find opportunities you can do from home.",
    },
    {
      question: "How do I apply for a job?",
      answer:
        "Each job listing includes instructions on how to apply. This might be a direct link to the employer's application portal or contact information.",
    },
    {
      question: "Is there a fee to use this service?",
      answer: "No, our job search platform is completely free for job seekers.",
    },
  ]

  const faqsToDisplay = faqs && faqs.length > 0 ? faqs : defaultFaqs

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about finding jobs quickly.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl py-8">
          <Accordion type="single" collapsible className="w-full">
            {faqsToDisplay.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
