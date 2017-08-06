import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import style from './style'
import Layout from '../components/Layout'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default () => (
  <div>
    <Head/>
    <style jsx global>{style}</style>
    <Layout layoutClass='nested-grid'>
      {/* Check the CSS for the nested-grid element - it only has grid-template-areas:
        "top  	top 			top"
        and not middle or bottom as it should according to './style.js*/}
      <Title className='bottom'>Bottom</Title>
      <Title className='middle'>Middle</Title>
      <Title className='top'>Top</Title>
      {/* This means that "Top" is in the correct position, but Middle and Bottom are not */}
    </Layout>
  </div>
)
