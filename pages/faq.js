import React from 'react'
import Head from 'next/head'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import style from "../styles/Faq.module.css"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqData } from '../faqData';

const faq = () => {
  return (
    <Box>
      <Container>

        <Head>
          <title>Frequnetly Ask Question</title>
          <meta name="description" content="Marktine Technology Product Page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={style.myhrdiv}>
          <h1 className={style.myheading}> <span style={{ color: "green" }}>Frequently</span>   Asked Question</h1>
          <hr className={style.myhr} />
        </div>

        <div className={style.container}>
          {
            faqData.map((e) => {
              console.log("Mahilex", e)
              return <div key={e.id} className={style.subContainer}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{e.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {e.Describe}</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

            })

          }



        </div>
      </Container>
    </Box>

  )
}

export default faq