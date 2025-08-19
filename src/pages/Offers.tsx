import { LayoutRenderer, type LayoutConfig } from 'duhkha-wave-test'

export default function Offers() {
  const layoutConfig: LayoutConfig = [
    {
      type: "testimonials",
      props: {
        title: "What Our Customers Say",
        testimonials: [
          {
            author: "Sarah Johnson",
            text: "Wave has completely transformed how I manage my small business finances. The interface is intuitive and the features are exactly what I need.",
            authorImage: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            authorPosition: "Owner, Johnson Consulting",
            featured: true
          },
          {
            author: "Michael Chen",
            text: "As a freelancer, I was spending hours on bookkeeping. Wave made it simple and automated. I can focus on my clients now.",
            authorImage: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            authorPosition: "Freelance Designer",
            featured: true
          },
          {
            author: "Emily Rodriguez",
            text: "The invoicing feature alone has saved me so much time. My clients love the professional look and the automatic payment reminders.",
            authorImage: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            authorPosition: "Marketing Consultant",
            featured: false
          },
          {
            author: "David Thompson",
            text: "I've tried many accounting software solutions, but Wave is the only one that doesn't overwhelm me with unnecessary features.",
            authorImage: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            authorPosition: "Restaurant Owner",
            featured: false
          },
          {
            author: "Lisa Park",
            text: "The expense tracking is fantastic. I can snap a photo of receipts and everything is organized automatically. Game changer!",
            authorImage: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            authorPosition: "Event Planner",
            featured: false
          },
          {
            author: "James Wilson",
            text: "Wave's payroll feature has streamlined our entire HR process. Easy to use and incredibly reliable.",
            authorImage: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            authorPosition: "Small Business Owner",
            featured: false
          },
          {
            author: "Amanda Foster",
            text: "The customer support team is amazing. They helped me migrate from our old system without any data loss.",
            authorImage: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            authorPosition: "Retail Store Manager",
            featured: false
          }
        ]
      }
    },
    {
      type: "notification",
      props: {
        icon: "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
        title: "New Feature Available",
        message: "We've added a new feature to the platform. Please check it out.",
        variant: "feature"
      }
    },
    {
      type: "herobanner",
      props: {
        styleObject: "Wave",
        name: "Wave Offers",
        title: "Exclusive Offers for Your Business",
        description: "Explore special offers and discounts from our partners, curated for small business owners like you.",
        image: "https://s3-alpha-sig.figma.com/img/c663/b655/2fda96d238b4c53906ede4e24322f434?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kt4fpVUiyRkHrrDq7bDqi0Ze2I~kZiwl9UQm3iZEehM5P5bt63kk5A3y0AYjp4iCMqdMMVtVPj8wxAXflDfl-7DIMfmATHW4OSC36eUOA27QM5VzHkbwQ9AN80Ndwyc4xn4lgF0-sClhJSH~VXJRpGlCo5AhrOtIGQ8SzTcZQRRkibr1DZLLhiJQ8SSGLmoRn05Zls8iR~gWKows0GsoBfNRoSMjP4t0a-WMXCwco3Tw2oO1SWY0LhY~iPnfSRCYAtLoGHcid8mbwXLyVHEuDxTZ10Wt3uqEuiTgJkrQ4htLvrkaJ~mczHc-qQQkl6DKujixfZOlK4aixPlljIjKwA__",
        buttons: [
          {
            analyticsId: "explore-offers",
            text: "Explore All Offers",
            href: "https://www.waveapps.com/explore-offers"
          },
          {
            analyticsId: "learn-more",
            text: "Learn More",
            variant: "secondary",
            href: "https://www.waveapps.com/learn-more"
          }
        ],
        logos: [
          { src: "https://cdn.freebiesupply.com/images/large/2x/amazon-logo-black-transparent.png", alt: "Amazon" },
          { src: "https://cdn.freebiesupply.com/images/large/2x/google-logo-black-transparent.png", alt: "Google" },
          { src: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo-2011-2012.png", alt: "Microsoft" },
          { src: "https://cdn.freebiesupply.com/logos/large/2x/oracle-2-logo-png-transparent.png", alt: "Oracle" },
          { src: "https://cdn-icons-png.flaticon.com/512/20/20673.png", alt: "Facebook" }
        ],
        topSectionId: "hero-banner",
        trackingName: "hero-banner"
      }
    },
    {
      type: "filters",
      props: {
        title: "Topics"
      }
    },
    {
      type: "featuregrid",
      props: {
        title: "Unlock Your Business Potential",
        features: [
          {
            type: "main",
            logoSrc: "https://b3119788.smushcdn.com/3119788/wp-content/uploads/2023/05/driversnote-logo-stor-e1684266336741.png?lossy=1&strip=1&webp=1",
            title: "Your Automatic Mileage Tracker",
            description: "Get IRS-compliant mileage logs. Perfect for reimbursements & deductions. No more spreadsheets or paperwork.",
            button: {
              analyticsId: "feature-grid-main",
              text: "Get Started Now",
              href: "https://www.waveapps.com/get-started"
            },
            backgroundColor: "#000ba3ff"
          },
          {
            type: "optional",
            imageSrc: "https://s3-alpha-sig.figma.com/img/fe0d/fafe/8ebc4b57448d5612c59fe2a109d0a307?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XIWcBHKkhaQIt~WaWhnahstEtZIaSk1ZNUdv~k8xUwZ3IOq77vItFTIpgvDWGDQVg2Bvuj6hG7aTNWfNjxfotBmM7HTJH957qG9JGCp7p70BrXUBK603Xea1~BS468QzoVLZkssDYEVYL9SJJNMZN4KMgMzfrLZKf5hDtj3dDS6VJ6pNDrA-YG1UZ6I-7QMLS2tWuzClFc1jfWxMC6uTJhoroEn5fQvgtmCUPUOS1wXJAQMuHMNbJNuYdnNNwM2NQsRYb8OID0DEAwVhdT2CbD999cXNKjTzdCwVXY~O4HqWqIvvgVx-cyu44Iw8WqYGliYZmbyWaEy56DDZ8bv-iw__",
            description: "Easily track and report your business trips.",
            styleObject: "Wave"
          },
          {
            type: "optional",
            imageSrc: "https://s3-alpha-sig.figma.com/img/fb5a/5335/92db81feb6ed8ee7edf71e0be14716e5?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JSkp1Cjjsxkx5qjWLZQTP6FdgvB2pqsKMZ8OrJu6Nv~9tSoltubvr9GY4mz2q1GpYaXIFhf6J2U8uvh6FT8~y~kBbP5uUzr8gSgXGG1PGbToIt1LMw7AKOx6HOU~uxjV9pehtTtHZeFKaZT9GBaTp2Rnuo0Gm74LFx6J8NAmamBfP4tjiSHOBB6~5vW2wa8ki1PcNC6dI7XF80Q61VcVYd9L9LVoWCsFgcpBCgBxwYsIy4pjPKgw1i0Ml7i96yF81eGcnHhAuRkW25OTqsE6uTqYFnD6qkPtUTc~M7RZS7VgyHX~9SmlzwZDFWS9SVqkbU4TuI9OHY05yR6efKxMmQ__",
            description: "Get access to capital for building, growing and thriving.",
            styleObject: "Wave"
          },
          {
            type: "main",
            logoSrc: "https://www.clio.com/wp-content/uploads/2017/08/New-Fundbox-Primary-Logo.png",
            title: "It's time for banking that puts you first.",
            description: "Whether you're handling today's priorities or preparing for what's next, Fundbox keeps your cash flow one step ahead.",
            button: {
              analyticsId: "feature-grid-fundbox",
              text: "Get Started Now",
              href: "https://www.waveapps.com/get-started"
            },
            backgroundColor: "#007EFF"
          },
          {
            type: "main",
            logoSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_of_EQ_Bank.svg/2560px-Logo_of_EQ_Bank.svg.png",
            title: "Make bank with smart banking.",
            description: "Spend, save, and earn with always-on high interest and no fees on everyday banking. Enough with all the take. It's time to make. Make bank.",
            button: {
              analyticsId: "feature-grid-bank",
              text: "Get Started Now",
              href: "#"
            },
            backgroundColor: "#d6bd72ff",
            titleColor: "#000",
            descriptionColor: "#000",
            buttonColor: "#000"
          },
          {
            type: "optional",
            imageSrc: "https://s3-alpha-sig.figma.com/img/01d9/190c/1f7cc6e0e9fa920d1e5f8e53ba45900a?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r4j1x48hnVYPqKGp4vHuMpT2yZk67M5CFwtyB82gHZBagJEs0kVKnqtDuistzLIQtE4laD0gA0ZEYLAFSZ3ACNM960~YU1DbdVsbO9ka524QhDRCe5bjfoQHc4ixzCTHbXqzUmv3hpplGhSx5ODydAvaf7kA-63mkzcqP~MOaYI7L7o8e1DhOtdi8im1t1o8rRmO7hPFEtDWn0~hKCMsjFXshUsvuMUI-yJlg76FBd6iajn8tf6k-1kKZoWa5u5zZn21cMsDXSLGiSr23eju~bx45B~4uXllc3E3LOjOedVhixNWe56BwTqOElzDWAfktEhenXER~iWnCWLfZSMJKw__",
            description: "Rated one of Forbes Best Banks in Canada 5 years in a row.",
            styleObject: "Wave",
            shouldRenderOnMobile: false
          }
        ],
        topSectionId: "feature-grid-section",
        sectionId: "feature-grid",
        trackingName: "feature-grid-tracking",
        filterKeys: ["tax"],
        countryFilters: ["US"]
      }
    },
    {
      type: "faq",
      props: {
        title: "Frequently Asked Questions",
        styleObject: "Wave",
        initialExpandedState: [0],
        faqs: [
          {
            question: "Is Wave's software something I need to install?",
            answer: "Wave's tools are web-based, so you just need an Internet connection and browser—no installation is necessary for our online software! You can access all of Wave's features from any device with internet access.<br><br>This means you can manage your finances from anywhere, whether you're at your office, working from home, or traveling. All your data is automatically synced and backed up in the cloud, so you never have to worry about losing important financial information or manual data transfers between devices."
          },
          {
            question: "How do I get started with Wave?",
            answer: "Getting started with Wave is simple and free! Just <a href='https://www.waveapps.com/signup' target='_blank' style='color: #182127; text-decoration: underline;'>sign up for an account</a>, verify your email, and you can immediately begin using our accounting software. No credit card required, and you can upgrade to paid features anytime."
          },
          {
            question: "Is Wave really free?",
            answer: "Yes! Wave's core accounting and invoicing features are completely free forever. We make money through optional paid services like <a href='https://www.waveapps.com/payments' target='_blank' style='color: #182127; text-decoration: underline;'>payment processing</a> (2.9% + 30¢ per transaction) and payroll services. You'll never be forced to upgrade."
          }
        ],
        filterKeys: ["home"],
        countryFilters: ["US"],
        topSectionId: "faq-section",
        trackingName: "faq-component"
      }
    }
  ]

  return (
    <LayoutRenderer config={layoutConfig} />
  )
}