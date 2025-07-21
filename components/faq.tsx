interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  faqs?: FAQItem[]
}

const defaultFAQs: FAQItem[] = [
  {
    question: "How quickly can I find a job?",
    answer:
      "Many of our users find job opportunities within 24-48 hours of applying. The key is to apply to multiple positions and have a complete profile.",
  },
  {
    question: "Are these jobs really hiring immediately?",
    answer:
      "Yes! We focus on companies that need to fill positions quickly. Many offer same-day interviews and quick hiring decisions.",
  },
  {
    question: "Do I need experience for these jobs?",
    answer:
      "We have opportunities for all experience levels, including many entry-level positions that provide on-the-job training.",
  },
  {
    question: "How do I apply for jobs?",
    answer:
      "Simply click on any job listing to view details and application instructions. Most applications can be completed online in just a few minutes.",
  },
  {
    question: "Are there remote work opportunities?",
    answer: "Yes! We feature both in-person and remote job opportunities across various industries and skill levels.",
  },
]

export function FAQ({ faqs = defaultFAQs }: FAQProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
