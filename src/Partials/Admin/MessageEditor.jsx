import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
// import { API, graphqlOperation } from 'aws-amplify';
import { generateClient } from "@aws-amplify/api";
import { listCommissionerMessages } from "../../graphql/queries";
import { updateCommissionerMessage } from "../../graphql/mutations";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function MessageEditor({}) {
  const [message, setMessage] = useState();
  const [lastDB, setLastDB] = useState();

  const client = generateClient();

  const { user } = useAuthenticator((c) => [c.user]);

  useEffect(() => {
    getMessage();
  }, []);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const getMessage = async () => {
    // Make querry
    // let resp = await API.graphql(graphqlOperation(listCommissionerMessages));
    const resp = await client.graphql({ query: listCommissionerMessages });

    // extract
    let messageData = resp.data.listCommissionerMessages.items[0];

    // save
    setLastDB(messageData);
    setMessage(messageData.message);
  };

  const save = async () => {
    if (lastDB == undefined) {
      return;
    }
    let messageDetails = {
      id: lastDB.id,
      last_edit_by: user.nickname,
      message: message,
    };
    // let resp = await API.graphql(graphqlOperation(updateCommissionerMessage, {input: messageDetails}));
    const resp = await client.graphql({
      query: updateCommissionerMessage,
      variables: { messageDetails },
    });
    setLastDB(resp.data.updateCommissionerMessage);
  };

  const reset = () => {
    if (lastDB == undefined) {
      return;
    }

    // set Message with last DB
    setMessage(lastDB.message);
  };

  return (
    <div className="p-2 bg-white border shadow-lg">
      <h1 className="font-racing text-lg">Edit Commissioner's Message</h1>
      <br />
      <p>
        Last Edit: &nbsp;
        <span className="text-gray-400">
          {lastDB ? new Date(lastDB.updatedAt).toLocaleString() : "Loading..."}
          &nbsp;({lastDB ? lastDB.last_edit_by : null})
        </span>
      </p>
      <TextField
        multiline
        row={6}
        fullWidth
        value={message}
        onChange={handleMessageChange}
      />
      <div className="flex gap-2 mt-2">
        <button
          onClick={save}
          className="btn px-2 py-1 border rounded-sm border-green-500 text-green-500 transition hover:bg-green-500 hover:text-white"
        >
          Save
        </button>
        <button
          onClick={reset}
          className="btn px-2 py-1 border rounded-sm border-gray-500 text-gray-500 transition hover:bg-gray-500 hover:text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
