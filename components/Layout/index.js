import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import style from './style'
import Header from '../Header'
import Footer from '../Footer'

export default (props) => {
return(
	<div>
		<Head/>
		<style jsx global>{style}</style>
		<div className='site-grid'>
			<Footer/>
			<Header/>
      {/* Notice how the Header and Footer are in the correct grid locations */}
      {/* despite being intentionally in the wrong logical order here */}
			<div className={'body ' + props.layoutClass}>
				{props.children}
			</div>
		</div>
	</div>
)}
