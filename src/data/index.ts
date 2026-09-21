/* ------------------------------------------------------------------ */
/* Content bundle — one object per language                            */
/* ------------------------------------------------------------------ */

import * as enSite from './site'
import * as zhSite from './zh/site'
import * as enProducts from './products'
import * as zhProducts from './zh/products'
import * as enCases from './case-studies'
import * as zhCases from './zh/case-studies'
import * as enJourney from './digital-journey'
import * as zhJourney from './zh/digital-journey'
import * as enAi from './ai'
import * as zhAi from './zh/ai'
import * as enWealth from './wealth'
import * as zhWealth from './zh/wealth'
import * as enLogic from './product-logic'
import * as zhLogic from './zh/product-logic'
import * as enPo from './product-owner'
import * as zhPo from './zh/product-owner'
import * as enCasePo from './case-po'
import * as zhCasePo from './zh/case-po'
import * as enPersonas from './personas'
import * as zhPersonas from './zh/personas'
import * as enMap from './journey-map'
import * as zhMap from './zh/journey-map'
import * as enDelivery from './ai-delivery'
import * as zhDelivery from './zh/ai-delivery'
import * as enPages from './pages'
import * as zhPages from './zh/pages'

const en = {
  navItems: enSite.navItems,
  ctaRoute: enSite.ctaRoute,
  productMap: enSite.productMap,
  fromProductToExperience: enSite.fromProductToExperience,
  layers: enSite.layers,
  home: enSite.home,
  exploreCards: enSite.exploreCards,
  about: enSite.about,

  products: enProducts.products,
  productNavItems: enProducts.productNavItems,
  valueLabels: enProducts.valueLabels,

  caseStudies: enCases.caseStudies,
  casePo: enCasePo.casePo,

  digitalJourney: enJourney.digitalJourney,
  journeyMap: enMap.journeyMap,
  advisoryJourneyMap: enMap.advisoryJourneyMap,

  aiUseCases: enAi.aiUseCases,
  aiArchitecture: enAi.aiArchitecture,
  aiConcepts: enAi.aiConcepts,
  aiPrinciples: enAi.aiPrinciples,
  aiControlCards: enAi.aiControlCards,
  buildVsBuy: enDelivery.buildVsBuy,
  rolloutPhases: enDelivery.rolloutPhases,
  evaluationHarness: enDelivery.evaluationHarness,
  aiKpis: enDelivery.aiKpis,

  ecosystem: enWealth.ecosystem,
  segments: enWealth.segments,
  coreProcesses: enWealth.coreProcesses,
  valueChain: enWealth.valueChain,
  solutionFamilies: enWealth.solutionFamilies,
  personas: enPersonas.personas,

  logicConcepts: enLogic.logicConcepts,
  lifecycleSteps: enLogic.lifecycleSteps,

  conceptToRequirement: enLogic.conceptToRequirement,
  frameworkQuestions: enLogic.frameworkQuestions,

  decisionFrameworks: enPo.decisionFrameworks,
  riceExample: enPo.riceExample,
  epics: enPo.epics,
  kpiFramework: enPo.kpiFramework,
  riskRegister: enPo.riskRegister,
  releasePlan: enPo.releasePlan,
  deliveryHygiene: enPo.deliveryHygiene,
  stakeholderMap: enPo.stakeholderMap,
  lifecycleArtefacts: enPo.lifecycleArtefacts,
  systemTouchpoints: enPo.systemTouchpoints,

  pages: enPages.pages,
}

const zh = {
  navItems: zhSite.navItems,
  ctaRoute: zhSite.ctaRoute,
  productMap: zhSite.productMap,
  fromProductToExperience: zhSite.fromProductToExperience,
  layers: zhSite.layers,
  home: zhSite.home,
  exploreCards: zhSite.exploreCards,
  about: zhSite.about,

  products: zhProducts.products,
  productNavItems: zhProducts.productNavItems,
  valueLabels: zhProducts.valueLabels,

  caseStudies: zhCases.caseStudies,
  casePo: zhCasePo.casePo,

  digitalJourney: zhJourney.digitalJourney,
  journeyMap: zhMap.journeyMap,
  advisoryJourneyMap: zhMap.advisoryJourneyMap,

  aiUseCases: zhAi.aiUseCases,
  aiArchitecture: zhAi.aiArchitecture,
  aiConcepts: zhAi.aiConcepts,
  aiPrinciples: zhAi.aiPrinciples,
  aiControlCards: zhAi.aiControlCards,
  buildVsBuy: zhDelivery.buildVsBuy,
  rolloutPhases: zhDelivery.rolloutPhases,
  evaluationHarness: zhDelivery.evaluationHarness,
  aiKpis: zhDelivery.aiKpis,

  ecosystem: zhWealth.ecosystem,
  segments: zhWealth.segments,
  coreProcesses: zhWealth.coreProcesses,
  valueChain: zhWealth.valueChain,
  solutionFamilies: zhWealth.solutionFamilies,
  personas: zhPersonas.personas,

  logicConcepts: zhLogic.logicConcepts,
  lifecycleSteps: zhLogic.lifecycleSteps,

  conceptToRequirement: zhLogic.conceptToRequirement,
  frameworkQuestions: zhLogic.frameworkQuestions,

  decisionFrameworks: zhPo.decisionFrameworks,
  riceExample: zhPo.riceExample,
  epics: zhPo.epics,
  kpiFramework: zhPo.kpiFramework,
  riskRegister: zhPo.riskRegister,
  releasePlan: zhPo.releasePlan,
  deliveryHygiene: zhPo.deliveryHygiene,
  stakeholderMap: zhPo.stakeholderMap,
  lifecycleArtefacts: zhPo.lifecycleArtefacts,
  systemTouchpoints: zhPo.systemTouchpoints,

  pages: zhPages.pages,
}

export type Content = typeof en

export const content: Record<'en' | 'zh', Content> = { en, zh }
