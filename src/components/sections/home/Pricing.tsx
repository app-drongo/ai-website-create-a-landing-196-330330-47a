'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStarterAction = () => {
    router.push('/');
  };
  const handleProfessionalAction = () => {
    router.push('/');
  };
  const handleEnterpriseAction = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'SAP Assessment',
      description: 'Comprehensive analysis of your current SAP landscape',
      price: '$2,500',
      period: '/assessment',
      badge: null,
      features: [
        'Current system audit',
        'Integration readiness report',
        'Performance bottleneck analysis',
        'Security compliance review',
        'Optimization recommendations',
      ],
      cta: 'Start Assessment',
      popular: false,
      action: handleStarterAction,
    },
    {
      name: 'Full Integration',
      description: 'Complete SAP ERP integration with ongoing support',
      price: '$15,000',
      period: '/project',
      badge: 'Most Popular',
      features: [
        'End-to-end SAP integration',
        'Custom module development',
        'Data migration & validation',
        'User training & documentation',
        '6 months post-go-live support',
        'Performance monitoring',
        '24/7 technical support',
        'Quarterly system reviews',
      ],
      cta: 'Begin Integration',
      popular: true,
      action: handleProfessionalAction,
    },
    {
      name: 'Enterprise Partnership',
      description: 'Dedicated SAP consulting team for large-scale operations',
      price: 'Custom',
      period: '',
      badge: 'Enterprise',
      features: [
        'Dedicated SAP architect',
        'Multi-system integration',
        'Advanced workflow automation',
        'Real-time analytics dashboard',
        'Compliance & audit support',
        'Priority incident response',
        'Strategic roadmap planning',
        'Executive quarterly reviews',
      ],
      cta: 'Discuss Partnership',
      popular: false,
      action: handleEnterpriseAction,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            SAP Integration Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Transparent SAP
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Integration Costs
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Fixed-price SAP integration packages with no hidden costs. From initial assessment to
            full enterprise deployment, we deliver predictable results.
          </p>

          {/* Service Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Implementation
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Managed Services
              <Badge variant="secondary" className="ml-2 text-xs bg-primary/10 text-primary">
                Ongoing
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg border',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-muted hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge
                    variant="outline"
                    className="mb-4 mx-auto w-fit border-primary/20 text-primary"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2 text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6 text-muted-foreground">
                  {plan.description}
                </CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'border-primary/20'
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Full Integration' && (
                  <p className="text-center text-sm text-muted-foreground">
                    Free consultation • ROI guarantee included
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Complex SAP environment?</h3>
          <p className="text-muted-foreground mb-6">
            Multi-module SAP landscapes require specialized expertise. Our certified SAP architects
            will design a custom integration strategy that scales with your business.
          </p>
          <Button
            onClick={handleScheduleDemo}
            variant="outline"
            size="lg"
            className="border-primary/20 hover:bg-primary/5"
          >
            Schedule SAP Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
