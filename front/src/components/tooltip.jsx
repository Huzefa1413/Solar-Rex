import { useEffect } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ToolTip from 'react-bootstrap/Tooltip';

function TooltipComponent(props) {
  // ['top', 'right', 'bottom', 'left']

  useEffect(() => {
    const elem = document.getElementById('tooltip-top');
    if(elem){
      elem.style.overflow = 'hidden';
      console.log(elem);
    }
  },[])

  return (
    <OverlayTrigger placement={props.placement} overlay={
      <ToolTip className='abc' id={`tooltip-${props.placement}`}> {props.tooltipText} </ToolTip>} >
      {props.children}
    </OverlayTrigger>
  );
}

export default TooltipComponent;