'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import {
  Database,
  Shield,
  Workflow,
  Clock,
  BarChart3,
  Users,
  Cog,
  CheckCircle,
  Zap,
} from 'lucide-react';

export default function Features() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const features = [
    {
      icon: Database,
      title: 'SAP S/4HANA Migration',
      description:
        'Seamless migration from legacy SAP systems to S/4HANA with zero downtime and complete data integrity.',
      badge: 'Migration',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'SOC 2 compliant integration with advanced encryption and role-based access controls for your SAP environment.',
      badge: 'Security',
    },
    {
      icon: Workflow,
      title: 'Real-time Data Sync',
      description:
        'Bi-directional data synchronization between SAP and third-party systems with sub-second latency.',
      badge: 'Integration',
    },
    {
      icon: Clock,
      title: 'Automated Workflows',
      description:
        'Pre-built automation templates for procurement, finance, and HR processes to eliminate manual tasks.',
      badge: 'Automation',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description:
        'Real-time SAP reporting and analytics with custom dashboards and predictive insights.',
      badge: 'Analytics',
    },
    {
      icon: Users,
      title: 'Multi-tenant Architecture',
      description:
        'Scalable cloud infrastructure supporting multiple SAP instances with isolated data environments.',
      badge: 'Architecture',
    },
    {
      icon: Cog,
      title: 'API Management',
      description:
        'Comprehensive API gateway for SAP with rate limiting, monitoring, and version control.',
      badge: 'APIs',
    },
    {
      icon: CheckCircle,
      title: 'Compliance Ready',
      description:
        'Built-in compliance frameworks for GDPR, SOX, and industry-specific regulations.',
      badge: 'Compliance',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description:
        'Advanced caching and query optimization delivering 10x faster SAP response times.',
      badge: 'Performance',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            Enterprise Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Complete SAP Integration
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Enterprise-grade SAP integration capabilities designed for Fortune 500 companies
            requiring mission-critical ERP connectivity and data management.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-card"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to transform your SAP infrastructure?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePrimaryAction}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule SAP Assessment
            </button>
            <button
              onClick={handleSecondaryAction}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors text-foreground"
            >
              View Integration Demos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
