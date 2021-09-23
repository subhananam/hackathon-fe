import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import './DashboardLayout.css'
import Navbar from '../Navbar'

interface ILayout {
  children: React.ReactNode
}

function DashboardLayout(props: ILayout) {
  const { Header, Content, Footer } = Layout
  return (
    <BrowserRouter>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Navbar/>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {props.children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            bottom: 0,
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </BrowserRouter>
  )
}

export default DashboardLayout
