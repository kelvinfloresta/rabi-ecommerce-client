import { Tabs, Card } from 'antd'
import React, { useState } from 'react'
import { CategoryPaneProvider } from 'src/contexts/ProductPage/CategoryPane.context'
import { ProductPaneProvider } from 'src/contexts/ProductPage/ProductPane.context'

import { NewCategoryDrawer } from '../../components/Drawer/NewCategoryDrawer'
import { NewProductDrawer } from '../../components/Drawer/NewProductDrawer'
import { Page } from '../../components/Page/Page.component'
import { ToolbarButton } from '../../components/Toolbar'
import { useOpen } from '../../hooks/useOpen'

import { ProductPageTab } from './ProductPageTab.enum'
import { CategoryTableOfProductPage } from './containers/CategoryTableOfProductPage'
import { ProductTableOfProductPage } from './containers/ProductTableOfProductPage'

const { TabPane } = Tabs

export default function Product() {
  const {
    isOpen: productDrawerOpen,
    close: closeProductDrawer,
    open: openProductDrawer,
  } = useOpen()

  const {
    isOpen: categorytDrawerOpen,
    close: closeCategoryDrawer,
    open: openCategoryDrawer,
  } = useOpen()

  const [activeTab, setActiveKey] = useState<string>(ProductPageTab.product)

  const footer = (
    <Tabs activeKey={activeTab} onChange={setActiveKey}>
      <TabPane tab="produtos" key={ProductPageTab.product} />
      <TabPane tab="categorias" key={ProductPageTab.category} />
    </Tabs>
  )

  const extra = [
    <ToolbarButton key="0" onClick={openProductDrawer}>
      Novo produto
    </ToolbarButton>,

    <ToolbarButton key="1" onClick={openCategoryDrawer}>
      Nova categoria
    </ToolbarButton>,
  ]

  return (
    <ProductPaneProvider>
      <CategoryPaneProvider>
        <Page title="Produtos" footer={footer} extra={extra}>
          <TabPane
            key={ProductPageTab.product}
            active={activeTab === ProductPageTab.product}>
            <Card>
              <ProductTableOfProductPage />
            </Card>
          </TabPane>

          <TabPane
            key={ProductPageTab.category}
            active={activeTab === ProductPageTab.category}>
            <Card>
              <CategoryTableOfProductPage />
            </Card>
          </TabPane>

          <NewCategoryDrawer
            isOpen={categorytDrawerOpen}
            onClose={closeCategoryDrawer}
          />
          <NewProductDrawer
            isOpen={productDrawerOpen}
            onClose={closeProductDrawer}
          />
        </Page>
      </CategoryPaneProvider>
    </ProductPaneProvider>
  )
}
