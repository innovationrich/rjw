import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AffiliateDisclosurePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Affiliate Disclosure</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            This website, SideHustles FromHome.com, may contain affiliate links. This means that when you click on some
            links and make a purchase, we may receive a small commission at no extra cost to you.
          </p>
          <p>
            We only recommend products and services that we genuinely believe will add value to our readers. The
            commissions earned help support the maintenance and growth of this website, allowing us to continue
            providing valuable content.
          </p>
          <p>
            Your support through these links is greatly appreciated and helps us keep SideHustles FromHome.com a free
            resource for everyone.
          </p>
          <p>If you have any questions regarding this, please feel free to contact us.</p>
        </CardContent>
      </Card>
    </div>
  )
}
