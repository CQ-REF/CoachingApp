// Shows the rendered HTML output depending on what the used chose from the ChooseIntent component.
// Allows editing of the contents to customise the outgoing email.
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
// import Input from '@material-ui/core/Input';
// import TextField from '@material-ui/core/TextField';

interface EmailBodyProps {
    emailText: JSX.Element, 
    emailTextRef: React.MutableRefObject<HTMLDivElement>,
    // greetingText: string,
    // bodyText: string,
    // goodbyeText: string
}

const EmailBody: React.FC<EmailBodyProps> = (props: EmailBodyProps) => {
    return (
        <Paper style={{border: '1px solid blue', height: '50%'}}>
            <div contentEditable={true} ref={props.emailTextRef}>
                {props.emailText}
            </div>

            {/* <TextField id="greeting" value={props.greetingText} />
            <TextField id="body" value={props.bodyText} />
            <TextField id="goodbye" value={props.goodbyeText} /> */}
        </Paper>
    );
}

export default EmailBody;
