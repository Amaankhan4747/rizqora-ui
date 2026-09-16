import { WorkflowStepDetail } from '../types';

export const WORKFLOW_STEPS_DATA: WorkflowStepDetail[] = [
  {
    step: '01',
    slug: 'requirement',
    title: 'Requirement',
    shortDesc: 'Scope analysis, source file parsing, and glossary extraction.',
    heroTagline: 'Deconstructing enterprise assets into structured linguistic architecture.',
    overview: 'The Requirement phase sets the technical foundation for zero-defect multilingual delivery. We perform deep structural inspection of your source assets, isolate translatable strings, parse complex code repositories, extract domain glossaries, and align brand tone-of-voice guidelines before a single word is translated.',
    deliverables: ['Asset Parsing', 'Glossary Extraction', 'Style Guide Alignment', 'File Sanitization', 'Volume & Timeline Blueprint'],
    keyActivities: [
      {
        title: 'Deep Source File & Code Parsing',
        desc: 'Automated extraction of translatable strings across InDesign, Figma, XML, JSON, PO, XLIFF, Markdown, and source code while safeguarding markup, regex variables, and code syntax.'
      },
      {
        title: 'Automated Terminology & Glossary Harvest',
        desc: 'Algorithmic extraction of repeated enterprise nouns, technical acronyms, and product terminology to build baseline bilingual glossaries and do-not-translate (DNT) brand registries.'
      },
      {
        title: 'Linguistic Tone & Cultural Scoping',
        desc: 'Comprehensive review of target market expectations, dialect requirements, honorific levels, and regulatory compliance standards (FDA, CE, ISO, GDPR).'
      },
      {
        title: 'Timeline, Resource & SLA Architecture',
        desc: 'Mapping of project volume against specialist native linguist pods, automated throughput velocity, and custom client delivery milestones.'
      }
    ],
    benefits: [
      {
        title: 'Eliminates Downstream Rework',
        desc: 'Resolving file encoding issues, missing fonts, and ambiguous source terms upfront cuts cycle times by up to 35%.'
      },
      {
        title: 'Bulletproof Brand Consistency',
        desc: 'Approved glossaries and DNT lists guarantee that proprietary trademarks and patented terms remain uncorrupted.'
      },
      {
        title: 'Transparent Budget & Turnaround',
        desc: 'Detailed word count breakdowns, repetitions analysis, and leverage calculations provide complete cost clarity from day one.'
      }
    ],
    qualityCheckpoints: [
      'Source encoding validation (UTF-8, UTF-16, Shift-JIS)',
      'Placeholder integrity check (e.g. {0}, %s, {{userName}})',
      'Glossary approval sign-off by client SME',
      'Regulatory compliance categorization'
    ],
    relatedServices: [
      { name: 'Translation Services', slug: 'translation' },
      { name: 'Multilingual Content Solutions', slug: 'multilingual-content-solutions' },
      { name: 'Desktop Publishing (DTP)', slug: 'dtp' }
    ],
    nextStep: {
      step: '02',
      title: 'Planning',
      slug: 'planning'
    }
  },
  {
    step: '02',
    slug: 'planning',
    title: 'Planning',
    shortDesc: 'Language pair mapping and linguist team allocation.',
    heroTagline: 'Intelligent resource routing paired with native domain expertise.',
    overview: 'During the Planning phase, our algorithmic resource orchestrator pairs your subject matter with certified native linguists who possess verified industry domain expertise. Concurrently, Translation Memories (TM) and customized Neural Machine Translation engines are calibrated specifically for your project.',
    deliverables: ['Team Routing', 'Timeline Milestone Schedule', 'TM Pre-Population', 'Security Protocol Setup', 'Dedicated PM Briefing'],
    keyActivities: [
      {
        title: 'Native Domain-Expert Linguist Routing',
        desc: 'Vetting and assigning ISO 17100 certified native translators holding 5+ years of verified specialization in your vertical (e.g., patent law, cardiology, cloud DevOps).'
      },
      {
        title: 'Translation Memory & Concordance Indexing',
        desc: 'Pre-analyzing project files against your historic Translation Memories to maximize reuse, minimize translation cost, and ensure historic terminology harmony.'
      },
      {
        title: 'Engine Adaptation & Neural Weight Tuning',
        desc: 'Configuring domain-specific neural MT engines with curated client glossaries and industry termbases for augmented post-editing efficiency.'
      },
      {
        title: 'Information Security & NDA Verification',
        desc: 'Ensuring all assigned linguists operate within encrypted zero-storage environments adhering to ISO 27001 and SOC 2 security protocols.'
      }
    ],
    benefits: [
      {
        title: 'Domain Authenticity',
        desc: 'Your medical, financial, or engineering copy is handled exclusively by subject-matter authorities, never generalists.'
      },
      {
        title: 'Maximized Cost Savings via TM',
        desc: 'Leveraging historical Translation Memory yields up to 40-60% cost reductions on repeated and fuzzy-matched segments.'
      },
      {
        title: 'Predictable Delivery Windows',
        desc: 'Clear work-in-progress quotas and automated milestone tracking ensure strict compliance with launch deadlines.'
      }
    ],
    qualityCheckpoints: [
      'Linguist accreditation verification (ISO 17100, ATA, ITI)',
      'Domain competency score matching (>95% threshold)',
      'Secure sandbox access enablement',
      'Translation Memory leverage audit'
    ],
    relatedServices: [
      { name: 'Machine Translation Post-Editing (MTPE)', slug: 'mtpe' },
      { name: 'Software & Website Localization', slug: 'software-website-localization' },
      { name: 'Interpretation', slug: 'interpretation' }
    ],
    prevStep: {
      step: '01',
      title: 'Requirement',
      slug: 'requirement'
    },
    nextStep: {
      step: '03',
      title: 'Translation',
      slug: 'translation'
    }
  },
  {
    step: '03',
    slug: 'translation',
    title: 'Translation',
    shortDesc: 'Neural Machine Translation paired with Translation Memory.',
    heroTagline: 'Hybrid human-AI velocity delivering uncompromising accuracy.',
    overview: 'The Translation phase combines state-of-the-art Neural Machine Translation (NMT) engines with certified human translators. We apply advanced CAT tool automation, active termbase lookups, and real-time concordance checking to translate large volumes with unprecedented speed without sacrificing nuance.',
    deliverables: ['First-Pass NMT Drafts', 'Human Augmented Translation', 'TM Segment Updates', 'Query Management Log', 'Bilingual Review Files'],
    keyActivities: [
      {
        title: 'Domain-Trained Neural Translation',
        desc: 'Processing initial string passes through customized neural engines fine-tuned on verified industry datasets to eliminate boilerplate manual typing.'
      },
      {
        title: 'Human-in-the-Loop Post-Editing (MTPE)',
        desc: 'Senior native linguists meticulously review, refine, and elevate machine-generated drafts to reach native human fluency, nuance, and contextual resonance.'
      },
      {
        title: 'Real-Time Termbase & Glossary Enforcement',
        desc: 'Interactive CAT tool validation automatically flags any deviation from agreed terminology, blocked terms, or incorrect case inflection.'
      },
      {
        title: 'Bilingual Query & Clarification Portal',
        desc: 'Centralized live communications channel connecting linguists directly with client project managers to clarify source ambiguities instantly.'
      }
    ],
    benefits: [
      {
        title: '5x Faster Market Velocity',
        desc: 'Hybrid human-AI workflows enable daily translation throughputs exceeding 6,000 words per linguist pod.'
      },
      {
        title: 'Consistent Terminology Everywhere',
        desc: 'Active termbase locks eliminate variation across multiple documents, modules, and simultaneous translation teams.'
      },
      {
        title: 'Living Translation Memory',
        desc: 'Every approved segment immediately updates your cloud TM, increasing efficiency for all future releases.'
      }
    ],
    qualityCheckpoints: [
      'Automated spellcheck and regex punctuation validation',
      'Do-not-translate (DNT) compliance check',
      'Termbase consistency audit score (>99%)',
      'Segment untranslated detection scan'
    ],
    relatedServices: [
      { name: 'Translation Services', slug: 'translation' },
      { name: 'Machine Translation Post-Editing (MTPE)', slug: 'mtpe' },
      { name: 'Transcription', slug: 'transcription' }
    ],
    prevStep: {
      step: '02',
      title: 'Planning',
      slug: 'planning'
    },
    nextStep: {
      step: '04',
      title: 'Localization',
      slug: 'localization'
    }
  },
  {
    step: '04',
    slug: 'localization',
    title: 'Localization',
    shortDesc: 'Cultural adaptation, formatting, and UI fitting.',
    heroTagline: 'Transforming translated words into authentic local user experiences.',
    overview: 'Localization goes far beyond linguistic translation. In this critical phase, we adapt imagery, numerical formats, currency symbols, legal disclosures, and interface typography to mirror native cultural customs and technical requirements of every destination market.',
    deliverables: ['Cultural Adaptation', 'UI String Optimization', 'Bi-Directional RTL Engineering', 'Asset & Graphics Refactoring', 'Currency & Metric Conversions'],
    keyActivities: [
      {
        title: 'Cultural Transcreation & Nuance Tuning',
        desc: 'Adapting idioms, humor, metaphors, color connotations, and imagery to match local cultural values and prevent offensive missteps.'
      },
      {
        title: 'UI String Length & Layout Fitting',
        desc: 'Managing text expansion (German/Russian up to +30%) and contraction (CJK/Arabic) to prevent clipping, awkward wrapping, or broken container overflows.'
      },
      {
        title: 'Right-to-Left (RTL) Layout Engineering',
        desc: 'Mirroring application UI, icons, animations, and typography for Arabic, Hebrew, and Persian users while preserving universal interface conventions.'
      },
      {
        title: 'Regional Format & Legal Compliance',
        desc: 'Automating the conversion of date formats, time zones, measurement units, currency symbols, and mandatory local regulatory disclaimers.'
      }
    ],
    benefits: [
      {
        title: 'Feels Truly Native',
        desc: 'Local users interact with your software or content as if it were originally conceptualized in their home country.'
      },
      {
        title: 'Zero Interface Breakages',
        desc: 'Pixel-perfect string fitting ensures mobile screens, web navigation bars, and buttons maintain balanced layouts.'
      },
      {
        title: 'Elevated Conversion Rates',
        desc: 'Culturally attuned marketing copy and locally appropriate visual assets generate up to 2.8x higher customer trust.'
      }
    ],
    qualityCheckpoints: [
      'UI truncation and line-wrap visual audit',
      'RTL mirror alignment and icon directionality check',
      'Number and currency localization validation',
      'Cultural sensibility and taboo screening'
    ],
    relatedServices: [
      { name: 'Software & Website Localization', slug: 'software-website-localization' },
      { name: 'Desktop Publishing (DTP)', slug: 'dtp' },
      { name: 'Subtitling', slug: 'subtitling' }
    ],
    prevStep: {
      step: '03',
      title: 'Translation',
      slug: 'translation'
    },
    nextStep: {
      step: '05',
      title: 'Quality Review',
      slug: 'quality-review'
    }
  },
  {
    step: '05',
    slug: 'quality-review',
    title: 'Quality Review',
    shortDesc: 'ISO 17100 certified post-editing and LQA verification.',
    heroTagline: 'Multi-tiered linguistic audits ensuring zero-defect global delivery.',
    overview: 'Our Quality Review phase enforces stringent ISO 17100 and ISO 9001 certified auditing standards. Independent senior linguists who were not involved in the initial translation conduct exhaustive linguistic quality assessments (LQA), scoring accuracy, style, terminology, and formatting against strict metrics.',
    deliverables: ['LQA Metric Scorecard', 'ISO 17100 Certification Report', 'In-Context Proofreading', 'Automated QA Sanity Checks', 'Final Linguistic Sign-Off'],
    keyActivities: [
      {
        title: 'Independent Second-Eye Review',
        desc: 'A dedicated senior linguist compares target text against source documents word-by-word to verify complete semantic fidelity, grammar, and register.'
      },
      {
        title: 'Algorithmic QA Automation (Xbench / Verifika)',
        desc: 'Automated script scans identifying missing tags, mismatched numbers, punctuation anomalies, inconsistent translation pairs, and prohibited words.'
      },
      {
        title: 'In-Context Linguistic QA (LQA)',
        desc: 'Testing translated strings directly within actual web browsers, mobile viewports, or PDF proofs to verify real-world optical rendering.'
      },
      {
        title: 'MQM / DQF Quality Scoring',
        desc: 'Standardized Multidimensional Quality Metrics (MQM) scoring categorizing minor, major, and critical errors against strict acceptance thresholds.'
      }
    ],
    benefits: [
      {
        title: 'Guaranteed ISO Compliance',
        desc: 'Meets the rigorous documentation and quality requirements demanded by healthcare, legal, and aerospace audits.'
      },
      {
        title: 'Zero Hallucinations or Omissions',
        desc: 'Two-tier verification completely eliminates automated translation artifacts or omitted source sections.'
      },
      {
        title: 'Quantified Quality Transparency',
        desc: 'Clients receive documented LQA scores demonstrating accuracy rates consistently exceeding 99.2%.'
      }
    ],
    qualityCheckpoints: [
      'MQM score threshold >98.5% approval',
      'Automated tag consistency 100% pass',
      'In-context visual proof approval',
      'Lead Quality Reviewer formal sign-off'
    ],
    relatedServices: [
      { name: 'Translation Services', slug: 'translation' },
      { name: 'Machine Translation Post-Editing (MTPE)', slug: 'mtpe' },
      { name: 'Desktop Publishing (DTP)', slug: 'dtp' }
    ],
    prevStep: {
      step: '04',
      title: 'Localization',
      slug: 'localization'
    },
    nextStep: {
      step: '06',
      title: 'Delivery',
      slug: 'delivery'
    }
  },
  {
    step: '06',
    slug: 'delivery',
    title: 'Delivery',
    shortDesc: 'Multi-format export and automated API dispatch.',
    heroTagline: 'Seamless deployment directly into your enterprise tech stack.',
    overview: 'The Delivery phase packages fully verified localized assets into your desired final production formats. Whether delivering print-ready InDesign documents, translated video subtitles, or pushing localized JSON strings directly into GitHub/GitLab repositories via our automated localization APIs, delivery is seamless and instantaneous.',
    deliverables: ['Multi-Format Asset Export', 'Automated API Webhook Dispatch', 'DTP Print-Ready PDFs', 'Delivery Manifest & Checksums', 'Final Audit Package'],
    keyActivities: [
      {
        title: 'Multi-Format File Generation',
        desc: 'Exporting localized content back into original file structures—including InDesign INDD, Illustrator, Word, Excel, PowerPoint, SRT, VTT, and XLIFF.'
      },
      {
        title: 'CI/CD & Repository Automation',
        desc: 'Automated PR creation or direct commit to GitHub, GitLab, Bitbucket, or CMS connectors (WordPress, Contentful, Strapi, Adobe Experience Manager).'
      },
      {
        title: 'Checksum & Asset Verification',
        desc: 'Verifying file integrity, correct font packaging, linked graphic assets, and delivery manifests before customer release.'
      },
      {
        title: 'Delivery Sign-Off & Client Feedback Loop',
        desc: 'Formal client notification, milestone closure, and immediate dispatch to designated internal team stakeholders.'
      }
    ],
    benefits: [
      {
        title: 'Zero Manual File Handling',
        desc: 'Developers and content teams avoid tedious copy-pasting; localized files land directly in deployment pipelines.'
      },
      {
        title: 'Ready for Immediate Launch',
        desc: 'All assets are pre-verified and formatted for immediate web deployment, app store release, or commercial print production.'
      },
      {
        title: 'Complete Audit Trail',
        desc: 'Detailed manifests and version tags provide traceability for enterprise corporate governance.'
      }
    ],
    qualityCheckpoints: [
      'File format and structure integrity check',
      'API transmission acknowledgment status 200',
      'DTP font embedding verification',
      'Client delivery manifest generation'
    ],
    relatedServices: [
      { name: 'Desktop Publishing (DTP)', slug: 'dtp' },
      { name: 'Software & Website Localization', slug: 'software-website-localization' },
      { name: 'Subtitling', slug: 'subtitling' }
    ],
    prevStep: {
      step: '05',
      title: 'Quality Review',
      slug: 'quality-review'
    },
    nextStep: {
      step: '07',
      title: 'Long-Term Support',
      slug: 'long-term-support'
    }
  },
  {
    step: '07',
    slug: 'long-term-support',
    title: 'Long-Term Support',
    shortDesc: 'Continuous TM maintenance, engine learning, and 24/7 PM.',
    heroTagline: 'Continuous linguistic optimization that compounds value over time.',
    overview: 'Enterprise localization is not a one-off transaction; it is an evolving strategic asset. In the Long-Term Support phase, we continuously maintain your Translation Memories, retrain custom AI models with newly verified data, and provide round-the-clock dedicated project management for rapid-response updates.',
    deliverables: ['Continuous TM Maintenance', 'AI Engine Incremental Retraining', '24/7 SLA Project Management', 'Quarterly Linguistic Audits', 'Volume Savings Analytics'],
    keyActivities: [
      {
        title: 'Translation Memory Cleaning & Deduplication',
        desc: 'Quarterly optimization of cloud TM databases to remove obsolete strings, reconcile duplicate phrases, and optimize leverage match rates.'
      },
      {
        title: 'Incremental Neural Engine Retraining',
        desc: 'Feeding approved human edits back into custom client NMT models to ensure automated first-pass quality progressively improves.'
      },
      {
        title: '24/7 Dedicated Account & PM Coverage',
        desc: 'Rapid-turnaround emergency support for urgent press releases, legal filings, product hotfixes, and unexpected regulatory updates.'
      },
      {
        title: 'Strategic Localization Analytics',
        desc: 'Executive reporting detailing total word volumes, historical cost savings achieved through TM, and market penetration insights.'
      }
    ],
    benefits: [
      {
        title: 'Compounding Cost Reductions',
        desc: 'As your Translation Memory expands, cost per word and turnaround times drop steadily with every successive release.'
      },
      {
        title: 'Smarter AI Over Time',
        desc: 'Your custom AI engine continually learns your brand cadence, reducing editing friction on every subsequent project.'
      },
      {
        title: 'Round-the-Clock Agility',
        desc: 'Global follow-the-sun project managers ensure your international teams are supported across all global timezones.'
      }
    ],
    qualityCheckpoints: [
      'TM deduplication and health audit',
      'AI engine BLEU / COMET score benchmark',
      'Client satisfaction SLA review',
      'Quarterly executive report sign-off'
    ],
    relatedServices: [
      { name: 'Machine Translation Post-Editing (MTPE)', slug: 'mtpe' },
      { name: 'Translation Services', slug: 'translation' },
      { name: 'Multilingual Content Solutions', slug: 'multilingual-content-solutions' }
    ],
    prevStep: {
      step: '06',
      title: 'Delivery',
      slug: 'delivery'
    }
  }
];

export function getWorkflowStepBySlug(slug: string): WorkflowStepDetail | undefined {
  const clean = slug.toLowerCase().trim();
  return WORKFLOW_STEPS_DATA.find(
    (s) =>
      s.slug === clean ||
      s.step === clean ||
      `0${s.step}`.endsWith(clean) ||
      s.title.toLowerCase() === clean
  );
}
