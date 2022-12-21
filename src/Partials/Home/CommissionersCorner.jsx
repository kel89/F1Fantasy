import { useState, useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { API, graphqlOperation } from 'aws-amplify';
import { listCommissionerMessages } from '../../graphql/queries';


export default function CommissionersCorner({}){
    const [expanded, setExpanded] = useState(true);
    const [message, setMessage] = useState();

    useEffect(() => {
        getMessage();
    }, [])

    const getMessage = async () => {
        let resp = await API.graphql(graphqlOperation(listCommissionerMessages));
        let messageData = resp.data.listCommissionerMessages.items[0];
        setMessage(messageData);
    }

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
                    {message ? message.message : <>Loading...</>}
                </div>
                <div className='text-gray-400 text-xs mt-2'>
                    {message ? (new Date(message.updatedAt)).toLocaleString() : null}
                </div>
            </AccordionDetails>
        </Accordion>
    )
}