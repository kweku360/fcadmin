import Head from 'next/head'
export default (props) => (
  
      <Head>
        <title>{ props.title || "Fantasy Cup"}</title>
        <link rel="stylesheet" type="text/css" href="../../static/styles/semantic.min.css"/>
        <link rel="stylesheet" type="text/css" href="../../static/styles/appstyle.css"/>
			
        {/* //we define datatables */}
        <link rel="stylesheet" type="text/css" href="../../static/datatable/datatable.css"/>
        <link rel="stylesheet" type="text/css" href="../../static/datatable/datatable-semantic.css"/>
      
      </Head>
  )