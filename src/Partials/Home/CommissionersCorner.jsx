import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function CommissionersCorner({}){
    const [expanded, setExpanded] = useState(true);


    return (
        <Accordion
            expanded={expanded}
            onChange={() => setExpanded(!expanded)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                id="commisionersCornerAccordion">
                <h1 className='font-racing text-2xl text-gray-700'>
                    Commissioner's Corner
                </h1>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    Welcome! Check back here for any important messages
                </div>
            </AccordionDetails>
        </Accordion>
    )
}