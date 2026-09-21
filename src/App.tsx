import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

import Home from '@/pages/Home'
import Products from '@/pages/Products'
import ProductDetail from '@/pages/ProductDetail'
import ProductLogic from '@/pages/ProductLogic'
import WealthManagement from '@/pages/WealthManagement'
import DigitalWealth from '@/pages/DigitalWealth'
import AiWealth from '@/pages/AiWealth'
import CaseStudies from '@/pages/CaseStudies'
import ProductOwner from '@/pages/ProductOwner'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/product-logic" element={<ProductLogic />} />
        <Route path="/wealth-management" element={<WealthManagement />} />
        <Route path="/digital-wealth" element={<DigitalWealth />} />
        <Route path="/ai-wealth" element={<AiWealth />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/product-owner" element={<ProductOwner />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
