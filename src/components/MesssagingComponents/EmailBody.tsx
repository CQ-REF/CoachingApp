// Shows the rendered HTML output depending on what the used chose from the ChooseIntent component.
// Allows editing of the contents to customise the outgoing email.
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

interface EmailBodyProps = {
    emailText: JSX.Element, 
    emailTextRef: React.MutableRefObject<HTMLDivElement>
}

const EmailBody: React.FC<EmailBodyProps> = (props: EmailBodyProps) => {
    return (
        <Paper style={{height: '80vh'}}>
            <div contentEditable={true} ref={props.emailTextRef}>
                {props.emailText}
            </div>
        </Paper>
    );
}

export default EmailBody;
