"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Default content shown when no "faqs" prop is supplied
const defaultFaqs = [
  {
    question: "How can I find jobs hiring immediately?",
    answer:
      "Focus on industries with high turnover like retail, fast food, warehousing, and gig economy jobs. Look for 'hiring immediately' signs, attend local job fairs, and use online job boards with filters for urgent hiring or quick apply options.",
  },
  {
    question: "What types of jobs are typically available for immediate hire?",
    answer:
      "Common roles include warehouse associates, customer service representatives, retail sales associates, food service workers, delivery drivers, and general laborers. These positions often require less specialized experience and have faster hiring processes.",
  },
  {
    question: "Do I need experience to get a job quickly?",
    answer:
      "Not always. Many immediate hire positions are entry-level and offer on-the-job training. Highlight transferable skills like reliability, strong work ethic, communication, and eagerness to learn on your resume and during interviews.",
  },
  {
    question: "How can I prepare for a quick interview?",
    answer:
      "Be ready to discuss your availability, why you're interested in the role, and how your skills align. Dress professionally, bring copies of your resume, and be prepared to fill out an application on the spot. Practice concise answers to common questions.",
  },
  {
    question: "Are there remote jobs that hire immediately?",
    answer:
      "Yes, some remote customer service, data entry, and virtual assistant roles can have quick hiring processes. Look for companies that offer 24/7 support or project-based work, as they often need to fill positions rapidly.",
  },
]

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  /** Optional: pass your own list, otherwise the defaults above are used */
  faqs?: FAQItem[]
}

export function FAQ({ faqs }: FAQProps) {
  const items = faqs ?? defaultFaqs // fallback prevents "undefined.map" crash
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
