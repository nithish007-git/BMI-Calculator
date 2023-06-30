import Alert from 'react-bootstrap/Alert';
import './alert.css';
function Alert1(props) {
  return (
    <>
    <div className='bod'>

  
      {[

        'success',

      ].map((variant) => (
        <Alert key={variant} variant={variant}>
         You are {props.val2}
        </Alert>
      ))}
        </div>
    </>
  );
}

export default Alert1;