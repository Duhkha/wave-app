import { LayoutRenderer, type LayoutConfig } from 'duhkha-wave-test'
import 'duhkha-wave-test/dist/index.css'

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
          authorImage: "https://thispersondoesnotexist.com/",
          authorPosition: "Owner, Johnson Consulting",
          featured: true
        },
        {
          author: "Michael Chen",
          text: "As a freelancer, I was spending hours on bookkeeping. Wave made it simple and automated. I can focus on my clients now.",
          authorImage: "https://thispersondoesnotexist.com/",
          authorPosition: "Freelance Designer",
          featured: true
        },
        {
          author: "Emily Rodriguez",
          text: "The invoicing feature alone has saved me so much time. My clients love the professional look and the automatic payment reminders.",
          authorImage: "https://thispersondoesnotexist.com/",
          authorPosition: "Marketing Consultant",
          featured: false
        },
        {
          author: "David Thompson",
          text: "I've tried many accounting software solutions, but Wave is the only one that doesn't overwhelm me with unnecessary features.",
          authorImage: "https://thispersondoesnotexist.com/",
          authorPosition: "Restaurant Owner",
          featured: false
        },
        {
          author: "Lisa Park",
          text: "The expense tracking is fantastic. I can snap a photo of receipts and everything is organized automatically. Game changer!",
          authorImage: "https://thispersondoesnotexist.com/",
          authorPosition: "Event Planner",
          featured: false
        },
        {
          author: "James Wilson",
          text: "Wave's payroll feature has streamlined our entire HR process. Easy to use and incredibly reliable.",
          authorImage: "https://thispersondoesnotexist.com/",
          authorPosition: "Small Business Owner",
          featured: false
        },
        {
          author: "Amanda Foster",
          text: "The customer support team is amazing. They helped me migrate from our old system without any data loss.",
          authorImage: "https://thispersondoesnotexist.com/",
          authorPosition: "Retail Store Manager",
          featured: false
        }
        ],
        countryFilters: ["CA"]
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
      style_object: "Wave",
      props: {
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
        analytics: {
          top_section_id: "hero-banner",
          tracking_name: "hero-banner"
        }
      }
    },
    {
      type: "filters",
       props: {
      title: "Topics"}
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
          style_object: "Wave",
          shouldRenderOnMobile: false
        },
        {
          type: "optional",
          imageSrc: "https://s3-alpha-sig.figma.com/img/fb5a/5335/92db81feb6ed8ee7edf71e0be14716e5?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JSkp1Cjjsxkx5qjWLZQTP6FdgvB2pqsKMZ8OrJu6Nv~9tSoltubvr9GY4mz2q1GpYaXIFhf6J2U8uvh6FT8~y~kBbP5uUzr8gSgXGG1PGbToIt1LMw7AKOx6HOU~uxjV9pehtTtHZeFKaZT9GBaTp2Rnuo0Gm74LFx6J8NAmamBfP4tjiSHOBB6~5vW2wa8ki1PcNC6dI7XF80Q61VcVYd9L9LVoWCsFgcpBCgBxwYsIy4pjPKgw1i0Ml7i96yF81eGcnHhAuRkW25OTqsE6uTqYFnD6qkPtUTc~M7RZS7VgyHX~9SmlzwZDFWS9SVqkbU4TuI9OHY05yR6efKxMmQ__",
          description: "Get access to capital for building, growing and thriving.",
          style_object: "Wave",
          shouldRenderOnMobile: false
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
          style_object: "Wave",
          shouldRenderOnMobile: false
        }
      ],
      analytics: {
        top_section_id: "feature-grid-section",
        section_id: "feature-grid",
        tracking_name: "feature-grid-tracking"
      }}
    },
    {
      type: "features",
       props: {
      styleObject: "light",
      title: "At Wave, we know thriving looks different for everyone.",
      description: "It's what drives you to start your own business, or join a new team, or get out of bed every morning and put in the work.",
      features: [
        {
          title: "Easy Integration",
          description: "Seamlessly integrate with your existing workflow and tools.",
          image: "https://s3-alpha-sig.figma.com/img/8915/326d/0bcd2159632387dd8127fc6a8acdae55?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DajyvcUHWO9iYcDI~ZMoL2aGR7ipWP7zfPW6oK8uVMbqtF8bazIoo9PkwIdAcJ8A85HnXRgjgZW2BpJx7f2O9SFt6QdUlBDQaUdRJXug2tQIUq9wX7RmQDT5D7np8a04rtwfbV6v2wGVSdt0rpWPRHIBhSZDmt1xW~lCwHJrBRpPo9tQ6cZxJtD0NHxQAQ8Z~O~GTQf1~pkSAyIASKe4uw1TgZsR7p8fXwQyzAtB~mJuvKyE9bh0aa4vumSEOUxSlcfiayEwTikKOXJ8FmsOEyX4QE8ll9xxY-4B31mx4nxCslcA0t~29xOzgFBMRPwGHwW4TjaiD0INuLqiiJo22Q__"
        },
        {
          title: "Real-time Analytics",
          description: "Get instant insights into your business performance and trends.",
          image: "https://s3-alpha-sig.figma.com/img/e9bc/9fe7/1cfaf28e52ecebeaf7f394ccdb34f0eb?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EtTwmtJQ9~tikqGXCzqGIud-KWeq4Q5kaobo5RoFtd1qEGiTlj~SCL4tIhUU-AvVqjXRuTlg~DubDC0vxuTgJVqvMuu98ieeWXuxu4YCjU4Y7J-Yp~TLAD7GNlOsaHVrSxJv5-Q17MQtU-fvT4raaq83oJ3aI9vvEIIxiVaFk3hwCA7Y~JHkPB4XF2lis6jGf8i0pImYshS06EATC4gWcbaO9Tgd-SR6OdOIC4DOd-idNMqPYYGVhOLfxu1KXoySZEs6AacmRmRUm~P~hPOYpKS~Fe0PptqDATZjxjpTtVB3N4t~BJfwmkVTnU6F3HQwPi9hhTQmzOzUbIwxqj1dZw__"
        },
        {
          title: "Secure & Reliable",
          description: "Bank-level security ensures your data is always protected.",
          image: "https://s3-alpha-sig.figma.com/img/d5fa/37ed/c284945200af747a02ab0d8b274ba434?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Be1YdcyldBaEHtQ7evDboUXHCTfU5J7-krcW1LoxDM1ZDiz47krdR6dOWWzgnrpAcX754zOHnzgyOa05MQY9CcRkdkmd-XuPM3qk0eMl-wxZeds114kgswhyMULoT-gOA65AIKXNF9eOiDdnyZmBHG4AYEBfja-Nr2kdJaVwu00ZL95pnE4YKd2hQIoo2EBw40NrsH7YXb9Cr6lVq6g1AtiiBuIdAaHg~UniSuHGy8Ab0lV177ErDGjZPb0JqeErcYMiLtPxJpiqln4o1aKUgwe153c6tvZqGmB~gA2CgjkDl4inqA8ETdWF5CkbMyzbcW0aQr6y5Tj~jPZep6F~uw__"
        },
        {
          title: "Financial Control",
          description: "Take control of your finances with our powerful tools.",
          image: "https://s3-alpha-sig.figma.com/img/814f/5251/3b78c5ec78f3c38d6489120f22ee79d9?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OqIdNbR4bEbwx~z2dTo9sQRObnim9WD2Pij1iLI81gs7dU-ehhWvbxfE2WhijK2YPKPXJZzO9fC-TcnX-ZGNiTKi7WHFJUFDACr6phVdLTJ7luCJK1WxGPA-nNHq0ejkp4o8FfHX-vK0OkwzLI91VNK5vjTgtK3katmfRWsV8yob-GAEpYZ46rmigycdIATUi6NejafFxtwVQdb2OgfyYmiSNk2rXIMXu62Aj81A9mB89tkNWCGEwrRauI4Qqeb~fbBUHovhfaylIwrL8O4fW77WWBsNRD-b6-21i5NjV4a770J7ate~hx~xknB~n5O5GYviPSdJQOzqudGqah1qyA__"
        },
        {
          title: "Simplified Accounting",
          description: "Automate your accounting tasks and save time.",
          image: "https://s3-alpha-sig.figma.com/img/8407/a8a2/a577da3a6c903146708181312cd9f10a?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E5XqSpfRstJ-TANqF0LiPNp-ihq1pjzNGFLQLss5-2NIUDIt2vtB1PA-ElX9Jy7pdLhLtouC963ThCWiangQU8VjCWwtRhE~87ywqzN1vfeKJQqYpa8q2JIwvsrajifOgr8BSRScr9p6ogcqGuxRhCcOi-Ze0-N6jRXVQnMJsywvN1rusV0MPzokBTj8YCiQ5hOFeifAnbmp3dffaKiwIvzRNFjv5Upp32u1ey8OUQs3Y09~Nv05QN9h-ENhGQMi7joKnd9veRXHodr~psXzxLN63GbOlDjSGIDsifMmVo-FagYHoK5CvzyVQoQP2W-3UhI7cFjN440-FjTxjCWrjA__"
        },
        {
          title: "Empower Your Business",
          description: "Tools and resources to empower your business growth.",
          image: "https://s3-alpha-sig.figma.com/img/5af8/4abb/25d9124a3ee532dab3c8ccbfa36bf6c6?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tTKpB55tSCXGX5GXo7nWexAvaq9uCCpm-bOmfDQAEVUZh96J6na8GfL7jh4~f~I39Asek0fxhAso-O7Hq5SVuGt10winuMp81vzn0DfyOFG3O1PqYCjG0cFNO0zwQEG06-R8NCqXTzMJGZ8CrjYZZWHOJ7ldRxOaUd5kYFq5aBA9sTBuiMNLSfJcX4r9kX12auRFEKw0mUaPeKfqPnpQsVHKW~-fuO8rh~7-S1bcXmmjoqn-63XFtVmoWw~BAgQS8tnFKQCpGGWGYoht98cwUMDkoFcbYXN4qkRoLRzVtqRHOFbCbvoKi~GKRUf-OmBrf4syspFtb4gMELChaTzpSw__"
        }
      ]}
    },
    {
      type: "casestudy",
       props: {
      name: "WAVE NEW FEATURE",
      title: "Seal the deal with Wave's new deposits feature",
      description: "You can now request deposits through your Wave estimates if you're a Pro Plan or online payments user.",
      buttons: [
        {
          text: "Get Started",
          href: "https://www.waveapps.com/get-started",
          analyticsId: "get-started",
          variant: "primary"
        },
        {
          text: "Learn More",
          href: "https://www.waveapps.com/learn-more",
          analyticsId: "learn-more",
          variant: "secondary"
        }
      ],
      image: "https://s3-alpha-sig.figma.com/img/0567/b0b3/1041ce295ad40afa86cd16421d50dabc?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jFKEmnVPyiiwxS7KArM~Cc6bo3rcGjWUVR5P3OvVwvevKznJv-2qOL07XPGrQOK95R3ux7o~~RC9dTwQlIUdO~7Iw4gfXEP0RCfdD-QFQMjNeaudxakk41ZTWxziux5LvejJad0abf6Jd883-YTodgwAkmMJERyhxBSM7bQCE7aFZXqocwx8UEgm4-EX2rK3nZ9oaoRYwunuzeHNZzWXLytNV4DuRoLXTiqYiwpRZewh1LL4WJhRqizGCBDCLYVtg5G4zHocZuC7zASdp--G6DN~Uv5hURP0OSBGqpyHqBkqZclCecEnSo1XBiVDrYrN1TGZk4Vq-18b-Bh0EUt4ng__",
      logos: [
        { src: "https://cdn.freebiesupply.com/images/large/2x/amazon-logo-black-transparent.png", alt: "Amazon" },
        { src: "https://cdn.freebiesupply.com/images/large/2x/google-logo-black-transparent.png", alt: "Google" },
        { src: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo-2011-2012.png", alt: "Microsoft" },
        { src: "https://cdn.freebiesupply.com/logos/large/2x/oracle-2-logo-png-transparent.png", alt: "Oracle" },
        { src: "https://cdn-icons-png.flaticon.com/512/20/20673.png", alt: "Facebook" }
      ],
      styleObject: "Wave",
      analytics: {
        top_section_id: "case-study-section",
        tracking_name: "case-study-tracking"
      }}
    },
    {
      type: "heroblurb",
       props: {
      name: "hero-blurb",
      title: "Supporting small business owners",
      description: "Wave exists to help our customers and teams reach their goals with confidence and ease.",
      imageUrl: "https://s3-alpha-sig.figma.com/img/fb5a/5335/92db81feb6ed8ee7edf71e0be14716e5?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JSkp1Cjjsxkx5qjWLZQTP6FdgvB2pqsKMZ8OrJu6Nv~9tSoltubvr9GY4mz2q1GpYaXIFhf6J2U8uvh6FT8~y~kBbP5uUzr8gSgXGG1PGbToIt1LMw7AKOx6HOU~uxjV9pehtTtHZeFKaZT9GBaTp2Rnuo0Gm74LFx6J8NAmamBfP4tjiSHOBB6~5vW2wa8ki1PcNC6dI7XF80Q61VcVYd9L9LVoWCsFgcpBCgBxwYsIy4pjPKgw1i0Ml7i96yF81eGcnHhAuRkW25OTqsE6uTqYFnD6qkPtUTc~M7RZS7VgyHX~9SmlzwZDFWS9SVqkbU4TuI9OHY05yR6efKxMmQ__",
      styleObject: "Wave",
      analytics: {
        top_section_id: "hero-blurb-section",
        tracking_name: "hero-blurb-tracking"
      },
      imagePosition: "left",
      buttons: [
        {
          analyticsId: "hero-get-started",
          text: "Get started now",
          href: "https://www.waveapps.com/register"
        },
        {
          analyticsId: "hero-learn-more",
          text: "Learn more",
          href: "https://www.waveapps.com/blog/seal-the-deal-with-waves-new-deposits-feature",
          variant: "secondary"
        }
      ]}
    },
    {
      type: "fullwidthcarousel",
       props: {
      title: "Featured Carousel",
      cards: [
        {
          logo: {
            src: "https://upload.wikimedia.org/wikipedia/commons/1/15/Wave_logo_RGB.png",
            alt: "Bluevine Logo"
          },
          title: "Bluevine collaborates with Stripe to offer invoicing and payment links",
          description: "This collaboration allows Bluevine users to create and share professional invoices and payment links, enabling them to accept multiple payment methods and receive funds directly into their Bluevine accounts.",
          image: "https://s3-alpha-sig.figma.com/img/4dba/48d6/b45348669f83b357af6eece1af8d2a0d?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=opeHyUcoItxyFiR3zBH~EKnGI10RyKjkXyk2HEV3~BYsipKZ6FXRWInUjab6x5gGnwnlQ1L7OvGlbHCKPIw7e~7Zr1BKBeUo2GEHhdEmdbFLzAM53hDIpVL0z9Yk1t4mK9llNW8g~VzPOCeMXnaPBbuGCK0EwjhPpgPqWFn-N~UTEqBQXWwEBGOHIQuJoyoeKG3jIgzm3HC~dNUDDROYB79dmPgkePfGNQuTA4Fdg9QyeCo9P66lxR8iTkuiPXzKrUb5oFV2nM6yffU-~9nNPTZeFMVrObrsly3Y4nzuXK10pm1CrKdWapDhvC7fOgH4F8OvKbVVEgrlfkYzaWbQoQ__",
          topSectionId: "storybook-top-section",
          trackingName: "storybook-tracking-name",
          filterKeys: ["banking", "home"],
          countryFilters: ["US"],
          styleObject: "Bluewine",
          buttons: [
            {
              analyticsId: "learn-more",
              text: "Learn More",
              href: "#",
              variant: "primary"
            },
            {
              analyticsId: "get-started",
              text: "Get Started",
              href: "#",
              variant: "secondary"
            }
          ]
        },
        {
          logo: {
            src: "https://upload.wikimedia.org/wikipedia/commons/1/15/Wave_logo_RGB.png",
            alt: "Bluevine Logo"
          },
          title: "Bluevine collaborates with Stripe to offer invoicing and payment links",
          description: "This collaboration allows Bluevine users to create and share professional invoices and payment links, enabling them to accept multiple payment methods and receive funds directly into their Bluevine accounts.",
          image: "https://s3-alpha-sig.figma.com/img/4dba/48d6/b45348669f83b357af6eece1af8d2a0d?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=opeHyUcoItxyFiR3zBH~EKnGI10RyKjkXyk2HEV3~BYsipKZ6FXRWInUjab6x5gGnwnlQ1L7OvGlbHCKPIw7e~7Zr1BKBeUo2GEHhdEmdbFLzAM53hDIpVL0z9Yk1t4mK9llNW8g~VzPOCeMXnaPBbuGCK0EwjhPpgPqWFn-N~UTEqBQXWwEBGOHIQuJoyoeKG3jIgzm3HC~dNUDDROYB79dmPgkePfGNQuTA4Fdg9QyeCo9P66lxR8iTkuiPXzKrUb5oFV2nM6yffU-~9nNPTZeFMVrObrsly3Y4nzuXK10pm1CrKdWapDhvC7fOgH4F8OvKbVVEgrlfkYzaWbQoQ__",
          topSectionId: "storybook-top-section",
          trackingName: "storybook-tracking-name",
          filterKeys: ["integrations", "lending", "home"],
          countryFilters: ["US"],
          styleObject: "Bluewine",
          buttons: [
            {
              analyticsId: "learn-more",
              text: "Learn More",
              href: "#",
              variant: "primary"
            },
            {
              analyticsId: "get-started",
              text: "Get Started",
              href: "#",
              variant: "secondary"
            }
          ]
        },
        {
          logo: {
            src: "https://upload.wikimedia.org/wikipedia/commons/1/15/Wave_logo_RGB.png",
            alt: "Wave Logo"
          },
          title: "Wave Invoicing and Payments",
          description: "Get paid faster with professional invoices and secure online payments. Wave helps you manage your finances all in one place.",
          image: "https://s3-alpha-sig.figma.com/img/4dba/48d6/b45348669f83b357af6eece1af8d2a0d?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=opeHyUcoItxyFiR3zBH~EKnGI10RyKjkXyk2HEV3~BYsipKZ6FXRWInUjab6x5gGnwnlQ1L7OvGlbHCKPIw7e~7Zr1BKBeUo2GEHhdEmdbFLzAM53hDIpVL0z9Yk1t4mK9llNW8g~VzPOCeMXnaPBbuGCK0EwjhPpgPqWFn-N~UTEqBQXWwEBGOHIQuJoyoeKG3jIgzm3HC~dNUDDROYB79dmPgkePfGNQuTA4Fdg9QyeCo9P66lxR8iTkuiPXzKrUb5oFV2nM6yffU-~9nNPTZeFMVrObrsly3Y4nzuXK10pm1CrKdWapDhvC7fOgH4F8OvKbVVEgrlfkYzaWbQoQ__",
          topSectionId: "storybook-top-section",
          trackingName: "storybook-tracking-name",
          filterKeys: ["tax", "home"],
          countryFilters: ["US"],
          style_object: "Wave",
          buttons: [
            {
              analyticsId: "create-invoice",
              text: "Create an Invoice",
              href: "#",
              variant: "primary"
            }
          ]
        },
        {
          logo: {
            src: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo-2011-2012.png",
            alt : "Microsoft Logo"
          },
          title: "Microsoft 365 for Business",
          description: "Empower your team with the tools they need to succeed. Get Word, Excel, PowerPoint, and more, all with cloud storage and advanced security.",
          image: "https://s3-alpha-sig.figma.com/img/4dba/48d6/b45348669f83b357af6eece1af8d2a0d?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=opeHyUcoItxyFiR3zBH~EKnGI10RyKjkXyk2HEV3~BYsipKZ6FXRWInUjab6x5gGnwnlQ1L7OvGlbHCKPIw7e~7Zr1BKBeUo2GEHhdEmdbFLzAM53hDIpVL0z9Yk1t4mK9llNW8g~VzPOCeMXnaPBbuGCK0EwjhPpgPqWFn-N~UTEqBQXWwEBGOHIQuJoyoeKG3jIgzm3HC~dNUDDROYB79dmPgkePfGNQuTA4Fdg9QyeCo9P66lxR8iTkuiPXzKrUb5oFV2nM6yffU-~9nNPTZeFMVrObrsly3Y4nzuXK10pm1CrKdWapDhvC7fOgH4F8OvKbVVEgrlfkYzaWbQoQ__",
          topSectionId: "storybook-top-section",
          trackingName: "storybook-tracking-name",
          filterKeys: ["insurance", "biz_create"],
          countryFilters: ["US"],
          styleObject: "Microsoft",
          buttons: [
            {
              analyticsId: "learn-more",
              text: "Learn More",
              href: "#",
              variant: "primary"
            }
          ]
        },
        {
          logo: {
            src: "https://upload.wikimedia.org/wikipedia/commons/1/15/Wave_logo_RGB.png",
            alt: "Bluevine Logo"
          },
          title: "Bluevine collaborates with Stripe to offer invoicing and payment links",
          description: "This collaboration allows Bluevine users to create and share professional invoices and payment links, enabling them to accept multiple payment methods and receive funds directly into their Bluevine accounts.",
          topSectionId: "storybook-top-section",
          trackingName: "storybook-tracking-name",
          filterKeys: ["international_money_transfer"],
          countryFilters: ["US"],
          styleObject: "Bluevine",
          onClick: {
            analyticsId: "card-click",
            href: "https://www.waveapps.com",
            openInNewWindow: true,
            text: "Learn More"
          }
        }
      ],
      analytics: {
        section_id: "featured-carousel",
        top_section_id: "top-section"
      },
      name: "featured-carousel"
    }
    },
    {
      type: "podcastcarousel",
       props: {
      title: "Featured Podcasts",
      cards : [
        {
          videoId: "Ndnpc-jEoMg",
          name: "Wave Shorts",
          title: "How a freelance illustrator uses Wave",
          thumbnailUrl: "https://i.ytimg.com/vi/Ndnpc-jEoMg/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAwN5nFImAreklBApu_CK5-xvSyZA",
          filterKeys: ["home", "tax", "biz_create"],
          countryFilters: ["US"]
        },
        {
          videoId: "KLxzc3ELl0c",
          name: "Wave Shorts",
          title: "What would you do with $1M?",
          thumbnailUrl: "https://i.ytimg.com/vi/KLxzc3ELl0c/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAAizDrbcmihUUaYGuIJGjVfVTh2Q",
          filterKeys: ["home", "lending", "banking"],
          countryFilters: ["US"]
        },
        {
          videoId: "UAVxhCorSYQ",
          name: "Wave Shorts",
          title: "Wave Feature Launch: Deposits on Estimates",
          thumbnailUrl: "https://i.ytimg.com/vi/UAVxhCorSYQ/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLD6CyXxukMgdVjVcZiqrCAjoYZNLA",
          filterKeys: ["home", "integrations"],
          countryFilters: ["US"]
        },
        {
          videoId: "Ndnpc-jEoMg-2",
          name: "Wave Shorts",
          title: "How a freelance illustrator uses Wave",
          thumbnailUrl: "https://i.ytimg.com/vi/Ndnpc-jEoMg/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAwN5nFImAreklBApu_CK5-xvSyZA",
          filterKeys: ["home", "insurance"],
          countryFilters: ["US"]
        },
        {
          videoId: "KLxzc3ELl0c-2",
          name: "Wave Shorts",
          title: "What would you do with $1M?",
          thumbnailUrl: "https://i.ytimg.com/vi/KLxzc3ELl0c/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAAizDrbcmihUUaYGuIJGjVfVTh2Q",
          filterKeys: ["home", "international_money_transfer"],
          countryFilters: ["US"]
        },
        {
          videoId: "UAVxhCorSYQ-2",
          name: "Wave Shorts",
          title: "Wave Feature Launch: Deposits on Estimates",
          thumbnailUrl: "https://i.ytimg.com/vi/UAVxhCorSYQ/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLD6CyXxukMgdVjVcZiqrCAjoYZNLA",
          filterKeys: ["home", "website_scheduling", "business_phone_messaging"],
          countryFilters: ["US"]
        }
      ],
      analytics: {
        section_id: "podcast-carousel"
      }}
    },
    {
      type: "colorfulcarousel",
       props: {
      title: "Colorful Showcase",
      description: "Explore our vibrant collection",
      cards: [
        {
          title: "14 tips to manage stress as a small business owner",
          intro: "Promotion",
          image: "https://s3-alpha-sig.figma.com/img/861e/d481/94949968dcd253ce961112968bc6b5ea?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hr4UdlWOwgLb7Vjj49E6SI~ohWwORuMR6BIzeW5IZjP-9-qjx-94GMc59g48IqPt8Gz4O46yL~eGCOFXkPmSpIGpLBkY35eMIz9nE~pBebZDVzLGLodAV1OyalzpE9HjA28LphdXmIqIICQUWgZhzu~gpn-UB0v4L4XSgRVz2GkVeBOnBqwwvkqp03Mtl6hmVA4vjDnBKVJQ0AfD1YF2BF627gIxw5YDhGGj82j7uTjXJiUb0OD8k1PCnFKb95aLpgFZVaI600YjOLVP-jtx3oHMrS2w6CK61~9lCmX3jLc8F7xRpzL7NgnJ4XosijUGyuNMCfs6tDAPEqtBcLPWlQ__",
          link: "https://waveapps.com",
          variant: "blue",
          topSectionId: "colorful-carousel",
          ariaLabel: "Card 1",
          filterKeys: [],
          countryFilters: []
        },
        {
          title: "How to keep track of business expenses: 4 easy steps",
          intro: "Promotion",
          image: "https://s3-alpha-sig.figma.com/img/861e/d481/94949968dcd253ce961112968bc6b5ea?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hr4UdlWOwgLb7Vjj49E6SI~ohWwORuMR6BIzeW5IZjP-9-qjx-94GMc59g48IqPt8Gz4O46yL~eGCOFXkPmSpIGpLBkY35eMIz9nE~pBebZDVzLGLodAV1OyalzpE9HjA28LphdXmIqIICQUWgZhzu~gpn-UB0v4L4XSgRVz2GkVeBOnBqwwvkqp03Mtl6hmVA4vjDnBKVJQ0AfD1YF2BF627gIxw5YDhGGj82j7uTjXJiUb0OD8k1PCnFKb95aLpgFZVaI600YjOLVP-jtx3oHMrS2w6CK61~9lCmX3jLc8F7xRpzL7NgnJ4XosijUGyuNMCfs6tDAPEqtBcLPWlQ__",
          link: "https://waveapps.com",
          variant: "green",
          topSectionId: "colorful-carousel",
          ariaLabel: "Card 2",
          filterKeys: [],
          countryFilters: []
        },
        {
          title: "Step-by-step guide to master your money management skills",
          intro: "Promotion",
          image: "https://s3-alpha-sig.figma.com/img/861e/d481/94949968dcd253ce961112968bc6b5ea?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hr4UdlWOwgLb7Vjj49E6SI~ohWwORuMR6BIzeW5IZjP-9-qjx-94GMc59g48IqPt8Gz4O46yL~eGCOFXkPmSpIGpLBkY35eMIz9nE~pBebZDVzLGLodAV1OyalzpE9HjA28LphdXmIqIICQUWgZhzu~gpn-UB0v4L4XSgRVz2GkVeBOnBqwwvkqp03Mtl6hmVA4vjDnBKVJQ0AfD1YF2BF627gIxw5YDhGGj82j7uTjXJiUb0OD8k1PCnFKb95aLpgFZVaI600YjOLVP-jtx3oHMrS2w6CK61~9lCmX3jLc8F7xRpzL7NgnJ4XosijUGyuNMCfs6tDAPEqtBcLPWlQ__",
          link: "https://waveapps.com",
          variant: "purple",
          topSectionId: "colorful-carousel",
          ariaLabel: "Card 3",
          filterKeys: [],
          countryFilters: []
        },
        {
          title: "General ledger: What it is and how it works explained",
          intro: "Promotion",
          image: "https://s3-alpha-sig.figma.com/img/861e/d481/94949968dcd253ce961112968bc6b5ea?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hr4UdlWOwgLb7Vjj49E6SI~ohWwORuMR6BIzeW5IZjP-9-qjx-94GMc59g48IqPt8Gz4O46yL~eGCOFXkPmSpIGpLBkY35eMIz9nE~pBebZDVzLGLodAV1OyalzpE9HjA28LphdXmIqIICQUWgZhzu~gpn-UB0v4L4XSgRVz2GkVeBOnBqwwvkqp03Mtl6hmVA4vjDnBKVJQ0AfD1YF2BF627gIxw5YDhGGj82j7uTjXJiUb0OD8k1PCnFKb95aLpgFZVaI600YjOLVP-jtx3oHMrS2w6CK61~9lCmX3jLc8F7xRpzL7NgnJ4XosijUGyuNMCfs6tDAPEqtBcLPWlQ__",
          link: "https://waveapps.com",
          variant: "orange",
          topSectionId: "colorful-carousel",
          ariaLabel: "Card 4",
          filterKeys: [],
          countryFilters: []
        },
        {
          title: "Exclusive offer: Get 50% off Wave Pro Plan",
          intro: "Promotion",
          image: "https://s3-alpha-sig.figma.com/img/861e/d481/94949968dcd253ce961112968bc6b5ea?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hr4UdlWOwgLb7Vjj49E6SI~ohWwORuMR6BIzeW5IZjP-9-qjx-94GMc59g48IqPt8Gz4O46yL~eGCOFXkPmSpIGpLBkY35eMIz9nE~pBebZDVzLGLodAV1OyalzpE9HjA28LphdXmIqIICQUWgZhzu~gpn-UB0v4L4XSgRVz2GkVeBOnBqwwvkqp03Mtl6hmVA4vjDnBKVJQ0AfD1YF2BF627gIxw5YDhGGj82j7uTjXJiUb0OD8k1PCnFKb95aLpgFZVaI600YjOLVP-jtx3oHMrS2w6CK61~9lCmX3jLc8F7xRpzL7NgnJ4XosijUGyuNMCfs6tDAPEqtBcLPWlQ__",
          link: "https://waveapps.com",
          variant: "pink",
          topSectionId: "colorful-carousel",
          ariaLabel: "Card 5",
          filterKeys: [],
          countryFilters: []
        }
      ],
      analytics: {
        top_section_id: "colorful-section",
        tracking_name: "colorful-carousel"
      }}
    },
    {
      type: "partnershipgrid",
       props: {
      title: "Our Partners",
      partnerships: [
        {
          logoImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_of_EQ_Bank.svg/2560px-Logo_of_EQ_Bank.svg.png",
          backgroundColor: "#FFCB31",
          name: "Partnership promo",
          title: "It's time for banking that puts you first.",
          description: "Spend, save, and earn with always-on high interest and no fees on everyday banking.",
          partnershipUrl: "https://www.bankofamerica.com/smallbusiness/business-advantage-banking/",
          filterKeys: ["home"],
          countryFilters: ["US"],
          topSectionId: "partners",
          trackingName: "bofa"
        },
        {
          logoImage: "https://www.figma.com/community/resource/d3ce5064-a3ee-468b-8245-0e47504800f2/thumbnail",
          backgroundColor: "#00A380",
          name: "Partnership promo",
          title: "Your Automatic Mileage Tracker",
          description: "Get IRS-compliant mileage logs. Perfect for reimbursements & deductions. No more spreadsheets or paperwork.",
          partnershipUrl: "https://www.driversnote.com/",
          filterKeys: ["home"],
          countryFilters: ["US", "CA"],
          topSectionId: "partners",
          trackingName: "driversnote"
        },
        {
          logoImage: "https://www.jetpunk.com/img/user-img/9f/9f485f7551-450.webp",
          backgroundColor: "#007EFF",
          name: "Partnership promo",
          title: "Capital infrastructure to power your platform",
          description: "Embed a full range of capital products, natively within your platform.",
          partnershipUrl: "https://fundbox.com/",
          filterKeys: ["home"],
          countryFilters: ["US", "CA"],
          topSectionId: "partners",
          trackingName: "fundbox"
        },
        {
          logoImage: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_212/https://apps4u.com/wp-content/uploads/2024/05/Make-Logo-RGB@2x-1.webp",
          backgroundColor: "#5B1A95",
          name: "Make.com promo",
          title: "Automation you can see, flex, and scale",
          description: "Realize your business's full potential with Make's intuitive no code development platform and harness the full power of AI.",
          partnershipUrl: "https://www.make.com/",
          filterKeys: ["home", "lending"],
          countryFilters: ["US", "CA"],
          topSectionId: "partners",
          trackingName: "make"
        },
        {
          logoImage: "https://lofrev.net/wp-content/photos/2016/08/random_logo_1.png",
          backgroundColor: "#00A380",
          name: "Growth Merchant promo",
          title: "Financing built for small business",
          description: "Get funds up to $800,000 for your business in just 24 hours.",
          partnershipUrl: "https://www.merchantmaverick.com/",
          filterKeys: ["home"],
          countryFilters: ["US"],
          topSectionId: "partners",
          trackingName: "merchantmaverick"
        },
        {
          logoImage: "https://vectorseek.com/wp-content/uploads/2023/09/Random-Chat-Logo-Vector.svg-.png",
          backgroundColor: "#6439F5",
          name: "OpenPhone promo",
          title: "The best phone system for growing customer relationships",
          description: "OpenPhone brings your calls, texts, and contacts together in one AI-powered shared space.",
          partnershipUrl: "https://www.openphone.com/",
          filterKeys: ["home", "lending"],
          countryFilters: ["US"],
          topSectionId: "partners",
          trackingName: "openphone"
        },
        {
          logoImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Wise_Logo_512x124.svg/800px-Wise_Logo_512x124.svg.png",
          backgroundColor: "#a5f16bff",
          name: "Wise promo",
          title: "Send money globally for less",
          description: "Move your money where it matters. Save on international transfers in over 50 currencies, without any hidden fees.",
          partnershipUrl: "https://wise.com/",
          filterKeys: ["home"],
          countryFilters: ["US"],
          topSectionId: "partners",
          trackingName: "wise"
        },
        {
          logoImage: "https://cdn.freebiesupply.com/logos/large/2x/squarespace-logo-png-transparent.png",
          backgroundColor: "#a3a3a3ff",
          name: "Squarespace promo",
          title: "Website templates for every purpose",
          description: "Start with a flexible designer template or build your own, then customize to fit your style and professional needs using our drag-and-drop website builder.",
          partnershipUrl: "https://www.squarespace.com/",
          filterKeys: ["home"],
          countryFilters: ["US"],
          topSectionId: "partners",
          trackingName: "squarespace"
        }
      ],
      analytics: {
        section_id: "partners"
      },
      styleObject: "light"}
    },
    {
      type: "articlessection",
     
       props: { title: "Featured Articles",
      articles: [
        {
          title: "A Complete Guide to Small Business Tax Season",
          subtitle: "Take the stress out of tax season with this guide to confidently managing your books, audit-proofing your business, and getting your taxes done right.",
          intro: "By Wave (Tax)",
          slug: "complete-guide-small-business-tax-season",
          publishedAt: "January 1, 2025",
          filterKeys: ["home", "tax"],
          countryFilters: ["US", "CA"],
          topSectionId: "tax-section",
          trackingName: "article",
          heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
          styleObject: "light",
          markdownContent: `
So many small business owners dread tax season. Not only does it mean extra work on your plate, the fear of getting audited if you make a mistake is really stressful. 

But there’s a different way to think about tax season. All the extra work you’re doing at this time of year can actually teach you a lot about your business, and help you plan better for the year to come.

We built this guide to help you with three key things that will reduce your stress and give you insight into your business:

- To help you prepare your books properly for your accountant so that they can help you save as much money as possible.
- To demystify audits so you can prevent them, handle them when they happen, and stop fearing them.
- To teach you how to stay on top of your books year-round, so you won’t procrastinate and panic at tax time anymore.

![](https://cdn.prod.website-files.com/6253f6e60f27498e7d4a1e46/6384e5e3f51ffa38ac7c279b_Chapter_1__Understanding_common_tax_deductions_that%20save_you_money%202.jpg )

# Chapter 1: Understanding common tax deductions that save you money

Tax season can be stressful—especially for small businesses. But it’s also a huge opportunity for entrepreneurs to dig deep into their business’s finances and performance and set themselves up for success in the coming year.

Business tax deductions are a big part of that because they can save valuable funds you can use to grow your business. According to the United States Internal Revenue Service (IRS), business tax deductions for 2018 [totaled over $1.2 trillion](https://www.irs.gov/pub/irs-soi/soi-a-insp-id2104.pdf). That’s one big opportunity.


[![Source: IRS](https://cdn.prod.website-files.com/6253f6e60f27498e7d4a1e46/63330eeed3aa550371a70a22_Untitled-design-1.jpeg)](https://www.irs.gov/pub/irs-soi/soi-a-insp-id2104.pdf)

Understanding the tax deductions your business is eligible for goes a long way in ensuring you save every dollar possible. Even if you hand off tax preparation to a professional, it’s important to know your deductions so you can prepare and keep the appropriate records to claim them.

In this chapter, we’ll run through:

   - How tax deductions work
   - Deductions all self-employed workers and small business owners should know
   - Common mistakes to avoid when you deduct business expenses

If you need a quick tune-up on common tax terms to know before diving in, check out our glossary of tax terms.

And we’re off!


## How do tax deductions work?

In a nutshell, tax deductions (also called write-offs) are one way taxpayers can lower their tax liability or the amount of tax they pay. When you prepare and file your taxes, you claim the deductions your business qualifies for on your annual tax return.

Deductions come in all varieties, but they have one thing in common—they count against and reduce your total taxable income. That’s different from a tax credit, which counts dollar-for-dollar against your tax liability for the year.

For example, if your business income for last year was $100,000 and you claim $20,000 in write-offs, your taxable income is $80,000. Your savings from those deductions are the total deduction amount ($20,000) multiplied by the tax rate for your income bracket. If your rate is 25%, for example, those deductions would save you $5,000 on your taxes for that year.

## Deductions for self-employed workers

Independent contractors, freelancers, and sole proprietors are all considered self-employed workers in the eyes of the IRS.

What does that mean? At the most basic level, being self-employed means you don’t report to someone above you. From a tax perspective, self-employed workers typically pay quarterly estimated taxes that cover income tax and the additional self-employment tax.

For an individual, those taxes can add up in a hurry. That’s why it’s important to understand the six deductions we’ll cover next—so you can be ready to claim them and lessen the burden once tax season rolls around.

### 1. Home office deduction

The [home office tax deduction](https://www.waveapps.com/blog/tax-deductions-home-office) is probably one of the most well-known and least understood deductions available to self-employed people. In a nutshell, this deduction is aimed at giving you credit for expenses associated with maintaining an office in your home.

It can be a substantial annual deduction, so it’s a wonder why more self-employed workers don’t claim it.

The costs of maintaining a workspace in your home can really add up, so if you’re eligible, the home office deduction is well-worth the time spent calculating it. You can deduct a percentage of home office expenses relating to:

   - Rent or mortgage
   - Renters’ or homeowners’ insurance
   - Property taxes
   - Internet and utilities
   - Leasehold Improvements

Not to mention, the IRS instituted a standard rate for home office deductions, creating a much faster and simpler method for calculating your deduction amount. The rate is $5 per square foot of office space, up to a maximum deduction for 300 square feet or $1,500.

Your home office space only needs to meet two main requirements to qualify for the deduction:

   - The space has to be used to conduct business regularly and exclusively, meaning you can’t claim an entire room if it actually doubles as the guest room.
   - Your home office needs to be your primary place of business. If you head to the coffee shop from time to time, that’s okay.

If you rent an office space outside your home, see the Rent and utilities section under small business deductions.

 [Wave](https://youtu.be/Gnt--fjvbuY?si=py2vaaJYBMUvWfnf)


 >*Wave’s receipts feature is a paid product that requires a subscription. Pricing information can be found [here](https://www.waveapps.com/receipts).

 >**We use Plaid to facilitate bank connections. Not all financial institutions are supported so we can’t guarantee that you will be able to connect an account. Check Plaid's troubleshooting guide for more information or learn more about [how bank connections work at Wave](https://support.waveapps.com/hc/en-us/articles/115005541303-Understanding-bank-connections).

    `,
        },
        {
          title: "2025 tax checklist: Get ready for tax season",
          intro: "By Wave (Tax)",
          subtitle: "As we kick off the new year, it's time to get your business ready for tax filing season. Follow these steps to get your books in shape.",
          slug: "2025-tax-checklist-get-ready-for-tax-season",
          publishedAt: "February 1, 2024",
          filterKeys: ["home", "tax"],
          countryFilters: ["CA"],
          topSectionId: "tax-section",
          trackingName: "article",
          heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
          styleObject: "light",
          markdownContent: "We know, we know. Preparing for tax season isn't everyone's favorite task, but getting a head start can save you lots of time down the road..."
        },
        {
          title: "How to file small business taxes in 4 easy steps",
          intro: "By Wave (Tax)",
          subtitle: "Although tax season is no walk in the park, it doesn't have to be the bane of your business's existence. Here's a sneak peek at the four things you'll need to do when filing small business taxes.",
          slug: "how-to-file-small-business-taxes-in-4-easy-steps",
          publishedAt: "October 6, 2023",
          filterKeys: ["home", "tax"],
          countryFilters: ["US"],
          topSectionId: "tax-section",
          trackingName: "article",
          heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
          styleObject: "light",
          markdownContent: "Small business owners live by a different calendar—one that doesn't have four seasons, but five..."
        },
        {
          title: "Separate business and personal finances to simplify tax season",
          intro: "By Wave (Banking)",
          subtitle: "Separating your business and personal accounts can unlock a whole new world of tax benefits for your small business.",
          slug: "separate-business-and-personal-finances-to-simplify-tax-season",
          publishedAt: "February 1, 2024",
          filterKeys: ["home", "banking"],
          countryFilters: ["US"],
          topSectionId: "banking-section",
          trackingName: "article",
          heroImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
          styleObject: "light",
          markdownContent: "Imagine you're at the store picking up supplies for your business, and you realize you need to grab a few personal items as well..."
        },
        {
          title: "7 ways a line of credit can benefit small businesses",
          intro: "By Wave (Lending)",
          subtitle: "When it comes to business financing, a business line of credit is a popular choice among small business owners. Here's 7 ways a line of credit can benefit your business and how to apply.",
          slug: "7-ways-a-line-of-credit-can-benefit-small-businesses",
          publishedAt: "February 1, 2024",
          filterKeys: ["home", "lending"],
          countryFilters: ["US"],
          topSectionId: "lending-section",
          trackingName: "article",
          heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          styleObject: "light",
          markdownContent: "If you own a business, you probably already know that sometimes you need access to working capital to help you grow..."
        },
        {
          title: "5 unexpected times to get a business loan",
          intro: "By Wave (Lending)",
          subtitle: "Most business owners will need capital at some point to either get operations off the ground, grow, or manage cash flow. This checklist will help you prepare for tax season and ensure you're taking advantage of all available deductions.",
          slug: "5-unexpected-times-to-get-a-business-loan",
          publishedAt: "September 1, 2023",
          filterKeys: ["home", "lending"],
          countryFilters: ["US"],
          topSectionId: "lending-section",
          trackingName: "article",
          heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          styleObject: "light",
          markdownContent: "Business financing isn't just helpful—it's essential to most businesses' survival. Most business owners will need capital at some point..."
        },
        {
          title: "How to get a small business loan",
          intro: "By Wave (Lending)",
          subtitle: "This article covers everything you need to know about small business loans. The types available, ...",
          slug: "how-to-get-a-small-business-loan",
          publishedAt: "February 1, 2024",
          filterKeys: ["home", "lending"],
          countryFilters: ["US"],
          topSectionId: "lending-section",
          trackingName: "article",
          heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
          styleObject: "light",
          markdownContent: "When you're starting or growing a small business, one of the most important considerations is how you'll cover expenses..."
        },
        {
          title: "Do small businesses need insurance?",
          intro: "By Wave (Business Insurance)",
          subtitle: "Insurance is a necessity for most small businesses, but figuring out how much—and what type—you need can be tricky.",
          slug: "do-small-businesses-need-insurance",
          publishedAt: "June 21, 2023",
          filterKeys: ["home", "insurance"],
          countryFilters: ["US", "CA"],
          topSectionId: "insurance-section",
          trackingName: "article",
          heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
          styleObject: "light",
          markdownContent: "Insurance is a necessity for most small businesses, but figuring out how much—and what type of—small business insurance you need can be confusing..."
        }
      ],
      analytics: {
        section_id: "featured-articles"
      },
      styleObject: "light"
    }

    },
    {
      type: "partnershipspotlight",
       props: {
      logo: "https://wp.logos-download.com/wp-content/uploads/2023/02/BlueVine_Logo.png?dl",
      partner: "Bluevine",
      styleObject: "Bluewine",
      boxOneIntro: "1.5% interest on checking balance for eligible customers",
      boxOneImage: "https://s3-alpha-sig.figma.com/img/b657/7b21/a5f0e995f1f4231c268db3dbd870c035?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Yj3euDvR2MQTytQ7eyHZR1OjhZeW9bs01PRPfd11EpI74qYap1ryWpJ1t16cxnQhKHRl92dV9m6EB0WFsAjTYilhMwt8fJ-fCYoWuWvrREZZvIRJwTw3OZgHoQ1uuP4dXeQXy6ZTKm0Oi5JLq7WhM5ZrWeButYYBDvJJvrZzWR2IrUOaoHh9ITDxerYKnN9TEtSWetnDwZdI305Cm5eGGWs4poyCct77DcdfdSrcg1OhLTtHJ4KCzolE64Wnf1ptqADjMOYnK77X7NHfhmY8th8j0lAR6mlb5DSYGuxVpUzwYaAs84WAzUaVMWXx7kaxb9eQemL9X6mgfiuBiuz47w__",
      boxTwoIntro: "Bill pay options that save you time",
      boxTwoImage: "https://s3-alpha-sig.figma.com/img/6578/2f69/f1ab72d4a0e67cb23551bb1a1f1fdfd9?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GuVUobXlutCmTxtOvJ8Kft3BM7~GINtGc2SY87dDWXUAzbYX17yXQtxmU-uLYBBjplcij32AnUe54IEk-7BJt5OgfdpdreefsNDsqK6waH3lVCEN7PpqTOGf6D0ml0U8I01pZPeh9pL68Q7FXZFflGUq3hKm1xOFyrPwlJRHsbbFeq5ofWGaj9y85hL3p5TpVEVv2BKFYBZQCB~bznWO9cQk9v0BATGKKvh47jvMT3Y1NLMOxIzR0k~ov7n-sidrCFtJu0p8~TnUiwhdmwABv56oOz4KvDhjFEly3MGVDwn-roveug1obxwuMHtOOgPwDRurkaJs7gJogwovdu6j2g__",
      ctaTitle: "Banking designed for small businesses",
      ctaButtonTitle: "Get Started Today",
      ctaButtonHref: "https://www.bluevine.com/",
      filterKeys: ["home", "finance", "business"],
      countryFilters: ["US", "CA"],
      analytics: {
        section_id: "partnership-spotlight-1",
        tracking_name: "partnership_spotlight_main"
      }}
    },
    {
      type: "partnershipaccounting",
       props: {
      sectionTitle: "Accounting and Taxes",
      boxOneTitle: "Generate your balance sheet with Wave",
      boxOneDescription: "With Waves accounting software, your balance sheet builds itself, helping you gain important business insights.",
      boxTwoTitle: "What is a balance sheet? Beginners guide with examples and tips",
      boxTwoDescription: "Ever wish you had a crystal ball for your business?",
      boxTwoImage: "https://s3-alpha-sig.figma.com/img/2bde/16b6/3fe9921767da48d9d114a305c78f93f3?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IFprS3-04kP4dDS3~QPQDHskIKp6ewLnmgktVHQd67Xr0cdprKagV4gzRIvM054sfCJmQjkCR8VEcNlsVUztuOqk6IQ5r4tywUKfqHoT5Fgvo4NbjqyVrY-gewLf2hNt8Pq6nnbL5NdjNQl-gPL2N~khsnoXngXtoOhtj1T~hrHnpm1yzHhiCtJ74vDV7iPOC0h0MS0A8rSikgIw-HDaR7NuYAE-5wCrP7kZZKc-EDAvyjvXGJo4C4Z05PBcvuyQcjpogLtFs9m44KR9l~wUM81rQFkyatUFQYIsMslv7tDS0SwDiZPrDNp7Nu0V6ELfYk~1dq7nlkr5CQxenli1PQ__",
      boxTwoImageAlt: "Analytics dashboard showing financial metrics",
      boxTwoButtons: [
        {
          analyticsId: "partnership_accounting_learn_more",
          text: "Learn More",
          href: "/learn-more",
          variant: "secondary"
        }
      ],
      boxThreeTitle: "Bonus: Save time with accounting software",
      boxThreeImage: "https://s3-alpha-sig.figma.com/img/f906/f605/f1bffa7f1e9cc3a53b8cfba413012205?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=haC83zy-2vyqZFZNHDQZCFYVtOWZf8BQT~GLpb2lGQ5Ph7KXL570JpnOAS7hosK3ObSpYiKdjHWyVS7FEdgxa2TvoueA-xtOOCWcPsAleQ~cRzJI6d8nyoIt64LrMh4aopNZ92gneTu6ZhHdHqE02iZflOQYZJokLwOvon6xGsLxTsoIbFuY0MkVk77im~zrysorBeQreoHYlgO6ONzhf9iaHjJ~GMwD182kCo1HwQ1x2whbqj~kaaZieDB3RA~1GJoo346-aLHSC2vdht4uLspWHGv1uviGT1N5Bf5M36NLcNQ6RhS0xcvAz50ZcHfDc~xxp~rg0MXJD7IX5nx~xg__",
      boxThreeImageAlt: "Tax compliance interface",
      boxThreeDescription: "Automatically organizing your transactions, keeping your balance sheet up-to-date for you behind the scenes.",
      boxThreeButtons: [
        {
          analyticsId: "partnership_accounting_tax_guide",
          text: "Get Started",
          href: "/tax-guide",
          variant: "primary"
        }
      ],
      boxFourTitle: "Sample balance sheet for a freelancer or small business",
      boxFourDescription: "Now that you can read a balance sheet like a pro, let's get into a <a href='/balance-sheet-example' style='color: inherit; text-decoration: underline;'>real-world example</a>.",
      styleObject: "Wave",
      filterKeys: ["home", "finance", "partnerships"],
      countryFilters: ["US", "CA"],
      analytics: {
        section_id: "partnership-accounting",
        analytics_id: "partnership_accounting_section"
      }
    }
    },
    {
      type: "promocomponent",
       props: {
      offerHeadline: "LIMITED TIME OFFER",
      offerText: "Get 50% off on your next purchase!",
      offerDescription: "This is a special promotion for our valued customers. Use the code PROMO50 at checkout.",
      ctaUrl: "https://waveapps.com",
      promoCodeText: "PROMO50",
      offerEndDate: "2025-08-28T00:00:00.000Z",
      imageAltText: "Promo image",
      termsAndConditionsUrl: "https://waveapps.com/legal/terms-of-use",
      filterKeys: [],
      countryFilters: [],
      analytics: {
        section_id: "promo-section",
        tracking_name: "promo-tracking"
      }
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
        },
        {
          question: "Can I use Wave for my business taxes?",
          answer: "Absolutely! Wave provides comprehensive tax reporting features that make preparing and filing your business taxes straightforward. Our software automatically generates all the reports you need, including P&L statements, balance sheets, and tax summaries. Many users file their own taxes using Wave's reports."
        },
        {
          question: "What types of businesses can use Wave?",
          answer: "Wave is perfect for freelancers, consultants, contractors, and small businesses across all industries. Whether you're a <a href='https://www.waveapps.com/freelancing' target='_blank' style='color: #182127; text-decoration: underline;'>solo entrepreneur</a> just starting out or have a small team of employees, Wave scales with your business needs."
        },
        {
          question: "How secure is my financial data?",
          answer: "Security is our top priority. Wave uses bank-level encryption (256-bit SSL) to protect your data, and we're audited regularly for security compliance. Your data is stored on secure servers with multiple backups, and we never sell your information to third parties. Learn more about our <a href='https://www.waveapps.com/security' target='_blank' style='color: #182127; text-decoration: underline;'>security practices</a>."
        },
        {
          question: "Can I import data from other accounting software?",
          answer: "Yes! Wave supports importing data from QuickBooks, Excel, and other popular accounting platforms. Our <a href='https://support.waveapps.com/hc/en-us/articles/208622456' target='_blank' style='color: #182127; text-decoration: underline;'>migration tools</a> make it easy to switch to Wave without losing your historical financial data."
        },
        {
          question: "Does Wave integrate with my bank?",
          answer: "Wave connects with over 20,000 financial institutions across North America. Once connected, your transactions are automatically imported and categorized, saving you hours of manual data entry each month. Check if your bank is supported in our <a href='https://support.waveapps.com/hc/en-us/articles/208621986' target='_blank' style='color: #182127; text-decoration: underline;'>supported banks list</a>."
        }
      ],
      filterKeys: ["home"],
      countryFilters: ["US"],
      analytics: {
        top_section_id: "faq-section",
        tracking_name: "faq-component"
      }
    }
    },
    {
      type: "stepbystep",
       props: {
      title: "How accepting cards and digital payments works",
      steps: [
        {
          title: "Send your invoices",
          description: "Email invoices after you have been approved for online payments and have enabled the online payments option."
        },
        {
          title: "Get paid online",
          description: "Customers can pay instantly by credit card or Apple Pay when they view the invoice online using the secure 'Pay now' button."
        },
        {
          title: "Money is deposited",
          description: "You'll receive the money in your account in 1-2 business days."
        },
        {
          title: "Let's get in touch",
          description: "Wave's online payments software helps you get paid quickly by bank deposit, credit card, and Apple Pay."
        }
      ],
      styleObject: "Bluewine",
      stepsBackgroundColor: "#001B66",
      accentColor: "#0040FF",
      titleColor: "#FFFFFF",
      descriptionColor: "#FFFFFF",
      numberColor: "#FFFFFF",
      filterKeys: ["home"],
      countryFilters: ["US"],
      analytics: {
        top_section_id: "step-by-step",
        tracking_name: "step-by-step"
      }}
    },
    {
      type: "calculator",
       props: {
      illustrationSrc: "https://s3-alpha-sig.figma.com/img/ba87/de9d/ee3edc27a45cc7d21097b9aada94f518?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZGrLCTS-68QxKzhg83eejv2G9S3l~b7723bpsuyvBuXXKzgJmeIEolDEJi~gjd6S4K-1VAI7weiBpHANJwsoogjhp7~RVo7uV~YsHFbxT8FtYuCAgD4GyQhBylgA9gvyebnkjyTZvAljr~p0Uda6C4ecOd1JH1ZDIVOPfMpkAo~8rRhO2IEg5fDsMDLVQAVrjFNupZe7tU01Z3KLDDTBS1ZePhDYoQWgCZB0tqXogZKWk6LRxMfoAgHUGA3uVS3qxft9C37tIG3A4lc2~UAYT5JHl35PM0ovJkRFmw0wlAeQBFTt665oBNIdwEQ~D~FrCBL22MKxmqX28IUbBKfMhg__",
      title: "Loan Calculator",
      partnerName: "Wave Financial",
      initialValues: {
        loanAmount: 15000,
        interestRate: 6.5,
        loanTerm: "18 months"
      },
      styleObject: "Wave",
      analytics: {
        top_section_id: "calculator-section",
        tracking_name: "calculator-component"
      }
    }
    },
    {
      type: "htmlcssrenderer",
       props: {
        html: `
    <div class="survey-container">
      <h2>How happy are you with our service? 🤩</h2>
      <p>Please select an emoji that represents your feeling.</p>
      <div class="emoji-options">
        <button class="emoji-btn">😄</button>
        <button class="emoji-btn">😊</button>
        <button class="emoji-btn">😐</button>
        <button class="emoji-btn">😞</button>
      </div>
      <p class="feedback-message"></p>
    </div>
    <script>
      const buttons = document.querySelectorAll('.emoji-btn');
      const message = document.querySelector('.feedback-message');
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          message.textContent = 'Thank you for your feedback!';
          buttons.forEach(btn => {
            btn.style.opacity = '0.5';
            btn.style.cursor = 'default';
            btn.disabled = true;
          });
          button.style.opacity = '1';
          button.style.border = '2px solid #007bff';
        });
      });
    </script>
  `,
  css: `
    .survey-container {
      font-family: sans-serif;
      text-align: center;
      padding: 20px;
      background-color: #f9f4f1;
      border-radius: 24px;
    }
    h2 {
      color: #333;
      margin-bottom: 10px;
    }
    p {
      color: #666;
      margin-bottom: 25px;
    }
    .emoji-options {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 20px;
    }
    .emoji-btn {
      background: none;
      border: 2px solid transparent;
      border-radius: 50%;
      font-size: 2.5rem;
      padding: 10px;
      cursor: pointer;
      transition: transform 0.2s, border 0.2s;
    }
    .emoji-btn:hover {
      transform: scale(1.15);
    }
    .feedback-message {
        color: #28a745;
        font-weight: bold;
        height: 20px;
    }
  `,
        trackingName: "html-renderer",
      analytics: {
        top_section_id: "html-section",
        tracking_name: "html-renderer"
      }
       }
    },
    {
      type: "herowithimage",
      props: {
        name: "Wave Feature",
  title: "Seal the deal with Wave's new deposits feature",
  description:
    "You can now request deposits through your Wave estimates if you're a Pro Plan or online payments user. And trust us, it's a whole lot easier than the hacks you've been using.",
  image: "https://s3-alpha-sig.figma.com/img/b7e6/8dd2/211abc4bc7d92df7d889e986b16115fb?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Wv~a4hh6X9Trxd4p6Pahiq0B63~cGZSc6p90FxcLNMlUfFOwoVVMImB9eKKhcel2YHu5xAd4oVsDJgJDqQCYpG3GgVHl-T2ivzar-ZaQ3hFclGXmhn1x0aRVWyPRRG9MaGG~BILd-SCc8-sbHuE5k~du9vhR78ybpoVtgbx-5~L8rpAgcMrL0N9~9uv9k8E6ED~izNfpzJBzo08ozIqYvyCAESnoEVoVqUgxWXYunXOFh16ZYoKzW2tPerevlUmq4K83cTS4M2UCSvRaiAzaUSDEIJuek5l28yqysc5EnIYlV~iV71ZJdenzmF18IwCyZuePPlQKgTiMIDA7NkUDyQ__",
  imagePosition: "left",
  buttons: [
    {
      analyticsId: "hero-learn-more",
      text: "Get Started now",
      href: "https://www.waveapps.com/blog/seal-the-deal-with-waves-new-deposits-feature",
    },
    {
      analyticsId: "hero-learn-more",
      text: "Learn more",
      href: "https://www.waveapps.com/blog/seal-the-deal-with-waves-new-deposits-feature",
      variant: "secondary",
    },
  ],
  topSectionId: "hero-blurb-default",
  sectionId: "title",
  trackingName: "hero-blurb",
      }
    },{
      type: "cta",
      props: {
        name: "Call to Action",
        title: "Ready to Get Started?",
        description: "Join thousands of users who are already using our platform to streamline their workflow and boost productivity.",
        buttons: [
          {
            analyticsId: "cta-primary",
            text: "Start Free Trial",
            href: "#",
            variant: "primary",
          },
          {
            analyticsId: "cta-secondary", 
            text: "Learn More",
            href: "#",
            variant: "secondary",
          },
        ],
        topSectionId: "cta-section",
        sectionId: "cta-title",
        trackingName: "cta-test",
            }
    }
  ]

  return (
    <div style={{ 
      backgroundColor: 'white',
      minHeight: '100vh',
      padding: '0 0 40px 0',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <LayoutRenderer config={layoutConfig} />
    </div>
  )
}